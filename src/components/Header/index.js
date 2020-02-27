import React from 'react'
import { useSelector } from 'react-redux'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Wrapper, Container, ContainerImage, Logo, BasketContainer, Counter } from './styles'

function Header ({ navigation }) {
  const amount = useSelector(state =>
    state.cart.length
  )

  return (
    <Wrapper>
      <Container>
        <ContainerImage onPress={() => navigation.navigate('Main')}>
          <Logo />
        </ContainerImage>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <Counter>{amount || 0}</Counter>
        </BasketContainer>
      </Container>
    </Wrapper>
  )
}

export default Header
