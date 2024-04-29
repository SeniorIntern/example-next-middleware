import LoginForm from "./LoginForm";

export default async function Page() {
  return (
    <section>
      <h1 className="text-center">Login Form</h1>

      <div className="flex justify-center">
        <LoginForm />
      </div>
    </section>
  );
}
