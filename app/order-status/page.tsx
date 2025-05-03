"use client"
//อันนี้คือหน้า your order หีรือ dash board ของ user
import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingCart, Search, Home } from "lucide-react"

interface OrderItem {
  id: string
  name: string
  price: string
  quantity: number
  image: string
  status: "order ready" | "in transition" | "delivered"
}

export default function OrderStatusPage() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [orderNumber, setOrderNumber] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch the order details from an API
    // For now, we'll simulate it with a timeout
    const timer = setTimeout(() => {
      try {
        // Generate a random order number
        setOrderNumber(
          `YG${Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0")}`,
        )

        // Sample order items
        setOrderItems([
          {
            id: "1",
            name: "plain yogurt",
            price: "100.00",
            quantity: 1,
            image: "https://www.daisybeet.com/wp-content/uploads/2024/01/Homemade-Greek-Yogurt-13.jpg",
            status: "order ready",
          },
          {
            id: "2",
            name: "banana yogurt",
            price: "400.00",
            quantity: 1,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qQ5nykmhb0UVn23P7ScZUT_5Vm3mDxpm1Q&s",
            status: "in transition",
          },
        ])
      } catch (error) {
        console.error("Failed to process order:", error)
      }
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-[#FFFBF0]">
      {/* Header */}
      <header className="container mx-auto p-4 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center">
          <Link href="/" className="h-12 mr-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7817.jpg-VZG4cretlG6LCUFlsdYLthGxid07NG.jpeg"
              alt="YO! GREEK Logo"
              className="h-full object-contain"
            />
          </Link>
        </div>

        <div className="relative flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products ..."
              className="w-full py-2 pl-10 pr-4 bg-[#FFFDE0] rounded-full border border-[#FFECB3] focus:outline-none"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/login" className="text-[#7B3FE4] font-medium underline">
            Login
          </Link>
          <Link href="/cart" className="text-[#D8B0FF]">
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-[#D8D0F0]">
        <div className="container mx-auto flex">
          <Link href="/" className="py-3 px-6 font-medium text-center flex-1 border-b-2 border-black">
            <div className="flex justify-center items-center">
              <Home className="w-5 h-5 mr-2" />
              Home
            </div>
          </Link>
          <Link href="/all" className="py-3 px-6 font-medium text-center flex-1">
            All Product
          </Link>
          <Link href="/with-fruits" className="py-3 px-6 font-medium text-center flex-1">
            With Fruits
          </Link>
          <Link href="/sweets" className="py-3 px-6 font-medium text-center flex-1">
            Sweets
          </Link>
        </div>
      </nav>

      {/* Order Content */}
      <div className="container mx-auto py-8 px-4">
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7B3FE4]"></div>
          </div>
        ) : (
          <>
            <h1 className="text-5xl font-black mb-6">Your order</h1>
            {orderNumber && <p className="text-gray-600 mb-6">Order #{orderNumber}</p>}

            <div className="bg-[#FFFDE0] rounded-lg overflow-hidden mb-8">
              <div className="grid grid-cols-3 p-4 font-bold border-b border-gray-200">
                <div className="text-lg">product</div>
                <div className="text-center text-lg">status</div>
                <div className="text-right text-lg">price</div>
              </div>

              {orderItems.map((item, index) => (
                <div key={index} className="grid grid-cols-3 p-6 items-center border-b border-gray-100 last:border-0">
                  <div className="flex items-center">
                    <div className="w-24 h-24 mr-6 overflow-hidden rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg?height=96&width=96"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-xl">{item.name}</div>
                  </div>
                  <div className="text-center">
                    <span
                      className={`px-4 py-2 rounded-full text-base ${
                        item.status === "order ready"
                          ? "bg-green-100 text-green-800"
                          : item.status === "in transition"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="text-right font-medium text-xl">฿ {item.price}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <div className="w-full max-w-md">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Subtotal</span>
                  <span className="font-medium">฿ 500.00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Shipping</span>
                  <span className="font-medium">฿ 80.00</span>
                </div>
                <div className="flex justify-between py-4 font-bold text-lg">
                  <span>Total</span>
                  <span>฿ 580.00</span>
                </div>

                <div className="flex gap-4 mt-8">
                  <Link
                    href="/"
                    className="flex-1 bg-[#A0C0FF] hover:bg-[#80A0FF] text-white py-3 px-6 rounded-full text-center"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    href="/order-tracking"
                    className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 py-3 px-6 rounded-full text-center"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
