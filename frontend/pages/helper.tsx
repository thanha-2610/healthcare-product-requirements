const saveUserProfile = (data: any) => {
  localStorage.setItem('user_profile', JSON.stringify(data))
}

// thong tin gửi ML
const getUserQuery = () => {
  const profile = localStorage.getItem('user_profile')
  if (!profile) return 'Sản phẩm phổ biến' // Khách
  const p = JSON.parse(profile)
  // object => ML đọc
  return `${p.gender} ${p.age} tuổi, nặng ${p.weight}kg, bệnh nền: ${p.diseases}, mục tiêu: ${p.goal}`
}
