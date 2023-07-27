import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import OrderLogo from '../../assets/order.png'
import Trash from '../../assets/trash.png'

import Container from "../../components/Container";
import H1 from "../../components/H1";
import Button from "../../components/Button";

import { Image, Order } from './styles'

function App() {
  const [orders, setOrders] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
     async function fetchOrders() {
        const { data: allOrders } = await axios.get("http://localhost:3001/order")
  
        setOrders(allOrders)
     }

     fetchOrders()
  }, [orders])

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    const newOrder = orders.filter(order => order.id !== orderId)

    setOrders(newOrder)
  }

  function goHomePage() {
    navigate('/')
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
 
            <button onClick={() => deleteOrder(order.id)}><img src={Trash} alt="trash"></img></button>
          </Order>
        ))
      }

      <Button isGray={true} onClick={goHomePage}>Voltar</Button>

    </Container>
  );
}

export default App;
