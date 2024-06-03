import { useState } from 'react'

const Modal = ({ mode,getData }) => {

  const [data, setData] = useState({
    title: "",
    date: ""
  })

  const postData = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
        method: "POST",
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        console.log('WORKED')
        getData()
      }
    } catch(err) {
      console.error(err)
    }
  }
  
  const handleChange = (e) => {

    const {name, value} = e.target

    setData(data => ({
      ...data,
      [name] : value
    }))

    console.log(data)
  }
  
  return (
    <div className="new-item">

    <form className="info-container">
      <input className="modal"
      required
      maxLength={30}
      placeholder=" Create a new todo..."
      name="title"
      value={data.title}
      onChange={handleChange}
    />
  
    <input className="tick create" type="submit" onClick={postData}/>
    </form>

    </div>
  );
}

export default Modal;
