
const Modal = () => {
  
  const handleChange = () => {
    console.log('changing')
  }
  
  return (
    <div className="new-item">

    <form className="info-container">
      <input className="modal"
      required
      maxLength={30}
      placeholder=" Create a new todo..."
      name="title"
      value={""}
      onChange={handleChange}
    />
  
    <input className="tick create" type="submit"/>
    </form>

    </div>
  );
}

export default Modal;
