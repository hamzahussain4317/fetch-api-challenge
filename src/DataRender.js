import Ulist from './Ulist'


const DataRender = ({ setType, items }) => {
    return (
        <div className="Buttons" >
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
            <div>
                <ul>
                    {items.map((item) => {
                        <Ulist
                            item={item}
                        />
                    })}
                </ul>
            </div>

        </div >


    )
}
export default DataRender