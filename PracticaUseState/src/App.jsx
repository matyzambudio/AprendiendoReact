import a from './imagenes/adidasblancaroja.jpg'
import b from './imagenes/alexander.jpg'
import c from './imagenes/mcqueen.jpg'
import d from './imagenes/nikeairmax.jpg'
import e from './imagenes/nikeblancagris.jpg'

import h from './imagenes/vans.jpg'
import './App.css';
import Card from './Micomponente.jsx';
import { useRef, useState} from 'react';



function App(){
   const [total,setTotal] = useState(0);
   const [mostrar,setMostrar]=useState(true);

   const loquiero =(precio) =>{
       setTotal(( prev=> prev+ precio));

  }
  const vaciar = (total) =>{
    setTotal(0)
    setMostrar(false)
  }
  
  return (
    <div style={{textAlign:"center",fontFamily:"cursive",background:"blue",border:"solid 2px black"}}>
      <h1>Tu compra es $$ {total}</h1>
     {mostrar &&<button onClick={vaciar}>Vaciar</button> }
    <div>

    </div>
     <div className="grid-container">
         
      <Card datoCompra={loquiero}  informacion={{marca:"Adidas",precio:35000,color:"Blanca/Roja"}} foto={a}/>

      <Card datoCompra={loquiero} informacion={{marca:"Alexander McQueen",precio:20000,color:"Blancas"}} foto={b}/>

      <Card datoCompra={loquiero} informacion={{marca:"Alexander McQueen",precio:20000,color:"Negras"}} foto={c}/>

      <Card datoCompra={loquiero} informacion={{marca:"Nike Air Max",precio:75000,color:"Negras"}} foto={d}/>

      <Card datoCompra={loquiero} informacion={{marca:"Nike Tempo",precio:85000,color:"Blanca/Gris"}} foto={e}/>

      

      <Card datoCompra={loquiero} informacion={{marca:"Vans",precio:130000,color:"Negra"}} foto={h}/>



      </div>
    </div>
  );
};

export default App;
