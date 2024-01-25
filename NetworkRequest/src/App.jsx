import { useState } from 'react'
import DataDisplay from './DataDisplay.jsx'

function App() {
  const [data,setData]=useState([])        //its useState for store fetch data
  const [isLoading,setLoading]=useState(false)  //its useState for when fecth data is delay some time
  const [error,setError]=useState("")

let  fetchData=async ()=>{
  setLoading(true)
  setError("")
  try {
    let res=await fetch("https://jsonplaceholder.typicode.com/posts");
    let data=await res.json();
    console.log(data);
    setData(data)
    setLoading(false)
    
  } catch (erro) {
    console.log(erro);
    setLoading(false)
    setError("Error")
  }
  
  

}

  return (
    <>
    <div className='btnGetPost'>
    <button onClick={fetchData}>Get Post</button>
    </div>
    <hr />
    <h1>{isLoading?"Loading...":""}</h1>  
    <h1>{error!="" ?"Failed to Load Post REFRESH page":""}</h1>
    
    <DataDisplay  data={data}/>


      
    </>
  )
}

export default App
