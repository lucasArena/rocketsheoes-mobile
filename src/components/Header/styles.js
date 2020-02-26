import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import logo from '../../assets/logo.png'
import color from '../../styles/color'

export const Wrapper = styled.SafeAreaView`
    background-color: ${color.darken};
    flex: 0;
    flex-direction: row;
    margin-bottom: 84px;
`

export const Container = styled.View`
    flex-direction: row;
    background-color: #141419;
    flex: 1;
    justify-content: space-between;
    padding: 20px;
    height: 84px;
    align-items:center;
`

export const ContainerImage = styled(TouchableOpacity)``

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover'
})`
    width: 185px;
    height: 24px;
`

export const BasketContainer = styled(TouchableOpacity)`
    width: 60px;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const Counter = styled.Text`
    color: #FFF;
    width: 20px;
    height: 20px;
    background: ${color.primary};
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    margin-left: 5px;
`
