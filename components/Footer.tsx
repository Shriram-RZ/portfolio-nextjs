export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Shriram. Built with Next.js and Tailwind CSS.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Designed and developed with ❤️
        </p>
      </div>
    </footer>
  )
}