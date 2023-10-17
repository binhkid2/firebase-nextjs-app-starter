
import { NavigationMenu, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";
const Navbar = () => {
  



  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
     

        <ul className="flex">
          <Link href="/auth" className="p-2 cursor-pointer">
            Login
          </Link>
          <Link href="/auth" className="p-2 cursor-pointer">
            Sign up
          </Link>
        </ul>
    </div>
  );
};

export default Navbar;