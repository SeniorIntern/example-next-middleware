import { logout } from "@/lib";
import { redirect } from "next/navigation";

const Logout = async () => {
  return (
    <form
      action={async () => {
        "use server";
        await logout();
        redirect("/");
      }}
    >
      <button>Logout</button>
    </form>
  );
};

export default Logout;
