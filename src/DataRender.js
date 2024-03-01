
const DataRender = ({ setType }) => {
    return (
        <div className="Buttons" >
            <form onSubmit={(e) => e.preventDefault()}>
                <button className="User"
                    type='submit'
                    onClick={() => setType('users')}
                >USERS</button>
                <button className="Post"
                    type='submit'
                    onClick={() => setType('posts')}
                >POST</button>
                <button className="Comment"
                    type='submit'
                    onClick={() => setType('comments')}
                >COMMENT</button>
            </form>

        </div >


    )
}
export default DataRender