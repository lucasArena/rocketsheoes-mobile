import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { ProductList, Product, Image, Title, Price, AddButton, ProductAmount, ProductAmountText, AddButtonText } from './styles'

import api from '../../services/api'
import { formatPrice } from '../../utils/format'
import * as CartActions from '../../store/modules/Cart/actions'

function Main () {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts () {
      const response = await api.get('/products')

      const data = response.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))

      setProducts(data)
    }
    loadProducts()
  }, [])

  function handleAdd (id) {
    dispatch(CartActions.addToCartRequest(id))
  }

  return (
    <ProductList
      data={products}
      keyExtractor={(product) => product.id}
      renderItem={({ item }) => (
        <Product key={item.id}>
          <Image source={{ uri: item.image }} />
          <Title>{item.title}</Title>
          <Price>{item.priceFormatted}</Price>
          <AddButton onPress={() => handleAdd(item.id)}>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <ProductAmountText>{3}</ProductAmountText>
            </ProductAmount>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton>
        </Product>
      )}
    >
    </ProductList>
  )
}

export default Main
