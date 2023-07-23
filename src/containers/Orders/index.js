import React from "react";

import OrderLogo from '../../assets/order.png'
import Trash from '../../assets/trash.png'

import Container from "../../components/Container";
import H1 from "../../components/H1";
import Button from "../../components/Button";

import { Image, Order } from './styles'

function App() {
  const orders = [
    { id: Math.random, items: "1 Coca-Cola, 1 X-Burger", name: "Luigi" },
    { id: Math.random, items: "1 Suco de laranja, 1 Batata frita grande, 1 Double Cheddar", name:"Roberto" }
  ]

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

      <Button isGray={true}>Voltar</Button>

    </Container>
  );
}

export default App;
