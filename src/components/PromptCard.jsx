import { useState } from 'react'

export default function PromptCard({ post }) {
  const [likes, setLikes] = useState(post.likes)
  const [liked, setLiked] = useState(false)
  const [copied, setCopied] = useState(false)

  function toggleLike() {
    setLikes((n) => (liked ? n - 1 : n + 1))
    setLiked((v) => !v)
  }

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(post.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // 클립보드 접근 실패 시 무시
    }
  }

  return (
    <article className="card">
      <div className="card__thumb">
        <img src={post.thumbnail} alt={post.title} loading="lazy" />
      </div>

      <div className="card__body">
        <h2 className="card__title">{post.title}</h2>

        <pre className="card__prompt">{post.prompt}</pre>

        <div className="card__actions">
          <button
            className={`btn-like ${liked ? 'btn-like--on' : ''}`}
            onClick={toggleLike}
          >
            {liked ? '❤️' : '🤍'} {likes}
          </button>

          <button className="btn-copy" onClick={copyPrompt}>
            {copied ? '✓ 복사됨' : '복사'}
          </button>

          <a
            className="btn-link"
            href={post.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            원문 ↗
          </a>
        </div>
      </div>
    </article>
  )
}
