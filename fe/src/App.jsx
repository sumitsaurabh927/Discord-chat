import { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [chatMsg, setChatMsg] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // await fetch('http://localhost:5001/api/v1/sendChat',{
    //   method:POST, 
    // })
    await axios.post('http://localhost:5001/api/v1/sendChat', { chatMsg })
    // console.log(res)
  }

  const onChangeHandler = (e) => {
    setChatMsg(e.target.value)

  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input value={chatMsg} onChange={onChangeHandler} />
        <button >Send</button>
      </form>
    </>
  )
}

export default App
