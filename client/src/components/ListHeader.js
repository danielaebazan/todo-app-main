import Modal from "./Modal";

const ListHeader = ( {listName, getData} ) => {
  return (
    <div className="list-header">
      <h1>{listName}</h1>
      
      <div className="info-container">
       <Modal mode={'create'} getData={getData}/>
      </div>
     
    </div>
  
  )
}

export default ListHeader;
