import React from "react";
import "./products.css";
// import cartInfo from "../data/cart_items.json";
import { useState } from 'react';

function Cart() {
    let [id, setItems] = useState();

    let singleData;
//  function allItems() {

//   return(
//     <div>hg</div>
//   )
 
// }
//  let cartInfo = [];
    // async function getCartItems() {
    //     // e.preventDefault();
    //     const response = await fetch('http://localhost:3502/products', {
    //         method: 'GET',
    //         headers: {
    //             'Accept':'application/json'
    //         }
    //     })

    //     return response.json()
    //     // console.log(""cartInfo);
    // }

//     fetch('http://localhost:3502/products', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//     },
// })
// .then(response => response.json())
// .then(response => console.log(response))



// async function displayAllItems() {
//   // e.preventDefault();
//   const response = await fetch('http://localhost:3502/products', {
//       method: 'GET',
//       headers: {
//           'Accept':'application/json'
//       },
//   })

//   // let repo = response.json();

//   response.json().map(data => {
//     console.log("this is data" + data.id);

//     setItems(data.id);
//    return(<div>{id}</div>)
     
    
//     })
//   // return response.json()
//   // console.log(prodInfo);
// }


//works
fetch('http://localhost:3502/products')
.then(response => response.json())
.then(response => {
  singleData = response.map(data => {
    console.log("this is data" + data.id);

    setItems(data.id);
   return(<div>{id}</div>)
     
    
    })
})










    // cartInfo = getCartItems();
            // console.log("cartInfo" + cartInfo);

            // fetch('http://localhost:3502/products')
            // .then(response => response.json())
            // .then(response => {
            //     response.map(data => {
                    
            //         return (
            
            //             <div>sdbjsdb sdjhbasdfb </div>
            //           );
            
  return (

    // <div className="products">
    //   <h1>helloooo</h1>
    //   <div className="container">
        
    //     {}
    //     {/* <p>kjhvvvvkhv</p> */}
    //     {/* {cartInfo.map((cartInfo) => {
    //       return (
    //         <div className="childDiv">
    //           <h3>{cartInfo.game_title}</h3>
    //           <img src={require(`./images/${cartInfo.game_image}.${cartInfo.imgFormat}`)}/>
    //           <ul>
    //             <li> Price: {cartInfo.Price}</li>
    //             <li> Deliverable: {cartInfo.Deliverable}</li>
    //             <li> Rating: {cartInfo.Rating} stars</li>
    //           </ul>
    //         </div>
    //       );
    //     })} */}
    //   </div>
    <div>
      sigledata{id}
      <button>Checkout</button>
    </div>
  );
}

export default Cart;

