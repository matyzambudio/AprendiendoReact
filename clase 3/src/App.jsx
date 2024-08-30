import img1 from "./rey_atanagildo.png";
import img2 from "./rey_ataulfo.png";
import img3 from "./rey_sisebuto.png";
import incognito from "./rey_incognito.png";
import "./App.css";

function App() {
  const nombres = ["Atanagildo", "Ataulfo", "Sisebuto"];

  const cambiar = (e) => {
    if (
      e.target.src.includes("atanagildo") ||
      e.target.src.includes("ataulfo") ||
      e.target.src.includes("aisebuto")
    ) {
      e.target.innerHTML = e.target.parentNode.style.background = "white";
      e.target.innerHTML = e.target.src = incognito;
    } else {
      e.target.innerHTML = e.target.style.visibility = "hidden";
    }
  };
  const titulo = (e) => {
    e.target.innerHTML = "Visto";
    e.target.style.color = "black";
    e.target.style.background = "pink";
    e.target.style.fontSize = "300%";
    e.target.style.borderRadius = "20px";
  };
  return (
    <>
      <div className="contenedor">
        <div className="cajas">
          <div className="uno">
            <img src={img1} onClick={cambiar} />
            <h1 onClick={titulo}>{nombres[0]}</h1>
          </div>

          <div className="dos">
            <img src={img2} onClick={cambiar} />
            <h1 onClick={titulo}>{nombres[1]}</h1>
          </div>

          <div className="tres">
            <img src={img3} onClick={cambiar} />
            <h1 onClick={titulo}>{nombres[2]}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
