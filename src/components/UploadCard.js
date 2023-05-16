import React, {useState} from 'react';
import { pdftoIpfsService } from './ethers';
import Header from './header';
require('./card.css')

const UploadCard = (props) => {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [image, setImage] = useState(null);


  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleCustomerIdChange(event) {
    setCustomerId(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //pdftoipfs from etehrsjs
    await pdftoIpfsService(image,{"name": name, "description": description, "customerId": customerId})
  }

  return (
    <div>
    <Header/>
    <div>
    <div id="container">
    <div className="card">  
    <div class="name">crowdstreet_V2 Decentralized Document storage</div><br/><br/>
      <span className= 'tag'>
        Name:
      </span><br/><br/>
      <span className='name'>
      <input className = "rounded-input" type="text" value={name} onChange={handleNameChange} />
      </span><br/><br/>
      <span className='tag'>description:</span><br/><br/>
      <span className='name'>
      <input type="textarea" className= "rounded-input" value={description} onChange={handleDescriptionChange} />
      </span><br/><br/>
      <span className='tag'>customerId:</span><br/><br/>
      <span className='name'>
      <input type="textarea" className= "rounded-input" value={customerId} onChange={handleCustomerIdChange} />
      </span><br/><br/>
      {/* <input type="file" accept="image/*" onChange={handleImageChange} /><br/><br/> */}
      <input type="file" accept="pdf/*" onChange={handleImageChange} /><br/><br/>
      {image && <img src={URL.createObjectURL(image)} alt="Selected" />} <br/><br/>
        <button type="submit" onClick={handleSubmit}>Upload</button>
      </div>
      </div>
      </div>
      </div>
  );
};

export default UploadCard;