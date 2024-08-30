import React from "react";
import "./App.css";

function Practica(props) {
  const { datos } = props; 
  const color = datos.style;

  const comprarlo = (e) =>{
    e.target.parentNode.style.display ="none";
    document.getElementById('total').innerHTML ="La cuenta Total es :" + datos.precio ;
 }
 
  return (
    <> 
        <div className="card" style={{ backgroundColor: color }} >
            <h1>{datos.rey}</h1>
            <div>
              <img src={datos.img} />
            </div>
            <h2>Precio</h2>
            <h3>$ {datos.precio}</h3>
            <button onClick={comprarlo}>Comprar</button>
          </div>
    </>
  );
}

export default Practica;
