import axios from "axios"
import { BASE_URL } from "../globals"
import React, {useState, useEffect} from 'react'

export default function Comment(props) {
    const [getComment, setGetComment] = useState("")
    const [displayComments, setDisplayComments] = useState([])
    const [show, setShow] = useState(false)

    const getComments = async () => {
        let res = await axios.get(`${BASE_URL}/comments/${props.bookData._id}`)
        setDisplayComments(res.data.commentID)
    }

    useEffect(() => {
        getComments()
        //Because of a lag time in getting comments to render immediately, the timeout fucntion gives a slight delay to allow displayComment to get populated with comments data
        const timeout = setTimeout (()=> {
            setShow(true)
        }, 400)
        
        return () => clearTimeout(timeout)
        
    }, [show])

    if(!show) return null

    const handleChange = (e) => {
        setGetComment(e.target.value)
    }

    const submitComment = async (e) => {
        await axios.post(`${BASE_URL}/wishlist/comment`, {
            body: `${getComment}`,
            book_id: `${props.bookData._id}`,
        })
    }

    const deleteComment = async (id) => {
       await axios.delete(`${BASE_URL}/comments/${id}`)
       props.handleUpdate()
    }

    return (
        <div>
            <div className="user-comments">
                {displayComments.map((com, idx)=> (
                    <div className="comment-item" key={idx}><li >{com.body}</li>
                    <button className="remove-btn" onClick={()=> deleteComment(com._id)}>Remove</button></div>
                ))}
                </div> 
                <div className="user-comments-form">
                    <form onSubmit={submitComment}>
                        <label>Notes</label>
                        <input type="text" onChange={handleChange}></input>
                        <input type="submit"></input>
                    </form>
                </div>  
        </div>
    )
}
