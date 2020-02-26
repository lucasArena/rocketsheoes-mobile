import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { darken } from 'polished'

import color from '../../styles/color'

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
    flex: 1; 
    padding: 20px;
    overflow: hidden
`

export const Product = styled.View`
    background: #FFF;
    margin-bottom: 10px;
    padding: 20px;
    border-radius: 5px;
`

export const Image = styled.Image`
    width: 200px;
    height: 200px;
    align-self: center;
`

export const Title = styled.Text.attrs({
  numberOfLines: 2
})`
    font-size: 16px;
    color: #666;
    margin-bottom: 5px;
`

export const Price = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
`

export const AddButton = styled(TouchableOpacity)`
    background: ${color.primary};
    flex-direction: row;
    border-radius: 4px;
    margin-top: auto;
`
export const ProductAmount = styled.View`
    padding: 12px;
    background: ${darken(0.03, color.primary)};
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    flex-direction: row;
    align-items: center;
`

export const ProductAmountText = styled.Text`
    color: #fff;
    margin: 0px 4px 0px 10px;
`

export const AddButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    flex: 1;
    text-align: center;
    align-self: center;
`
