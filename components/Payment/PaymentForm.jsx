'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";



export default function PaymentForm({ hotelInfo, loggedUser, checkIn, checkout, cost }) {
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget)
      const hotelId = hotelInfo?.id;
      const userId = loggedUser?.id;
      const checkIn = formData.get("checkIn");
      const checkout = formData.get("checkout");

      const response = await fetch("/api/auth/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId,
          userId,
          checkIn,
          checkout
        })
      })

      response.status === 201 && router.push("/bookings")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <form className="my-8" onSubmit={onSubmit}>
      <div className="my-4 space-y-2">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          defaultValue={loggedUser?.name}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          required
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          defaultValue={loggedUser?.email}
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          required
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input type="date" name="checkIn" id="checkIn" defaultValue={checkIn} required />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input type="date" name="checkout" id="checkout" defaultValue={checkout} required/>
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          required
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          required
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
          required
        />
      </div>
      {error && <p className="bg-red-500">{error}</p>}
      <button type="submit" className="btn-primary w-full">
        Pay Now (${cost})
      </button>
    </form>
  )
}
