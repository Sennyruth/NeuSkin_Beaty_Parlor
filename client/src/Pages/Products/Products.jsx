import useCartStore from "../Store/cartStore";
import balmImg from "../../assets/balm.jpeg";
import mascaraImg from "../../assets/mascara.jpeg"
import contourImg from "../../assets/contour.jpeg"
import contorImg from "../../assets/contor.jpeg"
import linerImg from "../../assets/liner.jpeg"
import showerImg from "../../assets/shower.jpeg"
import gelImg from "../../assets/gel.jpeg"


import "./Products.css";
function Products() {
  const { addToCart } = useCartStore();
  

  const products = [
    {
      id: 1,
      img: balmImg,
      title: "Pedicure",
      price: "$50",
    },
    {
      id: 2,
      img:mascaraImg,
      title: "Manicure",
      price:"ksh500"
      },
      {
        id: 3,
        img:contourImg,
        title: "Manicure",
        price:"ksh500"
        },
        {
          id: 4,
          img:contorImg,
          title: "Manicure",
          price:"ksh500"
          },
          {
            id: 5,
            img:linerImg,
            title: "Manicure",
            price:"ksh500"
            },
            {
              id: 6,
              img:gelImg,
              title: "Manicure",
              price:"ksh500"
              },
              {
                id: 7,
                img:showerImg,
                title: "Manicure",
                price:"ksh500"
                },
                {
                  id: 8,
                  img:gelImg,
                  title: "Manicure",
                  price:"ksh500"
                  },
  ];
  // alert(`product has been added to your cart!`);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-image">
            <img src={product.img} alt={product.title} />
          </div>
          <h4>{product.title}</h4>
          <p className="product-title">{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
     
    </div>
  );
}

export default Products;
