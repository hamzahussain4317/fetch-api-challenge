import Row from './Row'
const table = ({ items }) => {
    return (
        <div className="form-container">
            <table>
                <tbody>
                    {items.map(item => {
                        return <Row
                            key={item.id}
                            item={item} />
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default table;