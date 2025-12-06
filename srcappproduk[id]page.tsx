'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { CONDITIONS, CATEGORIES } from '@/lib/types';
import { MapPin, Calendar, User, MessageCircle, ArrowLeft, Share2 } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = MOCK_PRODUCTS.find((p) => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h1>
        <Link href="/">
          <Button>Kembali ke Beranda</Button>
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const adminFee = product.price * 0.05;
  const whatsappMessage = `Halo, saya tertarik dengan ${product.title} seharga ${formatPrice(product.price)}. Apakah masih tersedia?`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4" />
          Kembali ke Katalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-2 mb-3">
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  {CATEGORIES[product.category]}
                </Badge>
                <Badge variant="secondary">
                  {CONDITIONS[product.condition]}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {product.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(product.createdAt).toLocaleDateString('id-ID')}
                </div>
              </div>
              <div className="text-4xl font-bold text-primary mb-6">
                {formatPrice(product.price)}
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Deskripsi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Informasi Penjual
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nama Penjual</span>
                    <span className="font-medium">{product.seller.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Terverifikasi
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-1">Biaya Admin (5%)</p>
              <p className="text-lg font-semibold">{formatPrice(adminFee)}</p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={`https://wa.me/${product.seller.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                className="w-full"
              >
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hubungi via WhatsApp
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full">
                <Share2 className="mr-2 h-5 w-5" />
                Bagikan Produk
              </Button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Produk Serupa</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_PRODUCTS.filter(
              (p) => p.category === product.category && p.id !== product.id
            )
              .slice(0, 4)
              .map((p) => (
                <Link key={p.id} href={`/produk/${p.id}`}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <Image
                        src={p.images[0]}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-2 mb-2">{p.title}</h3>
                      <p className="text-lg font-bold text-primary">{formatPrice(p.price)}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
