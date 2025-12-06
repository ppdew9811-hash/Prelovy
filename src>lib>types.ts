export type ProductCondition = 'baru' | 'seperti-baru' | 'bekas-baik' | 'bekas-layak';

export type ProductCategory = 'buku' | 'elektronik' | 'fashion' | 'aksesoris' | 'perabotan-kos';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  condition: ProductCondition;
  category: ProductCategory;
  images: string[];
  location: string;
  seller: {
    name: string;
    whatsapp: string;
  };
  isVerified: boolean;
  createdAt: string;
}

export const CATEGORIES: Record<ProductCategory, string> = {
  'buku': 'Buku',
  'elektronik': 'Elektronik',
  'fashion': 'Fashion',
  'aksesoris': 'Aksesoris',
  'perabotan-kos': 'Perabotan Kos',
};

export const CONDITIONS: Record<ProductCondition, string> = {
  'baru': 'Baru',
  'seperti-baru': 'Seperti Baru',
  'bekas-baik': 'Bekas - Baik',
  'bekas-layak': 'Bekas - Layak',
};
