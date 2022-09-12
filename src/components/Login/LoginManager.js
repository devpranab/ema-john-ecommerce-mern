//moved only firebase related

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';

export const initLoginFramework = () => {
    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig);
    }
};

export const handleGoogleSignIn = () => {
    //console.log("handleSignIn clicked");
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      }
      return signedInUser;
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    });
  }

  export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
     return firebase.auth().signInWithPopup(fbProvider)
    .then(function(result){
      const user = result.user;
      return user;
    })
    .catch(function(error){

    })
  }

  export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signedOutUser = {
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
      }
      return signedOutUser;
      //console.log(res);
    })
    .catch(err => {

    })
  }

  /*
  export const createUserWithEmailAndPassword = () => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(res => {
      console.log(res);
      const newUserInfo = {...user};
      newUserInfo.error = "";
      newUserInfo.success = true;
      setUser(newUserInfo);
      updateUserName(user.name);
    })
    .catch(error => {
    //Handle Errors here
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
    });
  }

  export const signInWithEmailAndPassword = () => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res => {
      const newUserInfo = {...user};
      newUserInfo.error = "";
      newUserInfo.success = true;
      setUser(newUserInfo);
      setLoggedInUser(newUserInfo);
      history.replace(from);
      console.log("sign in user info:", res.user);
    })
    .catch(error => {
      //Handle Errors here
      const newUserInfo = {...user};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      setUser(newUserInfo);
      });
  }

  export const updateUserName = name => {
    const user = firebase.auth().currentUser;
  
    user.updateProfile({
      displayName: name
    })
    .then(function(){
      console.log("user name updated!");
    })
    .catch(function(error){
      console.log(error);
    })
  }
  */