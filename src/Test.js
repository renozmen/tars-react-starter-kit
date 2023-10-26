import { useEffect } from "react"
import { useState } from "react"
function Test() {

    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)
    // useEffect(() => {
    //     console.log('component render oldu!')
    // }, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
       let interval = setInterval(()=> console.log('interval çalıştı!'),1000)
        return () => {
            console.log('component destroyed')
            clearInterval(interval)
        }
    },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    return (
        <div>
            <h1>{postId}</h1>
            {post && JSON.stringify(post)}<br/>
            <button onClick={() => setPostId(postId => postId + 1)} style={{ padding: 5, border: '1px solid black', marginLeft: 70, borderRadius: 10 }}>Next</button>
            <br/>
            Test component
        </div>
    )
}

export default Test