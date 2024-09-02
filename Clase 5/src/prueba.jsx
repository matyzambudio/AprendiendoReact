import { useState } from "react";

function Prueba() {
  const [total, setTotal] = useState(0);
   const precio = 550;

   const cambiar= ()=>{
    setTotal(total+precio)
   }
  return (
    <>
    <h2>El total es : ${total}</h2>
      <div className="card">
        <h1>Lomo con fritas</h1>

        <button onClick={cambiar} >
          Comprar {total}
        </button>
      </div>
    </>
  );
}

export default Prueba;