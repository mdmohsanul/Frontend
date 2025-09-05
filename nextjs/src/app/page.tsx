import Link from "next/link";



export default function Home() {
 
  return (
   <>
   <h1 className="text-3xl text-center py-5">Welcome Home</h1>
   <nav className="text-xl  py-5 flex gap-5 items-center justify-center">
    <Link href={"/routing"}>Routing</Link>
    <Link href={"/metadata"}>Metadata</Link>
    <Link href={"/navigation"}>Navigation</Link>
    <Link href={"/register"}>Authentication</Link>
    <Link href={"/complexDashboard"}>Complex-Dashboard</Link>


   </nav>
   </>
  );
}
