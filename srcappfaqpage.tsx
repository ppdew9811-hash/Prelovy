'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Apa itu Prelovy?',
    answer: 'Prelovy adalah platform jual beli barang preloved (bekas) khusus untuk mahasiswa UNNES. Kami memfasilitasi transaksi jual beli barang bekas yang masih layak pakai dengan aman dan mudah.',
  },
  {
    question: 'Bagaimana cara jual barang di Prelovy?',
    answer: 'Untuk jual barang, kamu cukup isi Google Form yang tersedia, bayar biaya admin 5%, tunggu verifikasi admin, dan barangmu akan tampil di katalog. Proses verifikasi biasanya 1-2 hari kerja.',
  },
  {
    question: 'Berapa biaya admin yang harus dibayar?',
    answer: 'Biaya admin adalah 5% dari harga jual barang. Contoh: jika barangmu dijual Rp 100.000, maka biaya admin yang dibayar adalah Rp 5.000. Biaya ini dibayarkan di awal sebelum barang ditampilkan.',
  },
  {
    question: 'Apakah saya perlu membuat akun?',
    answer: 'Tidak perlu! Prelovy dirancang tanpa sistem login. Kamu hanya perlu mengisi Google Form untuk upload barang, dan pembeli bisa langsung menghubungimu via WhatsApp.',
  },
  {
    question: 'Bagaimana cara pembayaran transaksi?',
    answer: 'Transaksi dilakukan langsung antara penjual dan pembeli. Kamu bisa pilih metode pembayaran yang disepakati bersama, bisa cash (COD), transfer, atau e-wallet.',
  },
  {
    question: 'Apakah Prelovy menjamin keamanan transaksi?',
    answer: 'Prelovy memverifikasi setiap barang yang ditampilkan. Namun, transaksi dilakukan langsung antara penjual dan pembeli. Kami sarankan untuk COD (Cash on Delivery) di area kampus atau gunakan metode pembayaran yang aman.',
  },
  {
    question: 'Berapa lama proses verifikasi barang?',
    answer: 'Proses verifikasi biasanya memakan waktu 1-2 hari kerja. Admin akan mengecek kelengkapan data dan konfirmasi pembayaran biaya admin. Kamu akan mendapat notifikasi via WhatsApp setelah diverifikasi.',
  },
  {
    question: 'Kategori barang apa saja yang bisa dijual?',
    answer: 'Kamu bisa jual berbagai kategori: Buku (textbook, novel, komik), Elektronik (laptop, HP, gadget), Fashion (pakaian, sepatu), Aksesoris (tas, jam tangan), dan Perabotan Kos (meja, lemari, kasur).',
  },
  {
    question: 'Bagaimana jika barang saya tidak laku?',
    answer: 'Barangmu akan tetap ditampilkan di katalog sampai laku. Tidak ada batas waktu. Kamu bisa update harga atau deskripsi dengan menghubungi admin. Biaya admin tidak dikembalikan karena sudah digunakan untuk proses verifikasi dan penampilan di platform.',
  },
  {
    question: 'Apakah bisa edit atau hapus barang yang sudah di-upload?',
    answer: 'Bisa! Hubungi admin via WhatsApp untuk edit informasi barang atau hapus barang jika sudah laku. Kami akan segera proses permintaanmu.',
  },
  {
    question: 'Bagaimana cara menghubungi penjual?',
    answer: 'Setiap produk ada tombol "WhatsApp" yang akan langsung mengarahkan kamu ke chat dengan penjual. Kamu bisa bertanya detail barang, nego harga, atau atur COD.',
  },
  {
    question: 'Apakah harga bisa dinegosiasi?',
    answer: 'Itu tergantung kesepakatan antara penjual dan pembeli. Harga yang tercantum adalah harga yang ditetapkan penjual, tapi kamu bisa coba nego via WhatsApp.',
  },
  {
    question: 'Siapa yang bisa jual/beli di Prelovy?',
    answer: 'Prelovy khusus untuk mahasiswa UNNES. Baik penjual maupun pembeli diharapkan adalah mahasiswa aktif UNNES untuk memudahkan transaksi dan COD di area kampus.',
  },
  {
    question: 'Bagaimana jika ada masalah dengan transaksi?',
    answer: 'Jika ada masalah atau dispute, hubungi admin Prelovy. Kami akan bantu mediasi antara penjual dan pembeli untuk mencari solusi terbaik.',
  },
  {
    question: 'Apakah ada tips agar barang cepat laku?',
    answer: 'Tips: (1) Gunakan foto yang jelas dan menarik dari berbagai sudut, (2) Tulis deskripsi lengkap dan jujur tentang kondisi barang, (3) Tentukan harga yang wajar/kompetitif, (4) Respon cepat saat ada yang bertanya via WhatsApp.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pertanyaan yang Sering Diajukan
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum tentang Prelovy
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </CardTitle>
              </CardHeader>
              {openIndex === index && (
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Masih Ada Pertanyaan?
              </h3>
              <p className="mb-6 text-white/90">
                Jangan ragu untuk menghubungi kami via WhatsApp atau email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-md font-semibold hover:bg-white/90 transition-colors"
                >
                  WhatsApp Admin
                </a>
                <a
                  href="mailto:support@prelovy.com"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white/10 transition-colors"
                >
                  Email Kami
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
