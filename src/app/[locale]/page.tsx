// import Dashboard from "../components/dashboard";
import LoginPage from "../(auth)/login/page";
import { redirect } from "next/navigation";

export default function Home() {
  // return <Dashboard />
  // return <LoginPage />
  redirect("/login");
  return null;
}
