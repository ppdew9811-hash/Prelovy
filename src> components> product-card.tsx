import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';
import type { Product } from '@/lib/types';
import { CONDITIONS, CATEGORIES } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
      <Link href={`/produk/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            <Badge className="bg-white/90 text-primary border-primary/20">
              {CATEGORIES[product.category]}
            </Badge>
          </div>
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-secondary/90">
              {CONDITIONS[product.condition]}
            </Badge>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        <Link href={`/produk/${product.id}`}>
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>
        <p className="text-2xl font-bold text-primary mb-2">
          {formatPrice(product.price)}
        </p>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1" />
          <span className="line-clamp-1">{product.location}</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link href={`/produk/${product.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            Lihat Detail
          </Button>
        </Link>
        <Link
          href={`https://wa.me/${product.seller.whatsapp}?text=Halo, saya tertarik dengan ${product.title}`}
          target="_blank"
          className="flex-1"
        >
          <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
            WhatsApp
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
