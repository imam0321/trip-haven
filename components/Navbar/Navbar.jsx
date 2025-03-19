import { auth } from "@/auth"
import Link from "next/link"
import Logout from "../Auth/Logout/Logout";

export default async function Navbar({ sideMenu }) {
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <h1 className="text-2xl font-bold">Trip <span className="font-medium">Haven</span></h1>
      </Link>
      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {
              session?.user ? (
                <div>
                  <span>{session?.user?.name}</span>
                  <span> | </span>
                  <Logout />
                </div>
              ) : (
                <Link href="/login" className="login">Login</Link>
              )
            }

          </li>
        </ul>
      )}

    </nav>
  )
}
