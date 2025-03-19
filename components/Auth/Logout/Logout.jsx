'use client'

import { signOut } from "next-auth/react"

export default function Logout() {

  return (
    <button className="bg-primary px-4 py-1 rounded-md text-white font-bold shadow-lg hover:shadow-primary/50 active:scale-95 transition-all" onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}>Logout</button>
  )
}
