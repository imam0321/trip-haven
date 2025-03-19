'use client'

import { login } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function LoginForm() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);

      if (!response.error) {
        router.push("/bookings")
      } else {
        setError(response.error.message);
      }

    } catch (error) {
      setError(error)
    }
  }


  return (
    <>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  )
}
