// ─────────────────────────────────────────────────────────────
//  Vercel 서버리스 함수: 캐릭터 닉네임 → 이미지
//
//  넥슨 OpenAPI 키는 절대 브라우저에 노출되면 안 됩니다.
//  이 함수는 서버에서만 실행되므로 키가 안전하게 보호됩니다.
//
//  키는 Vercel 프로젝트 설정 > Environment Variables 에
//  NEXON_API_KEY 라는 이름으로 넣어주세요.
//
//  호출 예: /api/character?name=캐릭터닉네임
// ─────────────────────────────────────────────────────────────

const BASE = 'https://open.api.nexon.com/maplestory/v1'

export default async function handler(req, res) {
  const name = (req.query.name || '').trim()
  const apiKey = process.env.NEXON_API_KEY

  if (!apiKey) {
    return res.status(500).json({ error: 'API 키가 설정되지 않았습니다.' })
  }
  if (!name) {
    return res.status(400).json({ error: '캐릭터 닉네임을 입력해주세요.' })
  }

  const headers = { 'x-nxopen-api-key': apiKey }

  try {
    // 1) 닉네임 → ocid 조회
    const idRes = await fetch(
      `${BASE}/id?character_name=${encodeURIComponent(name)}`,
      { headers },
    )
    if (!idRes.ok) {
      return res
        .status(404)
        .json({ error: '캐릭터를 찾을 수 없습니다.' })
    }
    const { ocid } = await idRes.json()

    // 2) ocid → 기본정보(이미지 포함) 조회
    const basicRes = await fetch(
      `${BASE}/character/basic?ocid=${ocid}`,
      { headers },
    )
    if (!basicRes.ok) {
      return res
        .status(502)
        .json({ error: '캐릭터 정보를 가져오지 못했습니다.' })
    }
    const data = await basicRes.json()

    // 살짝 캐싱 (10분) — 같은 닉네임 반복 조회 시 넥슨 호출 절감
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')

    return res.status(200).json({
      name: data.character_name,
      image: data.character_image,
      level: data.character_level,
      job: data.character_class,
      world: data.world_name,
    })
  } catch (err) {
    return res.status(500).json({ error: '서버 오류가 발생했습니다.' })
  }
}
