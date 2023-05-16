import './App.css';
import UploadCard from './components/UploadCard';
import {Routes , Route } from "react-router-dom"; 


function App() {
  return (
    <div className="App">
       <Routes> 
            <Route path="/UploadDocument" element={<UploadCard/> } /> 
       </Routes> 
    </div>
  );
}

export default App;
