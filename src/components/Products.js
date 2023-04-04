import Product from "./Product"

function Products({product,cart,setProduct}) {
  const cardListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '0.1rem',
    width:'80%',
    minHeight:"100vh"
};
  return (
    <div style={cardListStyle}>
         {/* for product in products:
             return '<Product ' */}
    {product.map(product => <Product key={product.id} product={product} setProduct={setProduct} cart={cart}/>)}
 

    </div>
  )
}

export default Products