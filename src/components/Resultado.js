import React from 'react'
import styled from '@emotion/styled'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

const Mensaje = styled.p`
    background-color: rgb(127 ,224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`;
 

const Resultado = ({cotizacion}) => {

    if(cotizacion === 0){
        return null;
    }

    return (
        <div>
            <TransitionGroup component="span" className="resultado">
                <CSSTransition classNames="resultado" key={cotizacion} timeout={{ enter: 500, exit: 500}}>
                    <Mensaje>Total: <span>{cotizacion}</span></Mensaje>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Resultado;