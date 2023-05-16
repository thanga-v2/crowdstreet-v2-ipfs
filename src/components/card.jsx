// import * as React from 'react';
// import './card.css';
// import UploadCard from './UploadCard';
// const NFTImage = require("../images/NFT.gif")

// export default function MintingCard(props) {
//     let account = props.account
//     if (account != null){
//         account = account.slice(0,10)
//     }
//     // async function  handleMint() {
//     //     <NFTCard 
//     //     image="https://example.com/image.jpg"
//     //     name="Example Card"
//     //     description="This is an example card."
//     //     tokenId="12345"
//     //     currentOwner= {account}
//     //     />
//     // }
//   return (
//     <div id="container">
//         <div class="card">
//         <img src= {NFTImage} autoplay alt="Lago di Braies"/>
//         <div class="card__details">
//             <span class="tag">user:</span>
//             <span class="tag">{account}...</span>
//             <div class="name">Mint NFTs</div>
//             <p>waiting...</p>
//           <button onClick={handleMint}>Mint</button>
//         </div>
//       </div>
//     </div>
//   );
// }