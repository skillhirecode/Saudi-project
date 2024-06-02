import React, { useEffect, useState } from 'react';
import './Login.css'; 
import authService from './Service/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const goto = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await authService.login(email, password);
        goto("/admin");
      } catch (err) {
        setError("Invalid credentials");
      }
    };
    useEffect(
        ()=>{
            const isLoggedIn = authService.getCurrentUser();
            if(isLoggedIn){
                goto("/admin");
            } 
        },[]
    )
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div className="form-group">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember Me</label>
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    
                </form>
            </div>
        </div>
    );
};

export default Login;
// import React, { useState, useEffect } from 'react';
// import './Login.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Login = () => {
//   const [isRightPanelActive, setIsRightPanelActive] = useState(false);

//   const handleOverlayBtnClick = () => {
//     setIsRightPanelActive(!isRightPanelActive);
//   };

//   useEffect(() => {
//     const overlayBtn = document.getElementById('overlayBtn');
//     if (overlayBtn) {
//       overlayBtn.classList.remove('btnScaled');
//       window.requestAnimationFrame(() => {
//         overlayBtn.classList.add('btnScaled');
//       });
//     }
//   }, [isRightPanelActive]);

//   return (
//     <div className="authentication-forms">
//       <span className="big-circle">
//         <span className="inner-circle"></span>
//       </span>
//       <img src="https://i.imgur.com/wcGWHvx.png" className="square" alt="" />
//       <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
//         <div className="form-container sign-up-container">
//           <form action="#">
//             <h1>Create Account</h1>
//             <div className="social-container">
//               <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//               <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your email for registration</span>
//             <div className="infield">
//               <input type="text" placeholder="Name" />
//               <label></label>
//             </div>
//             <div className="infield">
//               <input type="email" placeholder="Email" name="email" />
//               <label></label>
//             </div>
//             <div className="infield">
//               <input type="password" placeholder="Password" />
//               <label></label>
//             </div>
//             <button>Sign Up</button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form action="#">
//             <h1>Sign in</h1>
//             <div className="social-container">
//               <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
//               <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//             <span>or use your account</span>
//             <div className="infield">
//               <input type="email" placeholder="Email" name="email" />
//               <label></label>
//             </div>
//             <div className="infield">
//               <input type="password" placeholder="Password" />
//               <label></label>
//             </div>
//             <a href="#" className="forgot">Forgot your password?</a>
//             <button>Sign In</button>
//           </form>
//         </div>
//         <div className="overlay-container" id="overlayCon">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>To keep connected with us please login with your personal info</p>
//               <button className="ghost" onClick={handleOverlayBtnClick}>Sign In</button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start journey with us</p>
//               <button className="ghost" onClick={handleOverlayBtnClick} id="signUpBtn">Sign Up</button>
//             </div>
//           </div>
//           <button className="overlay-btn" id="overlayBtn" onClick={handleOverlayBtnClick}></button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
