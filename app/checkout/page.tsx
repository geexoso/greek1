"use client"
import Link from 'next/link'
// อันนี้คือหน้าcheck out

import type React from "react"
import { useRouter } from "next/navigation"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState<"delivery" | "pickup">("delivery")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "banking" | "promptpay">("card")

  const handleShippingChange = (method: "delivery" | "pickup") => {
    setShippingMethod(method)
  }

  const handlePaymentChange = (method: "card" | "banking" | "promptpay") => {
    setPaymentMethod(method)
  }
  const router = useRouter()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    
    router.push("/order-status")
  }

  return (
    <main className="min-h-screen bg-[#FFFBF0] py-12 px-4">
      <div className="max-w-6xl mx-auto">
      <Link
          href="/"
          className="absolute top-6 left-6 text-[#7B3FE4] hover:underline flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to home
        </Link>

        <h1 className="text-4xl font-black text-center mb-10">CHECKOUT</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer Details Section */}
          <div className="bg-[#C9D6F0] p-6 rounded-3xl border-4 border-[#FFECB3]">
            <h2 className="text-xl font-bold mb-4">Details</h2>

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid  gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-full bg-[#FFFDE0] border border-[#FFECB3]"
                  />
                </div>
               
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-full bg-[#FFFDE0] border border-[#FFECB3]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-full bg-[#FFFDE0] border border-[#FFECB3]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-4 py-3 rounded-full bg-[#FFFDE0] border border-[#FFECB3]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label htmlFor="city" className="block mb-1">
                    City
                  </label>
                  <div className="relative">
                    <select
                      id="city"
                      className="w-full px-4 py-3 rounded-full bg-[#FFFDE0] border border-[#FFECB3] appearance-none"
                    >
                      <option value="bangkok">Bangkok</option>
                      <option value="chiangmai">Chiang Mai</option>
                      <option value="phuket">Phuket</option>
                      <option value="pattaya">Pattaya</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="postcode" className="block mb-1">
                    Post Code
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    className="w-full px-4 py-3 rounded-full bg-[#FFFDE0] border border-[#FFECB3]"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary Section */}
          <div className="bg-[#E8D0FF] p-6 rounded-3xl border-4 border-[#FFECB3]">
            <h2 className="text-xl font-bold mb-4">Your order</h2>

            <div className="flex justify-between border-b border-gray-300 pb-2 mb-4">
              <div className="font-medium">PRODUCT</div>
              <div className="font-medium">SUBTOTAL</div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-lg overflow-hidden mr-3">
                  <img
                    src="https://ceremonymatcha.com/cdn/shop/articles/Bildschirmfoto_2022-05-18_um_15.05.06.jpg?crop=center&height=600&v=1652879988&width=600"
                    alt="Matcha Blueberry Greek yogurt"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>150.00 × 2</div>
              </div>
              <div className="font-medium">฿ 300.00</div>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2 mb-4">
              <div className="font-medium">SUBTOTAL</div>
              <div className="font-medium">฿ 300.00</div>
            </div>

            <div className="mb-6">
              <div className="font-medium mb-2">Shipping</div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="delivery"
                  name="shipping"
                  checked={shippingMethod === "delivery"}
                  onChange={() => handleShippingChange("delivery")}
                  className="mr-2"
                />
                <label htmlFor="delivery" className="flex justify-between w-full">
                  <span>Delivery</span>
                  <span>฿ 80.00</span>
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pickup"
                  name="shipping"
                  checked={shippingMethod === "pickup"}
                  onChange={() => handleShippingChange("pickup")}
                  className="mr-2"
                />
                <label htmlFor="pickup">Pick up at the store</label>
              </div>
            </div>

            <div className="flex justify-between border-b border-gray-300 pb-2 mb-6">
              <div className="font-bold">Total</div>
              <div className="font-bold">฿ {shippingMethod === "delivery" ? "380.00" : "300.00"}</div>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => handlePaymentChange("card")}
                  className="mr-2"
                />
                <label htmlFor="card">Credit/Debit card</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="banking"
                  name="payment"
                  checked={paymentMethod === "banking"}
                  onChange={() => handlePaymentChange("banking")}
                  className="mr-2"
                />
                <label htmlFor="banking">Mobile Banking</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="promptpay"
                  name="payment"
                  checked={paymentMethod === "promptpay"}
                  onChange={() => handlePaymentChange("promptpay")}
                  className="mr-2"
                />
                <label htmlFor="promptpay">Promptpay</label>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#333333] text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-colors">
                Place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

