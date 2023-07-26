import React, { useRef } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import Button from '../../components/Button'
import Container from '../../components/Container'
import H1 from "../../components/H1";
import { Image, InputLabel, Input } from './styles'

function App() {
  const inputItems = useRef()
  const inputName = useRef()

  const navigate = useNavigate()

  const newOrder = async () => {
    await axios.post("http://localhost:3001/order", {
      id: Math.random(),
      items: inputItems.current.value,
      name: inputName.current.value
    });

    navigate('/order')
  }

  return (
    <Container>
      <Image alt="codeBurger-logo" src={Logo}></Image>

      <H1>Faça seu pedido!</H1>

      <div>
        <InputLabel>Pedido</InputLabel>
        <Input placeholder="1 Coca-Cola, 1 X-Salada
" ref={inputItems}></Input>


        <InputLabel>Nome do cliente</InputLabel>
        <Input placeholder="Steve Jobs" ref={inputName}></Input>
      </div>

      <Button onClick={newOrder}>Novo Pedido</Button>

    </Container>
  );
}

export default App;
