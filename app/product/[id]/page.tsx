"use client"
// อันนี้หน้ารายละเอียด product
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ShoppingCart, Search, Check, Minus, Plus } from "lucide-react"

// ✅ Sample product list
const products = [
    {
      id: "1",
      name: "Plain Greek yogurt",
      description: "กรีกโยเกิร์ตรสดั้งเดิม ไม่มีน้ำตาล โปรตีนสูง",
      weight: "80 g",
      price: "100.00",
      image: "https://www.daisybeet.com/wp-content/uploads/2024/01/Homemade-Greek-Yogurt-13.jpg",
      features: ["High protein", "No sugar", "Fresh daily"],
    },
    {
      id: "2",
      name: "Peanut butter Greek yogurt",
      description: "โยเกิร์ตรสเนยถั่ว หอมมัน อร่อยลงตัว",
      weight: "120 g",
      price: "120.00",
      image: "https://www.walderwellness.com/wp-content/uploads/2022/02/Peanut-Butter-Greek-Yogurt-Walder-Wellness-2.jpg",
      features: ["Nutty taste", "Energy booster", "Protein packed"],
    },
    {
      id: "3",
      name: "Banana Greek yogurt",
      description: "โยเกิร์ตกล้วยหอม กลิ่นหอมหวานตามธรรมชาติ",
      weight: "160 g",
      price: "120.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qQ5nykmhb0UVn23P7ScZUT_5Vm3mDxpm1Q&s",
      features: ["With real banana", "Low fat", "No additives"],
    },
    {
      id: "4",
      name: "Matcha Blueberry Greek yogurt",
      description:
        "กรีกโยเกิร์ตรสมัทฉะ + บลูเบอร์รี่ สีเขียวสดจากมัทฉะแท้ผสานความหอมหวานของบลูเบอร์รี่",
      weight: "150 g",
      price: "180.00",
      image:
        "https://ceremonymatcha.com/cdn/shop/articles/Bildschirmfoto_2022-05-18_um_15.05.06.jpg?crop=center&height=600&v=1652879988&width=600",
      features: ["High protein", "Matcha & blueberry", "Fresh delivery"],
    },
    {
      id: "5",
      name: "Chocolate Greek yogurt",
      description: "กรีกโยเกิร์ตรสช็อคโกแลต รสชาติเข้มข้นของช็อคโกแลต โปรตีนสูง",
      weight: "130 g",
      price: "130.00",
      image: "https://thefoodiediaries.co/wp-content/uploads/2023/04/img_7612-e1680534690722.jpg",
      features: ["High protein", "No sugar", "Fresh daily"],
    },
    {
      id: "6",
      name: "Blueberry Greek yogurt",
      description: "กรีกโยเกิร์ตรสบลูเบอร์รี่  โปรตีนสูง",
      weight: "120 g",
      price: "150.00",
      image: "https://www.mjandhungryman.com/wp-content/uploads/2023/04/Blueberry-yogurt.jpg",
      features: ["High protein", "No sugar", "Fresh daily"],
    },
    {
      id: "7",
      name: "Apple Cinnamon Greek yogurt",
      description: "กรีกโยเกิร์ตรสบลูเบอร์รี่  โปรตีนสูง",
      weight: "150 g",
      price: "140.00",
      image: "https://www.sugarsalted.com/wp-content/uploads/2023/10/caramelized-apple-yogurt-parfaits-dessert-jars-25feat.jpg",
      features: ["High protein", "No sugar", "Fresh daily"],
    },
    {
      id: "8",
      name: "Biscoff Greek yogurt",
      description: "กรีกโยเกิร์ตรสบิสคอฟ  โปรตีนสูง",
      weight: "130 g",
      price: "130.00",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Kq4AsXIJ1J1_f3ozJpvqxS9T2HJyiFrqvQ&s",
      features: ["High protein", "No sugar", "Fresh daily"],
    }
  ]
  
  interface ProductPageProps {
    params: {
      id: string
    }
  }
  
  export default function ProductPage({ params }: ProductPageProps) {
    const router = useRouter()
    const product = products.find((p) => p.id === params.id)
  
    const [quantity, setQuantity] = useState(1)
  
    if (!product) {
      return <p className="text-center text-red-500 mt-10">Product not found</p>
    }
  
    const decreaseQuantity = () => {
      if (quantity > 1) setQuantity(quantity - 1)
    }
  
    const increaseQuantity = () => {
      setQuantity(quantity + 1)
    }
  
    const addToCart = () => {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
        weight: product.weight,
      }
  
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]")
      const existingItemIndex = existingCart.findIndex((item: any) => item.id === product.id)
  
      if (existingItemIndex >= 0) {
        existingCart[existingItemIndex].quantity += quantity
      } else {
        existingCart.push(cartItem)
      }
  
      localStorage.setItem("cart", JSON.stringify(existingCart))
      alert("Product added to cart!")
    }

  return (
    <main className="min-h-screen bg-[#FFFBF0]">
      {/* Header */}
      <header className="container mx-auto p-4 flex items-center justify-between border-b border-gray-200">
      <div className="flex items-center">
         <Link
            href="/"
            className="text-[#7B3FE4] hover:underline flex items-center"
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

      {/* Product Detail */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="border-4 border-[#E8D0FF] rounded-3xl p-4 bg-white">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto rounded-xl" />
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold text-[#4A3728] mb-4">{product.name}</h1>

            <p className="text-gray-700 mb-4">{product.description}</p>

            <div className="mb-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center mb-1">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-2 text-gray-600">{product.weight}</div>

            <div className="text-xl font-bold mb-6">{product.price} THB</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                <button onClick={decreaseQuantity} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4">{quantity}</span>
                <button onClick={increaseQuantity} className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={addToCart}
                className="px-6 py-2 bg-[#A0C0FF] hover:bg-[#80A0FF] text-white rounded-full transition-colors"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
