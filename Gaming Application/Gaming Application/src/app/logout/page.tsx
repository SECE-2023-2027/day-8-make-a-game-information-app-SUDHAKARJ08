import Link from 'next/link';

export default function LogoutPage() {
  return (
    <div className="max-w-md mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-400">You have been logged out.</h1>
      <Link href="/" legacyBehavior>
        <a className="inline-block bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded hover:bg-yellow-300 transition">Return Home</a>
      </Link>
    </div>
  );
} 