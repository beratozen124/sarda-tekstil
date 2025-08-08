'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, use } from "react"
import { ArrowLeft, Heart, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShareModal } from "@/components/share-modal"

const products = {
  1: {
    id: 1,
    name: "Ürün 1",
    images: ["/IMG-20250807-WA0017.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  2: {
    id: 2,
    name: "Ürün 2",
    images: ["/IMG-20250807-WA0018.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  3: {
    id: 3,
    name: "Ürün 3",
    images: ["/IMG-20250807-WA0019.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  4: {
    id: 4,
    name: "Ürün 4",
    images: ["/IMG-20250807-WA0020.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  5: {
    id: 5,
    name: "Ürün 5",
    images: ["/IMG-20250807-WA0021.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  6: {
    id: 6,
    name: "Ürün 6",
    images: ["/IMG-20250807-WA0022.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  7: {
    id: 7,
    name: "Ürün 7",
    images: ["/IMG-20250807-WA0023.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  8: {
    id: 8,
    name: "Ürün 8",
    images: ["/IMG-20250807-WA0024.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  9: {
    id: 9,
    name: "Ürün 9",
    images: ["/IMG-20250807-WA0025.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  10: {
    id: 10,
    name: "Ürün 10",
    images: ["/IMG-20250807-WA0026.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  11: {
    id: 11,
    name: "Ürün 11",
    images: ["/IMG-20250807-WA0027.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  12: {
    id: 12,
    name: "Ürün 12",
    images: ["/IMG-20250807-WA0028.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  13: {
    id: 13,
    name: "Ürün 13",
    images: ["/IMG-20250807-WA0029.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  14: {
    id: 14,
    name: "Ürün 14",
    images: ["/IMG-20250807-WA0030.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  15: {
    id: 15,
    name: "Ürün 15",
    images: ["/IMG-20250807-WA0031.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  16: {
    id: 16,
    name: "Ürün 16",
    images: ["/IMG-20250807-WA0032.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  17: {
    id: 17,
    name: "Ürün 17",
    images: ["/IMG-20250807-WA0033.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  18: {
    id: 18,
    name: "Ürün 18",
    images: ["/IMG-20250807-WA0034.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  19: {
    id: 19,
    name: "Ürün 19",
    images: ["/IMG-20250807-WA0035.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  20: {
    id: 20,
    name: "Ürün 20",
    images: ["/IMG-20250807-WA0036.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  21: {
    id: 21,
    name: "Ürün 21",
    images: ["/IMG-20250807-WA0037.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  22: {
    id: 22,
    name: "Ürün 22",
    images: ["/IMG-20250807-WA0038.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  23: {
    id: 23,
    name: "Ürün 23",
    images: ["/IMG-20250807-WA0039.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  24: {
    id: 24,
    name: "Ürün 24",
    images: ["/IMG-20250807-WA0040.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  25: {
    id: 25,
    name: "Ürün 25",
    images: ["/IMG-20250807-WA0041.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  26: {
    id: 26,
    name: "Ürün 26",
    images: ["/IMG-20250807-WA0042.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  27: {
    id: 27,
    name: "Ürün 27",
    images: ["/IMG-20250807-WA0043.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  28: {
    id: 28,
    name: "Ürün 28",
    images: ["/IMG-20250807-WA0044.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  29: {
    id: 29,
    name: "Ürün 29",
    images: ["/IMG-20250807-WA0045.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  30: {
    id: 30,
    name: "Ürün 30",
    images: ["/IMG-20250807-WA0046.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  31: {
    id: 31,
    name: "Ürün 31",
    images: ["/IMG-20250807-WA0047.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  32: {
    id: 32,
    name: "Ürün 32",
    images: ["/IMG-20250807-WA0048.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  33: {
    id: 33,
    name: "Ürün 33",
    images: ["/IMG-20250807-WA0049.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  34: {
    id: 34,
    name: "Ürün 34",
    images: ["/IMG-20250807-WA0050.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  35: {
    id: 35,
    name: "Ürün 35",
    images: ["/IMG-20250807-WA0051.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  36: {
    id: 36,
    name: "Ürün 36",
    images: ["/IMG-20250807-WA0052.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  37: {
    id: 37,
    name: "Ürün 37",
    images: ["/IMG-20250807-WA0053.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  38: {
    id: 38,
    name: "Ürün 38",
    images: ["/IMG-20250807-WA0054.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  39: {
    id: 39,
    name: "Ürün 39",
    images: ["/IMG-20250807-WA0055.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  40: {
    id: 40,
    name: "Ürün 40",
    images: ["/IMG-20250807-WA0056.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  41: {
    id: 41,
    name: "Ürün 41",
    images: ["/IMG-20250807-WA0057.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  42: {
    id: 42,
    name: "Ürün 42",
    images: ["/IMG-20250807-WA0058.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  43: {
    id: 43,
    name: "Ürün 43",
    images: ["/IMG-20250807-WA0059.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  44: {
    id: 44,
    name: "Ürün 44",
    images: ["/IMG-20250807-WA0060.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  45: {
    id: 45,
    name: "Ürün 45",
    images: ["/IMG-20250807-WA0062.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  46: {
    id: 46,
    name: "Ürün 46",
    images: ["/IMG-20250807-WA0064.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  47: {
    id: 47,
    name: "Ürün 47",
    images: ["/IMG-20250807-WA0066.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  },
  48: {
    id: 48,
    name: "Ürün 48",
    images: ["/IMG-20250807-WA0068.jpg"],
    description: "Bu ürün hakkında kısa bir açıklama."
  }
}

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const [showPriceModal, setShowPriceModal] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  
  const resolvedParams = use(params)
  const productId = parseInt(resolvedParams.id)
  const product = products[productId as keyof typeof products]
  
  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900">Ürün Bulunamadı</h1>
          <p className="text-gray-600">Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
          <Link href="/products">
            <Button className="bg-black hover:bg-gray-800 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ürünlere Dön
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-black">Sarda Tekstil</span>
            </Link>
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              <Link href="/" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                Ana Sayfa
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                Ürünler
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-black transition-colors font-semibold" onClick={() => window.scrollTo(0, 0)}>
                İletişim
              </Link>
            </nav>
            <Button className="bg-black hover:bg-gray-800 text-white">
              Katalog İndir
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors" onClick={() => window.scrollTo(0, 0)}>Ana Sayfa</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-black transition-colors" onClick={() => window.scrollTo(0, 0)}>Ürünler</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden bg-gray-100 hover:opacity-80 transition-opacity ${
                    selectedImage === index ? 'ring-2 ring-black' : ''
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              
              <h1 className="text-3xl lg:text-4xl font-bold text-black">{product.name}</h1>
              
              
              
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white"
                  onClick={() => setShowShareModal(true)}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Paylaş
                </Button>
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mt-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Teknik Özellikler</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                    <span className="font-bold text-black">{key}</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Products */}
        <div className="mt-12 text-center">
          <Link href="/products" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Ürünlere Dön
            </Button>
          </Link>
        </div>
      </div>

      {/* Modals */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        productName={product.name}
        productUrl={currentUrl}
      />

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                  <span className="text-black font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">Sarda Tekstil</span>
              </div>
              <p className="text-gray-400">
                Geleneksel sanatın modern yorumu ile kaliteli tekstil ürünleri üretiyoruz.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Ürünler</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Kilim Koleksiyonu</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Bukle Serisi</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Özel Tasarım</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Kurumsal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Hakkımızda</Link></li>
                <li><Link href="/quality-policy" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Kalite Politikası</Link></li>
                <li><Link href="/sustainability" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Sürdürülebilirlik</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">İletişim</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Gaziantep, Türkiye</li>
                <li>+90 342 123 45 67</li>
                <li>info@sardatekstil.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sarda Tekstil. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
