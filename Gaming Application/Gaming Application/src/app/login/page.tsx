export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-400 text-center">Login</h1>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <button type="submit" className="w-full bg-blue-400 text-gray-900 font-bold py-2 rounded hover:bg-blue-300 transition">Login</button>
      </form>
    </div>
  );
} 