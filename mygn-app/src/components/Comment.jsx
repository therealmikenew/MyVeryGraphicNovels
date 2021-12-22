import axios from "axios"
import React, {useState, useEffect} from 'react'

export default function Comment(props) {
    console.log(props.handleUpdate)
    const [getComment, setGetComment] = useState("")
    const [displayComments, setDisplayComments] = useState([])
    const [show, setShow] = useState(false)

    const getComments = async () => {
        let res = await axios.get(`http://localhost:3001/api/comments/${props.bookData._id}`)
        setDisplayComments(res.data.commentID)
    }

    useEffect(() => {
        getComments()
        
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
        await axios.post("http://localhost:3001/api/wishlist/comment", {
            body: `${getComment}`,
            book_id: `${props.bookData._id}`,
        })
    }


    const deleteComment = async (id) => {
        
       await axios.delete(`http://localhost:3001/api/comments/${id}`)
       props.handleUpdate()
 
    }

    return (
        <div>
            <div>
                {displayComments.map((com, idx)=> (
                    <div key={idx}><li >{com.body}</li>
                    <button onClick={()=> deleteComment(com._id)}>remove</button></div>
                ))}
                </div> 
             <form onSubmit={submitComment}>
                    <label>Comments</label>
                    <input type="text" onChange={handleChange}></input>
                    <input type="submit"></input>
                </form>
        </div>
    )
}
