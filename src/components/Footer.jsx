export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 text-center text-gray-500 text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Save the Children Indonesia. All rights reserved.</p>
        <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <a href="#" className="hover:text-gray-800">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
