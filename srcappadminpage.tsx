'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MOCK_PRODUCTS } from '@/lib/mock-data';
import { CATEGORIES, CONDITIONS } from '@/lib/types';
import { Search, CheckCircle, XCircle, Edit, Trash2, TrendingUp, Package, DollarSign } from 'lucide-react';
import Image from 'next/image';

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = MOCK_PRODUCTS.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalProducts = MOCK_PRODUCTS.length;
  const verifiedProducts = MOCK_PRODUCTS.filter((p) => p.isVerified).length;
  const pendingProducts = MOCK_PRODUCTS.filter((p) => !p.isVerified).length;
  const totalRevenue = MOCK_PRODUCTS.reduce((sum, p) => sum + (p.price * 0.05), 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-white">
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-white/90">Kelola produk dan transaksi Prelovy</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Produk
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Semua produk di platform
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Terverifikasi
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{verifiedProducts}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Produk sudah tayang
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Menunggu Verifikasi
              </CardTitle>
              <XCircle className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">{pendingProducts}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Perlu ditinjau
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pendapatan
              </CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{formatPrice(totalRevenue)}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Dari biaya admin 5%
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari produk..."
                className="pl-10 h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Produk</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="relative w-full md:w-24 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{product.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {CATEGORIES[product.category]}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {CONDITIONS[product.condition]}
                          </Badge>
                          {product.isVerified ? (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              Terverifikasi
                            </Badge>
                          ) : (
                            <Badge className="bg-amber-100 text-amber-800 text-xs">
                              Pending
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-primary">
                          {formatPrice(product.price)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Admin: {formatPrice(product.price * 0.05)}
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                      <span>Penjual: {product.seller.name}</span>
                      <span>•</span>
                      <span>Lokasi: {product.location}</span>
                      <span>•</span>
                      <span>Tanggal: {new Date(product.createdAt).toLocaleDateString('id-ID')}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {!product.isVerified && (
                        <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Verifikasi
                        </Button>
                      )}
                      <Button size="sm" variant="outline">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Hapus
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-8">
                <p className="text-muted-foreground">Tidak ada produk ditemukan</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="mt-8 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-3">Catatan Admin</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Verifikasi produk dalam 1-2 hari kerja setelah penjual upload</li>
              <li>• Pastikan foto jelas dan deskripsi lengkap sebelum approve</li>
              <li>• Konfirmasi pembayaran admin fee 5% sudah diterima</li>
              <li>• Hubungi penjual via WhatsApp jika ada data yang kurang lengkap</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
