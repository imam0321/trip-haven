'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function RegistrationForm() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const fname = formData.get('fname')
      const lname = formData.get('lname')
      const email = formData.get('email')
      const password = formData.get('password')

      const response = await fetch("/api/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fname, lname, email, password })
      })
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Registration failed!");
      }

      router.push("/login");

    } catch (error) {
      setError(error.message)
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="fname" id="fname" required />
      </div>

      <div>
        <label htmlFor="lname">Last Name</label>
        <input type="text" name="lname" id="lname" />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required minLength="6" />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="btn-primary w-full mt-4" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  )
}
