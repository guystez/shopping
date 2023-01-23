import Product from "./Product"

function Products({product}) {
  return (
    <div>Products:
         {/* for product in products:
             return '<Product ' */}
    {product.map(product => <Product key={product.id} product={product}/>)}
 

    </div>
  )
}

export default Products