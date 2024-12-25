import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Novel Haven',
  description: 'Your one-stop shop for novels and stories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Novel Haven</h1>
          <nav>
            <ul className="nav-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/genres">Genres</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        
      </body>
    </html>
  );
}
