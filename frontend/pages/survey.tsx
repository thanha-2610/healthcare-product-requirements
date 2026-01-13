import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function SurveyPage() {
  const [formData, setFormData] = useState({
    gender: 'Nam',
    age: '',
    weight: '',
    diseases: '',
    goal: 'Tăng đề kháng',
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lưu hồ sơ sức khỏe vào LocalStorage
    localStorage.setItem('user_profile', JSON.stringify(formData))
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-2 text-3xl font-bold">Cá nhân hóa trải nghiệm</h1>
        <p className="mb-8 text-slate-500">
          Thông tin này giúp AI gợi ý sản phẩm chính xác hơn cho bạn.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block font-semibold">Giới tính</label>
            <select
              className="w-full rounded-2xl bg-slate-100 p-4 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option>Nam</option>
              <option>Nữ</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Tuổi"
              className="rounded-2xl bg-slate-100 p-4 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Cân nặng (kg)"
              className="rounded-2xl bg-slate-100 p-4 outline-none"
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
            />
          </div>

          <textarea
            placeholder="Tình trạng sức khỏe/Bệnh nền (vd: Đau dạ dày, mất ngủ...)"
            className="h-32 w-full rounded-2xl bg-slate-100 p-4 outline-none"
            onChange={(e) =>
              setFormData({ ...formData, diseases: e.target.value })
            }
          />

          <button className="w-full rounded-2xl bg-slate-900 p-5 text-lg font-bold text-white">
            Hoàn tất & Xem gợi ý
          </button>
        </form>
      </div>
    </div>
  )
}
