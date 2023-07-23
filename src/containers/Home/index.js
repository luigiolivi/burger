import React from "react";

import Logo from '../../assets/logo.png'

import Button from '../../components/Button'
import Container from '../../components/Container'
import H1 from "../../components/H1";
import { Image, InputLabel, Input } from './styles'

function App() {
  return (
    <Container>
      <Image alt="codeBurger-logo" src={Logo}></Image>

      <H1>Faça seu pedido!</H1>

      <div>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-Cola, 1 X-Salada
"></Input>


        <InputLabel>Nome do cliente</InputLabel>
        <Input placeholder="Steve Jobs"></Input>
      </div>

      <Button>Novo Pedido</Button>

    </Container>
  );
}

export default App;
