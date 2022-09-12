import './Login.css';
import { useState } from 'react';
import { UserContext} from '../../App';
import { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { handleFbSignIn, handleSignOut, handleGoogleSignIn, initLoginFramework } from './LoginManager';

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn : false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  });

  initLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let {from} = location.state || {from: {pathname: "/"}};

 // handleGoogleSignIn function
  const GoogleSignIn = () => {
  handleGoogleSignIn()
  .then(res => {
     setUser(res);
     setLoggedInUser(res);
     history.replace(from);
  })
 }

 // handleFbSignIn function
 const FbSignIn = () => {
  handleFbSignIn()
  .then(res => {
    setUser(res);
    setLoggedInUser(res);
    history.replace(from);
 })
}


 // handleSignOut function
  const SignOut = () => {
    handleSignOut()
    .then(res => {
       setUser(res);
       setLoggedInUser(res);
    })

  }




  const handleChange = (e) => {
    let isFormValid = true;
    if(e.target.name === "email"){
    isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === "password"){
    const isPasswordValid = e.target.value.length > 6;
    const passwordHasNumber = /\d{1}/.test(e.target.value);
    isFormValid = isPasswordValid && passwordHasNumber;
    }
    if(isFormValid){
      // if true isFormValid then work this
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  const handleSubmit = (e) => {
  //console.log(user.email, user.password);
  if(newUser && user.email && user.password){
    // createUserWithEmailAndPassword
    createUserWithEmailAndPassword();
  }
  if(!newUser && user.email && user.password){
   // signInWithEmailAndPassword
   signInWithEmailAndPassword();
  }
  e.preventDefault();
}

// updateUserName function

  return (
    <div className="login">
      {
        user.isSignedIn ? <button onClick={SignOut}>Sign-out</button> :
         <button onClick={GoogleSignIn}>Sign-in</button>
      }
      <br />
      <button onClick={FbSignIn}>Sign-in with Facebook</button>
    {
      user.isSignedIn && <div>
         <p>Welcome! {user.name}</p>
         <p>Your email: {user.email}</p>
         <img src={user.photo} alt=""></img>
      </div>
    }
    {/* create simple login form email and password */}
    <h2>Our own Firebase Authentication</h2>
    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser"/>
    <label htmlFor="newUser">New User Sign up</label>
  <form action="" onSubmit={handleSubmit}>
  {
    newUser && 
    <input type="text" onChange={handleChange} name="name" placeholder="your name" required/>
  }
    <br />
    <input type="text" onChange={handleChange} name="email" placeholder="your email" required/>
    <br />
    <input type="password" onChange={handleChange} name="password" placeholder="your passwor" required/>
    <br />
    <input type="submit" value={newUser ? "Sign-up" : "Sign-in"} />
  </form>
  <p style={{color: "red"}}>{user.error}</p>

  {user.success && <p style={{color: "green"}}>Successfully user {newUser ? "created" : "logged in"}!</p>}
    </div>
  );
}

export default Login;