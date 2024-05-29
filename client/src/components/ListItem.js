import TickIcon from "./TickIcon"
import deleteIcon from '../images/icon-cross.svg'

const ListItem = ({task}) => {
  return (
    <li className="list-item">
     
      <div className="info-container">
        <TickIcon/>
        <p className="task-title">{task.title}</p>
      </div>

      <div className="button-container">
        <button className="delete">
          <img src={deleteIcon} alt="Delete"/>
        </button>
      </div>
    </li>
  )
}

export default ListItem;
