"use client"
import { UserAuth } from "@/components/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function DashBoard() {
    const { user, googleSignIn, logOut } = UserAuth();   
 
      
      return user ? (
        <div>
          <p>Welcome, {user.displayName} s Profile Page </p>
          <Link href="/dashboard" >DashBoard Page </Link>
        </div>
      ) : null;
      }      
      
    

