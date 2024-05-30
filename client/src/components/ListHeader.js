import Modal from "./Modal";

const ListHeader = ( {listName} ) => {
  return (
    <div className="list-header">
      <h1>{listName}</h1>
      
      <div className="info-container">
       <Modal/>
      </div>
     
    </div>
  
  )
}

export default ListHeader;
