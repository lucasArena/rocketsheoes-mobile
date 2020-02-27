import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native-gesture-handler'

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  margin: 20px;
  background: #FFF;
  border-radius: 4px;
  padding: 20px;
`
export const CartList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false
})`
`

export const Product = styled.View`
  flex: 1;
  flex-direction: row;
`

export const ContainerInfo = styled.View`
  flex: 1;
  margin-left: 10px;
  justify-content: center;
`

export const Image = styled.Image`
  width: 120px;
  height: 120px;
`

export const Title = styled.Text.attrs({
  numbersOfLines: 2
})`
  font-size: 16px;
  color: #666;
`

export const Price = styled.Text`
  color: #191919;
  font-size: 20px;
  font-weight: bold;
`

export const TotalInfo = styled.View`
  background: #eee;
  border-radius: 4px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 7px;
  margin-bottom: 10px;
`

export const Amount = styled.TextInput.attrs({
  editable: false
})`
  background: #FFF;
  font-size: 12px;
  color: #191919;
  text-align: center;
  padding: 0;
  width: 50px;
  border-radius: 4px;
  margin-left: 35px;
`

export const SubTotal = styled.Text`
  font-size: 18px;
  color: #191919;
  margin-top: auto;
  font-weight: bold;
`

export const TotalContainer = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

export const TotalText = styled.Text`
  color: #999;
  font-size: 20px;
  font-weight: bold;
`

export const Total = styled.Text`
  font-size: 28px;
  font-weight: bold;
`

export const FinishButton = styled(TouchableOpacity)`
  background: #7159c1;
  border-radius: 4px;
  padding: 15px 10px;
  margin-top: 20px;
  margin-bottom: 30px;

`
export const FinishButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #FFF;
  font-size: 14px;
`
