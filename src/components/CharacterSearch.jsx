import { useState } from 'react'
import ImageCropper from './ImageCropper.jsx'

export default function CharacterSearch() {
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [char, setChar] = useState(null)

  async function search(e) {
    e.preventDefault()
    const q = name.trim()
    if (!q) return

    setLoading(true)
    setError('')
    setChar(null)

    try {
      const res = await fetch(`/api/character?name=${encodeURIComponent(q)}`)
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || '조회에 실패했습니다.')
      } else {
        setChar(data)
      }
    } catch {
      setError('네트워크 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="charsearch">
      <form className="charsearch__form" onSubmit={search}>
        <input
          className="charsearch__input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="캐릭터 닉네임을 입력하세요"
        />
        <button className="charsearch__btn" type="submit" disabled={loading}>
          {loading ? '조회 중…' : '검색'}
        </button>
      </form>

      {error && <p className="charsearch__error">{error}</p>}

      {char && (
        <div className="charsearch__result">
          <div className="charsearch__info">
            <strong>{char.name}</strong>
            <span>Lv.{char.level} · {char.job}</span>
            <span>{char.world}</span>
          </div>
          <ImageCropper imageUrl={char.image} />
        </div>
      )}
    </section>
  )
}
