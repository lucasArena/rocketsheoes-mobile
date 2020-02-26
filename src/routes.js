import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Cart from './pages/Cart'
import Header from './components/Header'

import color from './styles/color'

const Stack = createStackNavigator()

function Routes () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: props => <Header {...props} />,
        cardStyle: {
          backgroundColor: color.darken
        }
      }}>
        <Stack.Screen name="Main" component={Main}></Stack.Screen>
        <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
