import { getSession } from "@/lib";

export default async function Page() {
  const profileObject = await getSession();
  const profile = JSON.stringify(profileObject, null, 2);

  return (
    <section>
      <h1 className="text-center">Your Profile</h1>
      <p>User email: {profileObject.user.email}</p>
      <pre>{profile}</pre>
    </section>
  );
}
