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

function Cart () {
  const products =
    [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável',
        price: formatPrice(179.9),
        image: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg'
      }
    ]

  return (
    <Container>
      <CartList
        data={products}
        keyExtrator={(product) => product.id}
        renderItem={({ item }) => (
          <>
            <Product>
              <Image source={{ uri: item.image }} />
              <ContainerInfo>
                <Title>{item.title}</Title>
                <Price>{item.price}</Price>
              </ContainerInfo>
            </ Product>
            <TotalInfo>
              <Amount value="3" />
              <SubTotal>{formatPrice(300)}</SubTotal>
            </TotalInfo>

            <Product>
              <Image source={{ uri: item.image }} />
              <ContainerInfo>
                <Title>{item.title}</Title>
                <Price>{item.price}</Price>
              </ContainerInfo>
            </ Product>
            <TotalInfo>
              <Amount value="3" />
              <SubTotal>{formatPrice(300)}</SubTotal>
            </TotalInfo>
          </>
        )}
      />

      <TotalContainer>
        <TotalText>Total</TotalText>
        <Total>R$1565,00</Total>
      </TotalContainer>
      <FinishButton>
        <FinishButtonText>FINALIZAR PEDIDO</FinishButtonText>
      </FinishButton>
    </Container>
  )
}

export default Cart
