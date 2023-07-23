import React from "react";

import Order from '../../assets/order.png'

import { Container, H1, Image, InputLabel, Input, Button } from './styles'

function App() {
  return (
    <Container>
      <Image alt="codeBurger-logo" src={Order}></Image>

      <H1 isPedidos={true}>Pedidos</H1>

      <div>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-Cola, 1 X-Salada
"></Input>


        <InputLabel>Nome do cliente</InputLabel>
        <Input placeholder="Steve Jobs"></Input>
      </div>

      <Button isGray={true}>Voltar</Button>

    </Container>
  );
}

export default App;
