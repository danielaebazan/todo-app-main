
const Modal = () => {
  
  const handleChange = () => {
    console.log('changing')
  }
  
  return (
    <div>

    <form className="modal">
      <input
      required
      maxLength={30}
      placeholder=" Create a new todo..."
      name="title"
      value={""}
      onChange={handleChange}
    />
    <br/>
  
    <input className="tick create" type="submit"/>
    </form>

    </div>
  );
}

export default Modal;
