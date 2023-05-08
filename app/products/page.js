
async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products')
    // await new Promise((resolve)=>setTimeout(resolve, 1000))
    const data = await response.json()
    return data.products
}
const ProductsPage = async () => {
    const getdata = await fetchProducts();
    return (
        <div>
       
            <h1>Product Page</h1>
            <div className="container">
                {getdata.map((item, index) => {
                    return (
                        <div key={index} className="mt-3 ">
                            <h2>{item.title}</h2>
                            <img src={ item.images[0]} height="90px" width="120px" />
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default ProductsPage;