import { cacheLife } from 'next/cache';

async function getCurrentYear() {
  'use cache';
  cacheLife('days');
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="bg-black text-white py-4 mt-12 border-t-4 border-gold">
      <div className="container mx-auto px-4 text-center">
        <p>Copyright &copy; {year} | S. Lee Ward | All rights reserved</p>
      </div>
    </footer>
  );
}
