import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 shadow-md border-b-4 border-gold flex justify-between items-center">
      <div id="header-title" className="text-2xl font-bold text-gold">S. Lee Ward</div>
      <nav>
        <ul className="flex gap-6">
          <li><Link href="/" className="hover:text-gold">Home</Link></li>
          <li><Link href="/about" className="hover:text-gold">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}