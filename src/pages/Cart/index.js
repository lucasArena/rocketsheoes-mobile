import React from 'react'

import {
  Container,
  Image,
  CartList,
  Product,
  ContainerInfo,
  Title,
  Price,
  TotalInfo,
  Amount,
  SubTotal,
  TotalContainer,
  TotalText,
  Total,
  FinishButton,
  FinishButtonText
} from './styles'

import { formatPrice } from '../../utils/format'
import { useSelector } from 'react-redux'

function Cart () {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      amount: String(product.amount),
      formattedPrice: formatPrice(product.price),
      subtotal: formatPrice(product.price * product.amount)
    }))
  )

  const total = useSelector(state =>
    formatPrice(state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0))
  )

  return (
    <Container>
      <CartList
        data={cart}
        keyExtrator={(product) => product.id}
        renderItem={({ item }) => (
          <>
            <Product>
              <Image source={{ uri: item.image }} />
              <ContainerInfo>
                <Title>{item.title}</Title>
                <Price>{item.formattedPrice}</Price>
              </ContainerInfo>
            </ Product>
            <TotalInfo>
              <Amount value={item.amount} />
              <SubTotal>{item.subtotal}</SubTotal>
            </TotalInfo>
          </>
        )}
      />

      <TotalContainer>
        <TotalText>Total</TotalText>
        <Total>{total}</Total>
      </TotalContainer>
      <FinishButton>
        <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
      </FinishButton>
    </Container>
  )
}

export default Cart
