"use client"
import { UserAuth } from "@/components/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function DashBoard() {
    const { user, googleSignIn, logOut } = UserAuth();   
    const router = useRouter();
     const handleSignOut = async () => {
    
        try {
          await logOut();
          router.push('/');
        } catch (error) {
          console.log(error);
        }
      };
      
      return user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
          <Link href="/profile" >Profile Page </Link>
        </div>
      ) : null;
      }      
      
    

