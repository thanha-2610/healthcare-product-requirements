import { Product } from '../pages'

interface ModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ModalProps) {
  if (!product) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="animate-in fade-in zoom-in w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl duration-200">
        {/* Header hình ảnh (Giả lập) */}
        <div className="flex h-48 items-center justify-center bg-gradient-to-r from-emerald-400 to-blue-500">
          <h2 className="text-4xl font-bold uppercase tracking-widest text-white opacity-20">
            {product.category}
          </h2>
        </div>

        <div className="p-8">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase text-emerald-700">
                {product.category}
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-800">
                {product.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 transition-colors hover:bg-slate-100"
            >
              <svg
                className="h-6 w-6 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                Mô tả chi tiết
              </h4>
              <p className="leading-relaxed text-slate-600">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-8 rounded-2xl bg-slate-50 p-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400">
                  Mục tiêu
                </h4>
                <p className="font-semibold text-slate-700">{product.goal}</p>
              </div>
              <div className="h-10 border-l border-slate-200"></div>
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400">
                  Độ phù hợp AI
                </h4>
                <p className="text-xl font-bold text-emerald-600">
                  {product.score}%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="flex-1 rounded-2xl bg-emerald-500 py-4 font-bold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600">
              Mua sản phẩm
            </button>
            <button
              onClick={onClose}
              className="flex-1 rounded-2xl bg-slate-100 py-4 font-bold text-slate-600 transition-all hover:bg-slate-200"
            >
              Đóng lại
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
