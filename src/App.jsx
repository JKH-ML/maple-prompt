import PromptCard from './components/PromptCard.jsx'
import { prompts } from './data/prompts.js'

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">🎨 프롬프트 갤러리</h1>
        <p className="app__subtitle">
          마음에 드는 프롬프트를 모아보고 공유하세요
        </p>
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
