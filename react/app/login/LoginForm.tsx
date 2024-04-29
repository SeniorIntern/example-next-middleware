"use client";

import { login } from "@/lib";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  async function clientAction(formData: FormData) {
    const result = await login(formData);
    if (result?.status) {
      toast.success('Login Sucessful!');
      redirect("/");
    } else {
      toast.error(result?.data);
    }
  }

  return (
    <form
      action={clientAction}
      className="w-2/4 space-y-8 rounded-md border border-black p-8"
    >
      <div className="space-y-4">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          required
          id="email"
          name="email"
          placeholder="abc@gmail.com"
          className="w-full rounded-md p-2 border border-black"
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          type="password"
          required
          minLength={7}
          id="password"
          name="password"
          placeholder="***********"
          className="w-full rounded-md p-2 border border-black"
        />
      </div>

      <button className="text-white bg-black rounded-md w-fit px-6 py-2">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
