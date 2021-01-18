import { useState } from 'react'

function Home()
{
    return (
        <div> 
            <h1> Home </h1>              
            <Contador />

            <div> Teste </div>
        </div>
        
    )
    
}

function Contador() 
{
    const [contador, setContador] = useState(1)

    return (
        <div> 
             <div> {contador}  </div>
            <button onClick={ addContador }> Adicionar </button>
        </div>
        
    )
    function addContador() 
    {
        setContador(contador + 1)
    }
}

export default Home