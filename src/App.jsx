import React from 'react';
import { useState,useRef } from 'react';
import {BrowserRouter , Routes , Route,Link} from 'react-router-dom';
import Signup from './pages/Signup';
import Home from './pages/Home';

function App() {

  const products = [
  { title: 'Mango Mania', price: 80,status:'good',image: 'https://images.unsplash.com/photo-1663852397535-18292e115327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpZnQlMjBjYXJ8ZW58MHx8MHx8fDA%3D'},
  { title: 'Pure Organic Mixed Fruits Delight', price: 90,status:'good',image: 'https://images.unsplash.com/photo-1663852397535-18292e115327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3dpZnQlMjBjYXJ8ZW58MHx8MHx8fDA%3D'},
  
];

  const [mytitle, settitle] = useState("");
  const [myprice, setmydes] = useState("");
  const [mystatus, setmystatus] = useState("");
  const [myimage, setmyimage] = useState("");
  const [meall, setmeall] = useState(products);

    // let fullarr =[...products]; iss tarah bhi karke dekho fir as 
   

   const add = () => {
  

    const newuser = {

      title: mytitle,
      price: Number(myprice),
      status: mystatus,
      image: myimage
    };

if(newuser){

    setmeall([...meall, newuser]);
    settitle("");
    setmydes("");
    setmystatus("");

    // setshowme(false);
}

  };

{/* ab wo niche toggle menu banakr test kiya as  */}

    const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation();
    const menu = menuRef.current;
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    } else {
      menu.classList.add("show");
    }
  };

  {/* ab wo popup ko chalaya at click par using useref */}

 const popupRef = useRef(null);
 
const openPopup = () => {
    popupRef.current.classList.remove("hidden");
  
  };
const closePopup = () => {
    popupRef.current.classList.add("hidden");
   
  };

 

  return (
    <>
    <BrowserRouter>
    <h1>tarun</h1>
    
    <div className='boxfi'>
      <h1>JobStore</h1>

      <div className='nav1'>
        <h1><Link to='/' >Home</Link></h1>
        <h1>Signup</h1>
<h1><Link to='/Signup'  >okay</Link></h1>

      </div>
      
       </div>


       <div className='boxse'>
<div className='box1'>box1</div>
<div className='box2'>box2</div>
<div className='box3'>box3</div>

       </div>

       {/* ab wo user input wala form and print ui me value array of objects ki  */}

  <div className='myform'>
          <div><input type='text' placeholder='write title' value={mytitle} onChange={(e) => settitle(e.target.value)} /></div>
          <div><input type='text' placeholder='write description ' value={myprice} onChange={(e) => setmydes(e.target.value)} /></div>
          <div><input type='text' placeholder='write status' value={mystatus} onChange={(e) => setmystatus(e.target.value)} /></div>
          <div><input
  type="text"
  placeholder="Enter image URL"
  value={myimage}
  onChange={(e) => setmyimage(e.target.value)}
/></div>
          <div><button onClick={add} > Add</button></div>
        
        </div>


  <div>
  {meall.map((am, index) => {
    return (
    <div key={index} >
    my name is {am.title} having descripotion {am.price} with status {am.status}  done
     <img src={am.image} alt="" style={{ width: '200px', borderRadius: '10px' }} />
</div>)})}
</div>
      
 



 {/* ab wo niche toggle menu banakr test kiya as  */}


    <div className="app">
      <button
        ref={buttonRef}
        className="menu-button"
        onClick={toggleMenu}
      >
        Menu
      </button>

      <div ref={menuRef} className="menu-box">
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <div className="menu-item">Contact</div>
      </div>
    </div>

{/* ab wo popup ko chalaya at click par using useref */}


      <button className="quiz-button11" onClick={openPopup}>
        Start Quiz
      </button>

      <div className="popup-overlay11 hidden" ref={popupRef}>
        <div className="popup-box11">
          <button className="close-btn11" onClick={closePopup}>×</button>
          <h2>Quick Questions</h2>
          <p>1. What is your favorite programming language?</p>
          <p>2. How many years of coding experience do you have?</p>
        </div>
      </div>
    
 <button className="aquiz-button11" onClick={openPopup}>
        tarun bets 
      </button>
      <p>you are my person as they ,ake </p>
       <button className="bquiz-button11" onClick={openPopup}>
        by Start Quiz
      </button>
      <button><a href='https://whereisthemouse.com/how-to-use-button-as-link-in-react'>apply me </a></button>

 <Routes>
<Route path='/Signup' element={<Signup/>}  />
<Route path='/' element={<Home/>}  />

 </Routes>

 </BrowserRouter>
    </>
  )
}

export default App
