export default function Home() {
  console.log("home");
  const updateUser = useAuth((state) => state.updateUser);
  console.log(user);

  return <div><h1>Home</h1>
  <button onClick={updateUser}>Log in</button></div>;
}
