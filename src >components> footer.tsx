import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                P
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Prelovy
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-4">
              Platform jual beli barang preloved khusus mahasiswa UNNES.
              Mendukung gaya hidup berkelanjutan dan ramah lingkungan.
            </p>
            <p className="text-xs text-muted-foreground">
              &copy; 2024 Prelovy. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Katalog
                </Link>
              </li>
              <li>
                <Link href="/cara-upload" className="text-muted-foreground hover:text-primary transition-colors">
                  Cara Upload
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/?kategori=buku" className="text-muted-foreground hover:text-primary transition-colors">
                  Buku
                </Link>
              </li>
              <li>
                <Link href="/?kategori=elektronik" className="text-muted-foreground hover:text-primary transition-colors">
                  Elektronik
                </Link>
              </li>
              <li>
                <Link href="/?kategori=fashion" className="text-muted-foreground hover:text-primary transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/?kategori=aksesoris" className="text-muted-foreground hover:text-primary transition-colors">
                  Aksesoris
                </Link>
              </li>
              <li>
                <Link href="/?kategori=perabotan-kos" className="text-muted-foreground hover:text-primary transition-colors">
                  Perabotan Kos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
