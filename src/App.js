import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Login from "./Login"
import Home from"./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";
import FileUpload from "./Fileupload";
import Dashboard from './components/Dashboard';
import AddUserForm from './components/AddUserForm';


 


function App() {
    return (
      <div className="App">
        
          <Router>
          <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-user" element={<AddUserForm />} />
      </Routes>
          <Routes>
              <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
            <Route path="/about" element={<About/>}/>
            </Routes>
            <Routes>
              <Route path="/services" element={<Services/>}/>
            </Routes>
            <Routes>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Routes>
              <Route path="/projects" element={<Projects/>}/>
            </Routes>
            <Routes>
              <Route path="/fileupload" element={<FileUpload/>}/>
            </Routes>
           
             
             
           
           
           
            
          </Router>
        
      </div>
    );    
  }
  
  export default App;
  