import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ThemeContext } from "@/context/themecontext";
import { useContext } from "react";
import { usePathname } from "next/navigation";



const AuthLinks = () => {
  const {status} = useSession()
    const { mode } = useContext(ThemeContext);
      const pathname = usePathname();
  const isActive = pathname === "/write";


  return (
    <div className="flex items-center gap-4 ">
      {status === "authenticated" ? (
        <>
          <Link href="/write" className={`hidden md:flex  
            ${
                      isActive
                        ? 
                           "text-teal-500 border-teal-500 font-semibold"
                        
                            : "text-black-300 hover:text-teal-500"
                    }
            `}>Write</Link>
          <span className={`cursor-pointer  px-2 py-2 font-bold rounded-lg  transition-colors ease-linear bg-teal-700 text-white hover:bg-teal-600`}
          onClick={signOut}
          >Logout</span>
        </>
      ) : (
        <Link href="/login"
        className={`cursor-pointer  px-2 py-2 font-bold rounded-lg  transition-colors ease-linear bg-teal-700 text-white hover:bg-teal-600`}
        >Login</Link>
      )}
    </div>
  );
};

export default AuthLinks;
