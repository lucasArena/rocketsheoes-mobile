import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Wrapper, Container, ContainerImage, Logo, BasketContainer, Counter } from './styles'

function Header ({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <ContainerImage onPress={() => navigation.navigate('Main')}>
          <Logo />
        </ContainerImage>
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <Counter>3</Counter>
        </BasketContainer>
      </Container>
    </Wrapper>
  )
}

export default Header
