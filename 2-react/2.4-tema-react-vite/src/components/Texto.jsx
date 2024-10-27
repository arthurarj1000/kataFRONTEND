import {Fragment, useState} from 'react'

const Texto = () => {
    //El primer valor es el estado y el segundo es la función que lo modifica
    const [mostrar, setMostrar] = useState(false)
    //El título esta vacío, por eso no se muestra
    const [título, setTitulo] = useState('') 

    const handlerClick = () => {
        //Cambiar el estado de 'mostrar'
        console.log("Hola desde el botón");
        setMostrar(!mostrar);
        console.log(mostrar)
    }
    console.log('Estado de mostrar:', mostrar)

  return (
    <Fragment>
        /Si 'mostrar es tru, muestra el h1'
       {mostrar && <h1>Título del componente Texto</h1>} 
       /En el evento onClick, cambiamos el state del componente
      <button onClick={handlerClick}>{mostrar ? 'Ocultar' : 'Mostrar'}</button>
    </Fragment>
  )
}

export default Texto
