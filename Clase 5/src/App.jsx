
import Micomponente from "./Micomponente";
import "./App.css";
import Moto from './productos/motorola.jpg';
import Iphone from './productos/iphone.jpg';
import Viejo from './productos/viejo.png';
import { useState } from "react";

function App() {
 
  const [total,setCompra] = useState(0)

  const onCompra = (precio) =>{
    setCompra(prev => prev + precio)
  }

  return (
    <>
    <h2>Total a pagar es: {total} </h2>
   <Micomponente datos={{
    nombre:"MotoRaz2",
    marca:"Motorola",
    caracteristicas:"Memoria 23gb ram de 2gb camara 20px",
    color:"Negro/Gris",
    precio:80000,
    img:Moto }}

    dalecompra={onCompra}
    
   />
   <Micomponente datos={{
    nombre:"Iphone 13 pro max",
    marca:"Iphone",
    caracteristicas:"Memoria ram 1tb cam HDULTRA4K",
    color:"Pink",
    precio:22000,
    img:Iphone
  }}
  dalecompra={onCompra}
   />
   <Micomponente datos={{
    nombre:"Moto vintage",
    marca:"Motorola",
    caracteristicas:"Coleccion sonido Polifonico",
    color:"Negro",
    precio:20000,
    img:Viejo
  }}
  dalecompra={onCompra}
   />
   
    </>
  );
}

export default App;
