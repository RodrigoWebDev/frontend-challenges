import React from "react"
import styled from 'styled-components'

interface productPropsInterface {
  price: number
  lineThrough?: boolean
}

const ProductPrice = ({ price, lineThrough }: productPropsInterface) => {
  const Span = styled.span`
    text-decoration: ${lineThrough ? "line-through" : "none"};
    opacity: ${lineThrough ? ".5" : "none"};
  `

  return (
    <Span>{formatPrice()}</Span>
  )

  function formatPrice() {
    const priceString = price.toString()
    const priceLength = priceString.length
    const priceCents = priceString.slice(priceLength - 2, priceLength)
    const priceReal = priceString.slice(0, priceLength - 2)
    const priceTemplate = `${priceReal}.${priceCents}`
    const priceNumber = new Intl.NumberFormat(
      'pt-BR',
      {
        currency: 'BRL',
        style: 'currency'
      }).format(parseFloat(priceTemplate))

    return priceNumber
  }
}

export default ProductPrice