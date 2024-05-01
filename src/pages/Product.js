
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useEffect, useState } from "react";
import { all_products } from "../utils/products";

const Product = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const addToCart = (productId) => {
    let currentCart = [...cart];
    currentCart.push(productId);
    setCart(currentCart);
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, []);

  useEffect(() => {
    // Fetch or set product data here
    // Example: const products = fetchProducts();
    // setProducts(products);
    // For demonstration, setting dummy products
    setProducts(all_products);
  }, []);

  return (
    <>
      <Navbar cart={cart} setCart={setCart}/>
      <div className="bodys" style={{ display: 'flex', width: "100%" }}>
        <div className='modern'>
          <h1>Products</h1>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div>
          {products.map(product => (
            <div key={product.id} className="products" style={{ height: "350px", backgroundColor: "#C1E1C1", margin: "20px", borderRadius: "50px", display: "flex", width: "90%" }}>
              <div style={{ padding: "70px", width: "50%" }}>
                <h3>{product.name}</h3>
                <p>
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <button className='Ones' onClick={() => {
                  addToCart(product.id)
                }}>Add to cart</button>
              </div>
              <img src={product.cover_photo} alt={product.name} className="img" style={{ width: '60%' }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
