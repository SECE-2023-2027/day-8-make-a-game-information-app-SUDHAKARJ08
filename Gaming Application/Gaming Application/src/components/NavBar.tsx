import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
    const pathname = usePathname();
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Contact', href: '/contact' },
        { name: 'About', href: '/about' },
        { name: 'Logout', href: '/logout' },
    ];
    return (
        <nav className="flex justify-between px-8 py-4 bg-gray-900 text-white">
            <div className="text-xl font-bold">🎮 GameZone</div>
            <ul className="flex gap-6 items-center">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} legacyBehavior>
                            <a className={`hover:text-yellow-400 transition-all duration-200 cursor-pointer ${pathname === item.href ? 'text-yellow-400 font-bold' : ''}`}>{item.name}</a>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href="/login" legacyBehavior>
                        <a className="bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-lg transition-all duration-200 cursor-pointer">Login</a>
                    </Link>
                </li>
                <li>
                    <Link href="/signup" legacyBehavior>
                        <a className="bg-green-500 hover:scale-110 px-4 py-1 rounded-lg transition-transform duration-200 cursor-pointer">Signup</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
