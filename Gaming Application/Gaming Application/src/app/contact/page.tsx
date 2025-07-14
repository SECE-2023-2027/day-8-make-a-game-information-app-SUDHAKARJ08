export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400 text-center">Contact Us</h1>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
        <textarea placeholder="Message" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" rows={4}></textarea>
        <button type="submit" className="w-full bg-yellow-400 text-gray-900 font-bold py-2 rounded hover:bg-yellow-300 transition">Send</button>
      </form>
    </div>
  );
} 