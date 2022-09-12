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
        photo: photoURL,
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
      user.success = true;
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

  export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      updateUserName(name);
      return newUserInfo;
    })
    .catch(error => {
    //Handle Errors here
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
    });
  }

  export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      return newUserInfo;
    })
    .catch(error => {
      //Handle Errors here
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
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