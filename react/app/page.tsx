export default function Page() {
  return (
    <main>
      <p>Hey {true ? "Admin" : "Guest"}</p>
    </main>
  );
}
