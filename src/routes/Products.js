import React from "react";
import "./products.css";
import productInfo from "./products.json"
import { useLocation} from "react-router-dom"


function Products() {
// console.log("props:" + props);
     async function addToCart(prodInfo) {
        // e.preventDefault();
        const response = await fetch('http://localhost:3502/products', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(prodInfo)

        })

        return response.json()
        // console.log(prodInfo);
    }


  return (
    <div className="products">
      <h1>Products</h1>
      <div className="container">

      {productInfo.map(prodInfo =>
       {  
        return(
        <div className="childDiv">
            <h3>{prodInfo.game_title}</h3>
          <img src={require(`./images/${prodInfo.game_image}.${prodInfo.imgFormat}`)} />
          <div className="productInfoContainer">
          <ul>
            <li> Price: {prodInfo.Price}</li>
            <li> Deliverable:  {prodInfo.Deliverable}</li>
            <li> Rating: {prodInfo.Rating} stars</li>
          </ul>
            <div style={{textAlign: "right"}}>
            <button value={prodInfo.id} onClick={() => addToCart(prodInfo)} ><img src={require("./images/Add_Cart.png")} alt="cart"/> </button>
            </div>
          </div>
        </div>
      
      )
      })}
  
  </div>      

      </div>
  );
}

export default Products;


