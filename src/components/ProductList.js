import React, { useEffect } from "react"
import { useQuery, gql } from '@apollo/client'
import Product from "./Product"

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

  useEffect(() => {
    console.log(loading)
    console.log(error)
    console.log(data)
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="product-list">
      <h1>Produtos</h1>
      <ul>
        {
          data.allSkus.map((item) =>
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