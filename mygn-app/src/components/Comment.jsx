import axios from "axios"
import React, {useState, useEffect} from 'react'

export default function Comment(props) {
    console.log(props.bookData._id)

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
        }, 250)
        

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

   


    return (
        <div>
            <div>
                {displayComments.map((com, idx)=> (<li key={idx}>{com.body}</li>))}
                </div> 
             <form onSubmit={submitComment}>
                    <label>Comments</label>
                    <input type="text" onChange={handleChange}></input>
                    <input type="submit"></input>
                </form>
        </div>
    )
}
