
import Greeting from "./assets/components/Greeting"
import Counter from "./assets/components/counter"
import reactLogo from './assets/react.svg'
import Mybutton from './assets/components/Mybutton'
import Login from "./assets/components/Login"
function App(){


  return(
    <>
     <Login/>
    <h1>My first React Page</h1>
    <Mybutton/>
    <Greeting  city="kottayam"/>
    <Greeting city ="Kochi"/>
    <Counter /> 
    <section className="images">
    <a href="https://vite.dev/" target="_blank">
    <img src="vite.svg"  alt="vite logo"/>
    </a>


    <a href="https://react.dev/" target="_blank">
      <img src={reactLogo}  alt="React logo"/>

    <img src="https://picsum.photos/id/237/200/300" alt="" />
    </a>

    </section>
   
    </>
    )
  }



export default App