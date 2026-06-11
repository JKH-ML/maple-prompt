import CharacterSearch from '../components/CharacterSearch.jsx'

export default function CharacterPage() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">🧙 내 캐릭터 이미지 저장하기</h1>
      </header>

      <div className="app__nav">
        <a className="navbtn navbtn--ghost" href="#/">
          ← 프롬프트 갤러리로
        </a>
      </div>

      <CharacterSearch />
    </div>
  )
}
