import React from 'react'

 function MiComponente({rey='No tiene',reses=0,vivo}) {
   
  return (
    <div>
        <h1>hola {rey} ,come {reses} en el mundo {vivo}</h1>
    </div>
  )
}

export default MiComponente;