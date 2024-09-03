

function tarjeta(props){

    const {informacion , datoCompra , foto} = props

    const comprar = () =>{
        datoCompra(informacion.precio)
    }
    return(
        <>
        <div style={{
            width: "100%",
            height: "auto",
            textAlign: "center",
            border: "1px solid black",
            padding: "20px",
            boxSizing: "border-box",
            background:"black"
          }}
        >
          <div style={{ textAlign: "center", width: "150px", margin: "10px auto" }}>
            <img src={foto} style={{ width: "100%", height: "210px" }} />
          </div>
          <h1  style={{ margin: "20px" }}>{informacion.marca}</h1>
          <div >
            <h3>{informacion.color}</h3>
            <h2>Precio: {informacion.precio}</h2>
          </div>
          <button onClick={comprar}>Comprar</button>
        </div>
      </>
    );
  }
    

export default tarjeta;