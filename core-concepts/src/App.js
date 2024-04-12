import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const nayoks =["Anwar","Jafor","Sergio","Alonso","Max","louis hamilton"];
  const products = [
    {name:'photoshop',price:'90$'},{name:'illustator',price:'60$'},
    {name:'pdf-reader',price:'$40'}
  ]

  // const productNames = products.map(p => p.name);
  // console.log(productNames);

  // const nayokNames = nayoks.map(n => n);
  // console.log(nayokNames);
 
  return (
    <div className="App">
      <header className="App-header">

        <h1>List of F1 players</h1>
        <Counter></Counter>
        <Users></Users>

        {
          products.map( x => <Product product={x}></Product>)
        }
        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
       <ul>

        {
          nayoks.map( nayok => <li>{nayok}</li>)
        }
        {/* /* <li>{nayoks[0]}</li>
        <li>{nayoks[1]}</li>
        <li>{nayoks[2]}</li>
        <li>{nayoks[3]}</li> */ }

        {
          products.map(p => <li>{p.name}</li> )
        }

        {
          products.map(x => <li>{x.price}</li>)
        }

       </ul>
       
        <Person name="Max-vestapen" prof="F1-2024 champion"></Person>
        <Person name="Louis-Hamilton" prof="Japan grand prix champion"></Person>
        
      </header>
    </div>
  );
}

//setting up the state
function Counter(){
  const[count,setCount] = useState(10);
  // const handleIncrease = () => {
    
  //   setCount(count+1);
  // };
  // const handleDecrease = () => {
  //   setCount (count - 1);
  // };
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}



//declaring a component
function Product(props){
  const style = {
    backgroundColor:'lightgray',
    border:'2px solid gray',
    width:'300px',
    heigth:'300px',
    borderRadius:'15px',
    margin:'10px 10px',
    padding:'20px 10px'
  }

  //Destructring 
const {name,price} = props.product;
console.log(name,price);

  return(
    <div style = {style}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )

}



function Person(props){
  const style1 = {
    border: '10px solid yellow',
    margin:'10px 10px 10px 10px',
    width:'400px'
  }
  return (
    <div style={style1}>
      <h1>person: {props.name}</h1>
      <h1>Profession: {props.prof} </h1>
    </div>
  )
}

function Users(){
  const[users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
       
        {
          users.map(user => <li>
            {user.name}
          </li>)
        }
      </ul>
    </div>
  )
}

export default App;
