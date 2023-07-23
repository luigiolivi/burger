import React, { useState } from "react";

import OrderLogo from '../../assets/order.png'
import Trash from '../../assets/trash.png'

import Container from "../../components/Container";
import H1 from "../../components/H1";
import Button from "../../components/Button";

import { Image, Order } from './styles'

function App() {
  const [ orders, setOrders ] = useState([])

  function newOrder() {
    setOrders()
  }

  return (
    <Container>
      <Image alt="codeBurger-logo" src={OrderLogo}></Image>

      <H1 isPedidos={true}>Pedidos</H1>

      {
        orders.map( order => (
          <Order>
            <div>
              <p>{order.items}</p>
              <h1>{order.name}</h1>
            </div>
 
            <button><img src={Trash} alt="trash"></img></button>
          </Order>
        ))
      }

      <Button isGray={true} onClick={newOrder}>Voltar</Button>

    </Container>
  );
}

export default App;
