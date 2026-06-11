import PromptCard from './components/PromptCard.jsx'
import CharacterSearch from './components/CharacterSearch.jsx'
import { prompts } from './data/prompts.js'

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">🎨 프롬프트 갤러리</h1>
      </header>

      <CharacterSearch />

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
