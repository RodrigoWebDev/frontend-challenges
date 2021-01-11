import React from "react"
import { useQuery, gql } from '@apollo/client'
import Product from "./Product"

interface allSkusInterface {
  id: string
  name: string
  imageUrl: string
  salePrice: number
  promotionalPrice: number
}

const productListData = gql`
  query GetAllSKUs{
    allSkus{
      id
      name
      imageUrl
      salePrice
      promotionalPrice
    }
  }
`;

const ProductList = () => {
  const { loading, error, data } = useQuery(productListData)

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>Error :(</p>
  }

  return (
    <div className="product-list">
      <h1>Produtos</h1>
      <ul>
        {
          data.allSkus.map((item: allSkusInterface) =>
            <Product
              key={item.id}
              productInfo={item}
            />)
        }
      </ul>
    </div>
  )
}

export default ProductList