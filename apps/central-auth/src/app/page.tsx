import User from "./components/User";

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen items-center mt-10">
      <h1>Authy Landing page</h1>
      <User />
    </div>
  );
}
