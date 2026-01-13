import React, { useState } from 'react'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Giả lập lưu user vào localStorage
    localStorage.setItem('user_name', username || 'Khách')
    localStorage.setItem('is_logged_in', 'true')
    router.push('/survey') // Chuyển sang trang khảo sát
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <form
        onSubmit={handleLogin}
        className="w-96 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-slate-800">
          Đăng nhập
        </h2>
        <input
          type="text"
          placeholder="Nhập tên của bạn..."
          className="mb-4 w-full rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-emerald-500"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="w-full rounded-2xl bg-emerald-500 p-4 font-bold text-white transition-all hover:bg-emerald-600">
          Bắt đầu ngay
        </button>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="mt-2 w-full text-sm text-slate-400"
        >
          Tiếp tục với tư cách Khách
        </button>
      </form>
    </div>
  )
}
