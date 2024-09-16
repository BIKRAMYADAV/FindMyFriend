import React from 'react';
import { auth, googleProvider } from '../configs/firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const handleSignIn = async () =>{
        try {
            const result = await signInWithPopup(auth,googleProvider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            let token;
            if (credential)
                  token = credential.accessToken;
            const user = result.user;
            alert('Sign In Successful !');
        } catch (error){
            console.error(error);
            alert("there was an error in signing up");
        } finally{
                navigate('/map');
        }
    }
    
    return (

        <>
        <div onClick={handleSignIn}>
            Sign in with google
        </div>
        </>
    )
}

export default SignIn;