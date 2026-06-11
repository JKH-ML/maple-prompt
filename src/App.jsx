import { useEffect, useState } from 'react'
import GalleryPage from './pages/GalleryPage.jsx'
import CharacterPage from './pages/CharacterPage.jsx'

// 의존성 없는 간단한 해시 라우팅 (#/  ·  #/character)
export default function App() {
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  if (route === '#/character') return <CharacterPage />
  return <GalleryPage />
}
