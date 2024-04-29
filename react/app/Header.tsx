import Link from "next/link";
import Logout from "./Logout";

import { getSession } from "@/lib";

const Header = async () => {
  const profileObject = await getSession();

  return (
    <nav className="bg-slate-200 px-6 py-4 text-xl flex items-center space-x-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      {profileObject?.user ? (
        <Logout />
      ) : (
        <>
          <Link href="/signup">SignUp</Link>
          <Link href="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default Header;
