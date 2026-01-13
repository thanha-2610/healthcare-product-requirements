import React, { useEffect, useState } from 'react'
import { ProductModal } from '../components/ProductModal'

// 1. Định nghĩa cấu trúc sản phẩm
export interface Product {
  id: number
  name: string
  category: string
  description: string
  score: number
  target_gender?: string
  goal?: string
}

export default function HomePage() {
  // 2. Chỉ định kiểu dữ liệu Product[] cho State
  const [personalizedRecs, setPersonalizedRecs] = useState<Product[]>([])
  const [themeRecs, setThemeRecs] = useState<Product[]>([])
  const [recentProducts, setRecentProducts] = useState<Product[]>([])
  const [userName, setUserName] = useState<String>('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  useEffect(() => {
    const name = localStorage.getItem('user_name')
    const profile = localStorage.getItem('user_profile')
    const recent = JSON.parse(localStorage.getItem('recent_viewed') || '[]')

    setUserName(name || 'Khách')
    setRecentProducts(recent)

    // 1. Lấy gợi ý cá nhân hóa (Nếu có profile)
    if (profile) {
      const p = JSON.parse(profile)
      const query = `${p.gender} ${p.age} tuổi ${p.diseases} ${p.goal}`
      fetchRecs(query, setPersonalizedRecs)
    }

    // 2. Lấy gợi ý theo chủ đề (Mặc định cho Khách)
    fetchRecs('Sản phẩm bổ sung sức khỏe tổng quát', setThemeRecs)
  }, [])

  const fetchRecs = async (query: string, setter: any) => {
    const res = await fetch('http://127.0.0.1:5000/api/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
    const data = await res.json()
    setter(data)
  }

  const handleProductClick = (product: any) => {
    // 1. Mở modal
    setSelectedProduct(product)

    // 2. Cập nhật danh sách "Đã xem" vào LocalStorage
    const currentRecent = JSON.parse(
      localStorage.getItem('recent_viewed') || '[]'
    )
    // Lọc bỏ sản phẩm này nếu đã có trong list cũ để đưa lên đầu
    const updatedRecent = [
      product,
      ...currentRecent.filter((p: any) => p.id !== product.id),
    ].slice(0, 4) // Chỉ giữ lại 4 sản phẩm gần nhất

    localStorage.setItem('recent_viewed', JSON.stringify(updatedRecent))
    setRecentProducts(updatedRecent)
  }
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-emerald-600">HealthAI</h1>
        <div className="flex items-center gap-4">
          <span className="font-medium">Chào, {userName}!</span>
          <button
            onClick={() => {
              localStorage.clear()
              window.location.reload()
            }}
            className="text-sm text-red-500"
          >
            Đăng xuất
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-16 px-4">
        {/* SECTION 1: CÁ NHÂN HÓA */}
        {personalizedRecs.length > 0 && (
          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              ✨ Dành riêng cho nhu cầu của bạn
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {personalizedRecs.map((item: any) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onClick={() => handleProductClick(item)}
                />
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: THEO CHỦ ĐỀ */}
        <section>
          <h2 className="mb-6 text-2xl font-bold italic text-slate-700">
            Khám phá sản phẩm phổ biến
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {themeRecs.map((item: any) => (
              <ProductCard
                key={item.id}
                item={item}
                onClick={() => handleProductClick(item)}
              />
            ))}
          </div>
        </section>

        {/* SECTION 3: ĐÃ XEM */}
        {recentProducts.length > 0 && (
          <section className="rounded-3xl bg-emerald-50 p-8">
            <h2 className="mb-6 text-xl font-bold text-emerald-800">
              Sản phẩm bạn đã xem gần đây
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {recentProducts.map((item: any) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  onClick={() => handleProductClick(item)}
                  isSmall
                />
              ))}
            </div>
          </section>
        )}
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}

// Component phụ để tái sử dụng
function ProductCard({ item, onClick, isSmall = false }: any) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md ${
        isSmall ? 'scale-95' : ''
      }`}
    >
      <div className="mb-2 text-xs font-bold uppercase text-emerald-500">
        {item.category}
      </div>
      <h3 className="mb-2 font-bold text-slate-800 line-clamp-1">
        {item.name}
      </h3>
      <p className="mb-4 text-xs text-slate-500 line-clamp-2">
        {item.description}
      </p>
      <div className="text-xs font-semibold text-emerald-600">
        Độ phù hợp: {item.score}%
      </div>
    </div>
  )
}
