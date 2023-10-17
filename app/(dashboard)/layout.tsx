"use client"
import { AuthContextProvider } from "@/components/context/AuthContext";

const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main >
        <div className="mx-auto max-w-screen-xl h-full w-full">
        <AuthContextProvider>
         
          {children}
        </AuthContextProvider>
        </div>
      </main>
     );
  }
   
  export default LandingLayout;