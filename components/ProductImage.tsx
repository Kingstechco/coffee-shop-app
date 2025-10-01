import Image from 'next/image';

interface ProductImageProps {
  name: string;
  category: string;
  className?: string;
}

const imageMap: { [key: string]: string } = {
  'Espresso': 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=400&fit=crop',
  'Cappuccino': 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop',
  'Iced Latte': 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
  'Caramel Macchiato': 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop',
  'Cold Brew': 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=400&h=400&fit=crop',
  'Croissant': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
  'Blueberry Muffin': 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop',
  'Avocado Toast': 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop'
};

export default function ProductImage({ name, category, className = '' }: ProductImageProps) {
  const imageUrl = imageMap[name] || `https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop`;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        className="object-cover w-full h-full"
        unoptimized
      />
    </div>
  );
}