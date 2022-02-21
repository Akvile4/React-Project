export const PostCreator = ({setPostContent, submitHandler}) => {
    return(
        <div>
            <form onSubmit={submitHandler}> 
                <input onChange={(e) => setPostContent(e.target.value)} />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}