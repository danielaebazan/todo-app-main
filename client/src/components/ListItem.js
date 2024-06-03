import TickIcon from "./TickIcon"
import deleteIcon from '../images/icon-cross.svg'

const ListItem = ({task, getData}) => {

  const deleteItem = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'DELETE'
      })
      if (response.status === 200) {
        getData()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <li className="list-item">
     
      <div className="info-container">
        <TickIcon/>
        <p className="task-title">{task.title}</p>
      </div>

      <div className="button-container">
        <button className="delete" onClick={deleteItem}>
          <img src={deleteIcon} alt="Delete"/>
        </button>
      </div>
    </li>
  )
}

export default ListItem;
