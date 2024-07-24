
import balmImg from "../../assets/balm.jpeg"
function Products() {
  return (
    <section className="products">
        <h2>Products</h2>
        <div className="products-cards">
        
        <div className="products-container">
            <div className="products-item">
                <img src={balmImg} alt="" />
            </div>
            <h3>lipbalm</h3>
            <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis necessitatibus error molestias quo? Tenetur aliquam dolor quia amet provident.</p>
            <p className="cost">$350</p>
        </div>
        <div className="products-container">
            <div className="products-item">
                <img src={balmImg} alt="" />
            </div>
            <h3>lipbalm</h3>
            <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis necessitatibus error molestias quo? Tenetur aliquam dolor quia amet provident.</p>
            <p className="cost">$350</p>
        </div>
        <div className="products-container">
            <div className="products-item">
                <img src={balmImg} alt="" />
            </div>
            <h3>lipbalm</h3>
            <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis necessitatibus error molestias quo? Tenetur aliquam dolor quia amet provident.</p>
            <p className="cost">$350</p>
        </div>
        <div className="products-container">
            <div className="products-item">
                <img src={balmImg} alt="" />
            </div>
            <h3>lipbalm</h3>
            <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem blanditiis necessitatibus error molestias quo? Tenetur aliquam dolor quia amet provident.</p>
            <p className="cost">$350</p>
        </div>
        </div>
        
    </section>
  )
}

export default Products
