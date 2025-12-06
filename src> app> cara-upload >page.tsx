import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Upload, Smartphone, Zap, ExternalLink, QrCode } from 'lucide-react';

export default function CaraUploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cara Upload Barang
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Jual barang prelovedmu dengan mudah dalam 3 langkah sederhana - Langsung tayang otomatis!
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <Zap className="h-5 w-5 text-yellow-300" />
            <span className="font-semibold">Auto-Post! Tanpa Tunggu Verifikasi</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Step 1 */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shrink-0">
                  1
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Isi Google Form</CardTitle>
                  <p className="text-muted-foreground">
                    Klik tombol di bawah untuk mengisi formulir upload barang
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Informasi yang diperlukan:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Foto barang (minimal 1, maksimal 4 foto berkualitas baik)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Judul dan deskripsi barang yang jelas dan lengkap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Harga jual yang wajar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Kondisi barang (Baru / Seperti Baru / Bekas Baik / Bekas Layak)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Kategori (Buku / Elektronik / Fashion / Aksesoris / Perabotan Kos)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Lokasi dan nomor WhatsApp aktif</span>
                    </li>
                  </ul>
                </div>
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Upload className="mr-2 h-5 w-5" />
                  Buka Google Form
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl shrink-0">
                  2
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Bayar Admin Fee 5% Otomatis</CardTitle>
                  <p className="text-muted-foreground">
                    Setelah submit form, kamu akan langsung dapat link pembayaran
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 border-2 border-primary/20">
                  <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    Metode Pembayaran Instant:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <QrCode className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">QRIS</p>
                        <p className="text-xs text-muted-foreground">Scan & bayar dalam hitungan detik</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <span className="font-bold text-secondary">Rp</span>
                      </div>
                      <div>
                        <p className="font-semibold">Transfer Bank</p>
                        <p className="text-xs text-muted-foreground">BCA, BNI, Mandiri, BRI</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <span className="font-bold text-primary">E</span>
                      </div>
                      <div>
                        <p className="font-semibold">E-Wallet</p>
                        <p className="text-xs text-muted-foreground">GoPay, OVO, Dana, ShopeePay</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    <span className="font-semibold">Contoh:</span> Jika harga barang Rp 100.000,
                    admin fee yang harus dibayar adalah Rp 5.000 (5%). Link pembayaran otomatis
                    generate dengan nominal yang sudah dihitung.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-2 hover:border-primary/50 transition-colors border-green-200 bg-green-50/30">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl shrink-0">
                  3
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                    Barang Langsung Tayang!
                    <Zap className="h-6 w-6 text-yellow-500" />
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Pembayaran sukses = langsung muncul di katalog, tanpa tunggu!
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pl-20">
              <div className="space-y-3">
                <div className="bg-white border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Zap className="h-6 w-6 text-green-600 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Sistem Otomatis 100%</h4>
                      <p className="text-sm text-green-700">
                        Begitu pembayaran berhasil terverifikasi, barangmu <span className="font-semibold">otomatis muncul di katalog Prelovy</span> dalam waktu kurang dari 1 menit!
                      </p>
                    </div>
                  </div>
                  <div className="bg-green-100 rounded-lg p-3">
                    <h4 className="font-semibold text-green-800 mb-2">Notifikasi Real-time:</h4>
                    <ul className="space-y-1 text-sm text-green-700">
                      <li>✓ Email konfirmasi pembayaran</li>
                      <li>✓ WhatsApp notifikasi barang sudah live</li>
                      <li>✓ Link langsung ke halaman produkmu</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Tips agar cepat laku:</h4>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>✓ Gunakan foto yang jelas dan menarik dari berbagai sudut</li>
                    <li>✓ Tulis deskripsi lengkap dan jujur tentang kondisi</li>
                    <li>✓ Harga yang kompetitif dan wajar</li>
                    <li>✓ Respon cepat saat ada yang chat via WhatsApp</li>
                    <li>✓ Sediakan opsi COD di area kampus</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Kenapa Upload di Prelovy Lebih Cepat?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Instant Posting</h4>
                  <p className="text-sm text-muted-foreground">
                    Tidak perlu tunggu approval admin. Bayar dan langsung tayang!
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold mb-2">Payment Mudah</h4>
                  <p className="text-sm text-muted-foreground">
                    QRIS, Transfer, E-Wallet. Pilih yang paling nyaman buatmu.
                  </p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">100% Otomatis</h4>
                  <p className="text-sm text-muted-foreground">
                    Sistem otomatis handle semuanya. Kamu tinggal tunggu pembeli!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Siap Untuk Mulai Jual?
              </h3>
              <p className="mb-6 text-white/90">
                Klik tombol di bawah untuk mengisi formulir. Barangmu bisa langsung tayang
                dalam hitungan menit setelah pembayaran!
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Upload className="mr-2 h-5 w-5" />
                Isi Form & Upload Sekarang
              </Button>
              <p className="mt-4 text-sm text-white/75">
                Gratis daftar • Admin fee hanya 5% • Auto-post instant
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
