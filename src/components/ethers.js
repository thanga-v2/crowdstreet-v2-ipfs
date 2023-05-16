import { Buffer } from 'buffer';
import { IPFS } from '../utils/contract';
import {create} from 'ipfs-http-client';
import {ethers} from "ethers";
// Infura
// Created using thangaraj@cloudpencils.com <---->
// Change it before going for production
const projectID = '2PbKehaHuWb3GnHTz9UFPeLf49E';
const projectSecret = '01f4e3fefe6efe180572d366e0402537';
const auth = `Basic ${Buffer.from(`${projectID}:${projectSecret}`).toString('base64')}`;
const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
});


let provider;
  // Pdf to IPFS
  export async function pdftoIpfsService(src, details) {
    try {
        provider = new ethers.JsonRpcProvider("https://polygon-mumbai.infura.io/v3/36b9588487774b83812430cd4209a472")

        // Uploading data to Infura IPFS
        const data = await client.add(src, { pin: true });
        const DocumentURL = `https://test-alamo-crowdstreet-v2.infura-ipfs.io/ipfs/${data.path}`;
        console.log(DocumentURL)
        console.log(details);
        const metadataValue = {
        name: details.name,
        description: details.description,
        document: DocumentURL,
        // contract address - 0xa8D98f30C04768D459878c5a50247d720B48e189
        // Ntwork - Polygon Matic
        // check for the recent txn to get the txn details in Polyscan
        OnChainTx : "https://mumbai.polygonscan.com/address/0xa8D98f30C04768D459878c5a50247d720B48e189",
        };
        console.log(metadataValue);
        const metadata = await client.add(Buffer.from(JSON.stringify(metadataValue)), { pin: true });
        const metadataURL = metadata.path;
        console.log(metadataURL);
        // below is the admin wallet
        // address - 0xa8D98f30C04768D459878c5a50247d720B48e189
        let wallet = new ethers.Wallet(process.env.REACT_APP_ADMIN_PRIVATEKEY, provider)
        debugger
        // writing the txn in smartcontract
        const contract = new ethers.Contract(IPFS.DevUploader, IPFS.abi, wallet)
        // customerID <=> URI
        // idToFile
        let tx = await contract.uploadPDF(details.customerId, metadataURL);
        // on-chain
        tx = await tx.wait();

        // idToFile[_customerId][documentId]
        let URI = await contract.getPDF(details.customerId,tx.logs[0].args[1])
        const documentDetails = {"CustomerId": details.customerId, "DocumentURL": URI,"DocumentID": tx.logs[0].args[1]}
        console.log(documentDetails)
        alert("The Document has been uploaded.")
    } catch (error) {
      alert(error)
      console.log(error)
        return error
    }
  }


  // Investment strategy for REIT. 
  // 