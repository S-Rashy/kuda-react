import {useState} from 'react'
import "../App.css"

const Business = () => {
    const [myNum, setmyNum] = useState(0)
    const [checkClick, setCheckClick] = useState(false)

    const increaseNum= () =>{
        setmyNum(myNum +1)
    }
    const decreaseNum= () =>{
        setmyNum(myNum -1)
        setCheckClick(true)

    }
    // const newClick = () =>{
    //     setCheckClick(true)
    // }
    // setCheckClick(true)
    return ( <div>
        <br />
        <br />
        <br />
        <br />

        <h1>React Hooks</h1>
        <hr />
        

        <button className={checkClick? `bg-red`: `button`} onClick={decreaseNum } style={{
            width:"90px",
            height:"50px"
        }}> subtract</button>

        <h1>{myNum}</h1>

        <button onClick={increaseNum} style={{
            width:"90px",
            height:"50px"
        }} > plus</button>
         
    </div> );
}
 
export default Business;