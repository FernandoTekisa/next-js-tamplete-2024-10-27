import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col">
        <h1>
            <Link href="/">WikiRocket!</Link>
            <Search />
        </h1>
    </nav>
  )
}
