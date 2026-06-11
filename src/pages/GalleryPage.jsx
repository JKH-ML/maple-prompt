import PromptCard from '../components/PromptCard.jsx'
import { prompts } from '../data/prompts.js'

export default function GalleryPage() {
  return (
    <div className="app">
      <header className="app__header app__header--row">
        <h1 className="app__title">🎨 프롬프트 갤러리</h1>
        <a className="navbtn" href="#/character">
          내 캐릭터 이미지 저장하기 <span className="navbtn__arrow">→</span>
        </a>
      </header>

      <main className="gallery">
        {prompts.map((post) => (
          <PromptCard key={post.id} post={post} />
        ))}
      </main>

      <footer className="app__footer">
        총 {prompts.length}개의 프롬프트
      </footer>
    </div>
  )
}
