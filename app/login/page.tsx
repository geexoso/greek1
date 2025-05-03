import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] flex items-center justify-center">
      <div className="relative w-full max-w-md p-8">
        {/* Pixel border effect */}
        <div className="absolute inset-0 bg-[#FFF8C0] border-8 border-[#FFF8C0] rounded-lg">
          <div className="absolute top-0 left-0 w-4 h-4 bg-[#FFFBF0]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#FFFBF0]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#FFFBF0]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#FFFBF0]"></div>

          <div className="absolute top-0 left-4 right-4 h-4 bg-[#FFFBF0]"></div>
          <div className="absolute bottom-0 left-4 right-4 h-4 bg-[#FFFBF0]"></div>
          <div className="absolute left-0 top-4 bottom-4 w-4 bg-[#FFFBF0]"></div>
          <div className="absolute right-0 top-4 bottom-4 w-4 bg-[#FFFBF0]"></div>
        </div>

        {/* Login form container */}
        <div className="relative bg-[#FFFDE0] rounded-lg p-8 flex flex-col items-center">
          {/* Login splash image */}
          <div className="w-40 h-40 mb-6 relative flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Login-O9M4SgWzifMHtugjSV89maZjlQ2Xd5.png"
              alt="Log In"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <form className="w-full space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-bold uppercase">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                placeholder="greekyogurt@gmail.com"
                className="w-full px-4 py-2 rounded-md bg-[#C8D6FF] text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-bold uppercase">
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                placeholder="123yogurt456"
                className="w-full px-4 py-2 rounded-md bg-[#C8D6FF] text-gray-700 placeholder-gray-500"
              />
            </div>

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 bg-[#C8B6FF] hover:bg-[#B8A6FF] rounded-full font-bold text-[#4A2B13] transition-colors"
              >
                LOG IN
              </button>
            </div>
          </form>

          
          
        </div>
      </div>

      {/* Back to home link */}
      <Link href="/" className="absolute top-6 left-6 text-[#7B3FE4] hover:underline flex items-center">
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
  )
}

