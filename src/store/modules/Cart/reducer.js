import produce from 'immer'

export default function reducer (state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { product } = action
        draft.push(product)
      })
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, draft => {
        const { id, amount } = action
        const productIndex = draft.findIndex(p => p.id === id)

        draft[productIndex].amount = amount
      })

    case '@cart/REMOVE':
      return produce(state, draft => {
        const { id } = action
        const productIndex = draft.findIndex(p => p.id === id)

        draft.cart[id].splice(productIndex, 1)
      })

    default:
      return state
  }
}
