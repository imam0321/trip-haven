import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <h1 className="text-2xl font-bold">Trip <span className="font-medium">Haven</span></h1>
      </Link>

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
          <Link href="/login" class="login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}
