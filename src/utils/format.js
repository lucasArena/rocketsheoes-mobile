import 'intl'
import 'intl/locale-data/jsonp/en'

export const { format: formatPrice } = new Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL'
})
