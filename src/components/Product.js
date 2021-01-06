/*
  ## TODO

  - Componente que renderiza o preço com formatação e o simbolo de real "R$" antes do valor
*/

import React from "react"
import Row from "./Row"
import Col from "./Col"

const Product = ({ productInfo }) => {

  const { name, imageUrl, salePrice, promotionalPrice } = productInfo

  return (
    <li>
      <Row>
        <Col width="20%">
          <img src={imageUrl} />
        </Col>
        <Col width="80%">
          <h2>{name}</h2>
          <div>1x R${salePrice} por R${promotionalPrice}</div>
        </Col>
      </Row>
    </li>
  )
}

export default Product