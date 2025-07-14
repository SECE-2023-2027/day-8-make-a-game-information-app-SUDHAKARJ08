export default function SignupPage() {
  return (
    <div className="max-w-sm mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-green-400 text-center">Signup</h1>
      <form className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400" />
        <button type="submit" className="w-full bg-green-400 text-gray-900 font-bold py-2 rounded hover:bg-green-300 transition">Signup</button>
      </form>
    </div>
  );
} 