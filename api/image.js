// ─────────────────────────────────────────────────────────────
//  Vercel 서버리스 함수: 넥슨 캐릭터 이미지 프록시
//
//  넥슨 이미지(open.api.nexon.com)를 직접 <canvas>로 자르면
//  CORS 때문에 캔버스가 오염(tainted)되어 저장이 막힙니다.
//  이 함수가 이미지를 대신 받아 같은 출처로 내려주면
//  브라우저에서 자유롭게 크롭/저장할 수 있습니다.
//
//  호출 예: /api/image?url=<인코딩된 넥슨 이미지 URL>
// ─────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  const url = req.query.url

  // 넥슨 도메인만 허용 (오픈 프록시 악용 방지)
  if (!url || !url.startsWith('https://open.api.nexon.com/')) {
    return res.status(400).json({ error: '허용되지 않은 이미지 주소입니다.' })
  }

  try {
    const upstream = await fetch(url)
    if (!upstream.ok) {
      return res.status(502).json({ error: '이미지를 가져오지 못했습니다.' })
    }

    const buf = Buffer.from(await upstream.arrayBuffer())
    const contentType = upstream.headers.get('content-type') || 'image/png'

    res.setHeader('Content-Type', contentType)
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
    return res.status(200).send(buf)
  } catch {
    return res.status(500).json({ error: '서버 오류가 발생했습니다.' })
  }
}
