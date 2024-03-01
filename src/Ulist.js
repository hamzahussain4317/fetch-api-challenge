import Listitems from './Listitems'
const Ulist = ({ items }) => {
    return (
        <ul>
            {items.map(item => {
                return <Listitems key={item.id} item={item} />
            })}
        </ul >
    )
}
export default Ulist