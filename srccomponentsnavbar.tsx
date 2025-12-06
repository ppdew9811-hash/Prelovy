import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                P
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Prelovy
                </span>
                <p className="text-xs text-muted-foreground -mt-1">Your Campus Preloved Partner</p>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Katalog
            </Link>
            <Link
              href="/cara-upload"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Cara Upload
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/tentang"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Tentang
            </Link>
            <Link href="/admin">
              <Button variant="outline" size="sm">
                Admin
              </Button>
            </Link>
            <Link href="/cara-upload">
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Jual Barang
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Link href="/cara-upload">
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Jual
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
