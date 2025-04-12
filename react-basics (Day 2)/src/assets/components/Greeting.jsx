import './Greeting.css'

function Greeting({city}){
    const date = new Date().toDateString()
    let message;
    const time= new Date().getHours()
    if(time<12){
        message="Morning"
    }
    else if(time<16){
        message="Afternoon"
    }
    else{
        message="Evening"
    }
    const handleClick=()=>{
        console.log("you clicked a button")
    }

    return(
        <>
        <h2>Welcome to the 2nd day of summer internship program</h2>
        <h3>Today's date is {date}</h3>
        <h3>Good {message} class!-message from {city}</h3>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={()=>alert("hello")}>Say Hello</button>
        </>
    )
}

export default Greeting