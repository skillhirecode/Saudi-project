import {  Route, Routes, BrowserRouter } from "react-router-dom";
 import Login from "./Login"
import Home from"./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Projects from "./Projects";
import FileUpload from "./Fileupload";
import Dashboard from './components/Dashboard';
import AddUserForm from './components/AddUserForm';
import ProtectedRoute from "./Routes";


 



function App() {
    return (
      
         <>
         <BrowserRouter>
         <Routes>
         <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/fileupload" element={<FileUpload/>}/>

         <Route path="/login" element={<Login/>}/>
         <Route path="/admin" element ={<ProtectedRoute/>}>
            <Route index element={<Dashboard />} />
            <Route path="add-user" element={<FileUpload />} />
          </Route>
          

         </Routes>
       </BrowserRouter>
       </>
      
    );    
  }
  
  export default App;
  