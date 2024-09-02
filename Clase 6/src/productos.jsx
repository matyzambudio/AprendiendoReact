import "./App.css";

function Articulos(props) {
  const { info, foto, camiseta } = props;
  const comprar = () => {
    camiseta(info.precio);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "auto",
          textAlign: "center",
          border: "1px solid black",
          padding: "20px",
          boxSizing: "border-box",
          background:"rgb(3, 3, 225)"
        }}
      >
        <div style={{ textAlign: "center", width: "150px", margin: "0 auto" }}>
          <img src={foto} style={{ width: "100%", height: "210px" }} />
        </div>
        <h1>{info.titulo}</h1>
        <div>
          <h3>Precio:</h3>
          <h2>{info.precio}</h2>
        </div>
        <button onClick={comprar}>Comprar</button>
      </div>
    </>
  );
}

export default Articulos;
