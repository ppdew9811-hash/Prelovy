import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Leaf, Users, Shield, Target, Sparkles } from 'lucide-react';

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tentang Prelovy
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Your Campus Preloved Partner
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission & Vision */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Visi Kami</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Menjadi platform terpercaya untuk jual beli barang preloved di kalangan mahasiswa,
                    mendukung gaya hidup berkelanjutan dan ekonomi sirkuler di lingkungan kampus.
                  </p>
                </div>
                <div>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-4">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Misi Kami</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Memudahkan mahasiswa UNNES dalam menjual barang yang tidak terpakai dan membeli
                    barang berkualitas dengan harga terjangkau, sambil mengurangi limbah dan mendukung
                    gaya hidup ramah lingkungan.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Cerita Kami</h2>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prelovy lahir dari pengalaman sederhana mahasiswa UNNES yang sering kesulitan
                  menjual barang bekas yang masih layak pakai. Buku kuliah semester lalu, laptop
                  yang sudah di-upgrade, pakaian yang sudah tidak muat, atau perabotan kos yang
                  mau dipindahkan - semuanya menumpuk tanpa ada platform yang memudahkan.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Di sisi lain, banyak mahasiswa yang mencari barang second berkualitas dengan
                  harga terjangkau. Marketplace umum terlalu luas dan kurang fokus pada kebutuhan
                  mahasiswa. Dari sinilah ide Prelovy muncul.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Prelovy hadir sebagai solusi sederhana, mudah, dan terpercaya khusus untuk
                  komunitas mahasiswa UNNES. Tanpa ribet login, cukup isi form dan langsung
                  jual. Kami percaya bahwa barang bekas bukan berarti tidak berharga -
                  justru bisa sangat berguna untuk orang lain yang membutuhkan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Mengapa Prelovy?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Khusus Mahasiswa</h3>
                <p className="text-muted-foreground">
                  Platform eksklusif untuk mahasiswa UNNES. Transaksi jadi lebih mudah dan aman
                  karena satu komunitas kampus.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Aman & Terverifikasi</h3>
                <p className="text-muted-foreground">
                  Setiap barang diverifikasi admin sebelum ditampilkan. Kami pastikan kualitas
                  dan keamanan untuk pembeli dan penjual.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mudah & Sederhana</h3>
                <p className="text-muted-foreground">
                  Tidak perlu login atau registrasi ribet. Cukup isi form, bayar admin fee,
                  dan barangmu siap dijual.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ramah Lingkungan</h3>
                <p className="text-muted-foreground">
                  Mendukung konsep reuse dan recycle. Kurangi sampah dengan memberi barang
                  bekas kesempatan kedua.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <span className="text-2xl font-bold">5%</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Biaya Terjangkau</h3>
                <p className="text-muted-foreground">
                  Admin fee hanya 5% dari harga jual. Lebih murah dari platform marketplace lainnya.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fokus Lokal</h3>
                <p className="text-muted-foreground">
                  COD mudah di area kampus. Tidak perlu repot kirim-kirim atau ongkir mahal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Nilai-Nilai Kami</h2>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Kejujuran</h3>
                <p className="text-muted-foreground">
                  Kami mendorong setiap penjual untuk jujur tentang kondisi barang.
                  Kepercayaan adalah fondasi komunitas kami.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Keberlanjutan</h3>
                <p className="text-muted-foreground">
                  Setiap transaksi di Prelovy adalah langkah kecil menuju gaya hidup yang
                  lebih berkelanjutan dan ramah lingkungan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Komunitas</h3>
                <p className="text-muted-foreground">
                  Prelovy bukan hanya platform jual beli, tapi juga membangun komunitas
                  mahasiswa yang saling membantu dan peduli.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Bergabung dengan Prelovy
              </h3>
              <p className="mb-6 text-white/90 max-w-2xl mx-auto">
                Jadilah bagian dari gerakan preloved di kampus. Jual barangmu yang tidak
                terpakai atau temukan barang berkualitas dengan harga mahasiswa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/cara-upload"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-md font-semibold hover:bg-white/90 transition-colors"
                >
                  Mulai Jual
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white/10 transition-colors"
                >
                  Lihat Katalog
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
