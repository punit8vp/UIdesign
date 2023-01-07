

import './App.css';
import Navbar from './components/Navbar';


import Radio from './Radio';
import Card from './components/Card';
import Footer from './components/Footer';
import Heading from './components/Heading';



function App() {
  return (
    <>
   
{/* <Navbar title="TextUtils" AboutText="About Text"/> */}
<Navbar />

<Radio/>
<Heading/>


<Card/>

{/* <div className="container my-5">
  <h1>Book from San Fransciso</h1>

</div> */}
<Footer/>

</>)
  
}


export default App;
