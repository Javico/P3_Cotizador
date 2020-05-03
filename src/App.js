import React, {useState, Fragment} from 'react';
import Header from './components/Header';
import styled from '@emotion/styled'
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;


function App() {

  const [resumen, guardaResumen] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  const {datos, cotizacion} = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de autos"
      ></Header>
      <ContenedorFormulario>
        <Formulario
            guardaResumen={guardaResumen}
            guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : 
        <Fragment>
          <Resumen  datos={datos} /> 
          <Resultado cotizacion={cotizacion} />
        </Fragment>
        }
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
