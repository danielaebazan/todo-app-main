import Modal from "./Modal";

const ListHeader = ( {listName, getData} ) => {
  return (
    <div className="list-header">
      <h1 className="app-title">{listName}</h1>
      
      <div className="new-todo">
       <Modal mode={'create'} getData={getData}/>
      </div>
     
    </div>
  
  )
}

export default ListHeader;
