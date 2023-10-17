"use client"
import React from 'react';
import { UserAuth } from '@/components/context/AuthContext';
import { useRouter } from 'next/navigation';
import { auth, provider } from '@/app/firebase';
import { signInWithPopup } from 'firebase/auth';


const SignInWithGoogleButton = () => {
  const router = useRouter();
 
  const signInWithGoogle = async () => {
    signInWithPopup(auth, provider)

    router.push('/dashboard');
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
};

export default SignInWithGoogleButton;
