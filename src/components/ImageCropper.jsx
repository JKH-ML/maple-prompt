import { useEffect, useRef, useState } from 'react'

// 넥슨 이미지를 같은 출처 프록시로 우회 → 캔버스 오염(CORS) 방지
function proxied(url) {
  return `/api/image?url=${encodeURIComponent(url)}`
}

const MIN = 20 // 크롭 박스 최소 크기(px, 표시 기준)

export default function ImageCropper({ imageUrl }) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 }) // 표시 크기
  const [crop, setCrop] = useState(null) // { x, y, w, h } 표시 좌표
  const drag = useRef(null) // 현재 드래그 상태

  // 이미지 로드되면 크롭 박스를 가운데 60%로 초기화
  function onImgLoad() {
    const el = imgRef.current
    const w = el.clientWidth
    const h = el.clientHeight
    setImgSize({ w, h })
    setCrop({
      x: w * 0.2,
      y: h * 0.2,
      w: w * 0.6,
      h: h * 0.6,
    })
  }

  // 포인터 기반 드래그 (이동 또는 모서리/변 리사이즈)
  function startDrag(e, handle) {
    e.preventDefault()
    e.stopPropagation()
    drag.current = {
      handle, // 'move' | 'nw','ne','sw','se','n','s','e','w'
      startX: e.clientX,
      startY: e.clientY,
      orig: { ...crop },
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', endDrag)
  }

  function onMove(e) {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.startX
    const dy = e.clientY - d.startY
    const { w: IW, h: IH } = imgSize
    let { x, y, w, h } = d.orig

    if (d.handle === 'move') {
      x = clamp(x + dx, 0, IW - w)
      y = clamp(y + dy, 0, IH - h)
    } else {
      if (d.handle.includes('e')) w = clamp(w + dx, MIN, IW - x)
      if (d.handle.includes('s')) h = clamp(h + dy, MIN, IH - y)
      if (d.handle.includes('w')) {
        const nx = clamp(x + dx, 0, x + w - MIN)
        w += x - nx
        x = nx
      }
      if (d.handle.includes('n')) {
        const ny = clamp(y + dy, 0, y + h - MIN)
        h += y - ny
        y = ny
      }
    }
    setCrop({ x, y, w, h })
  }

  function endDrag() {
    drag.current = null
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerup', endDrag)
  }

  useEffect(() => endDrag, []) // 언마운트 시 정리

  // 흰 배경으로 크롭 영역을 잘라 PNG 다운로드
  function save() {
    const el = imgRef.current
    if (!el || !crop) return

    // 표시 크기 → 원본 픽셀 비율 변환
    const scaleX = el.naturalWidth / imgSize.w
    const scaleY = el.naturalHeight / imgSize.h

    const sx = crop.x * scaleX
    const sy = crop.y * scaleY
    const sw = crop.w * scaleX
    const sh = crop.h * scaleY

    const canvas = document.createElement('canvas')
    canvas.width = Math.round(sw)
    canvas.height = Math.round(sh)
    const ctx = canvas.getContext('2d')

    // 흰 배경 먼저 채우기 (투명 PNG → 흰 배경)
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(el, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height)

    canvas.toBlob((blob) => {
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `character_${canvas.width}x${canvas.height}.png`
      a.click()
      URL.revokeObjectURL(a.href)
    }, 'image/png')
  }

  // 저장될 실제 픽셀 크기 (안내용)
  const outSize =
    crop && imgRef.current
      ? {
          w: Math.round(crop.w * (imgRef.current.naturalWidth / imgSize.w)),
          h: Math.round(crop.h * (imgRef.current.naturalHeight / imgSize.h)),
        }
      : null

  const handles = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']

  return (
    <div className="cropper">
      <div className="cropper__stage" ref={wrapRef}>
        <img
          ref={imgRef}
          className="cropper__img"
          src={proxied(imageUrl)}
          alt="캐릭터"
          onLoad={onImgLoad}
          draggable={false}
        />

        {crop && (
          <div
            className="cropper__box"
            style={{
              left: crop.x,
              top: crop.y,
              width: crop.w,
              height: crop.h,
            }}
            onPointerDown={(e) => startDrag(e, 'move')}
          >
            {handles.map((h) => (
              <span
                key={h}
                className={`cropper__handle cropper__handle--${h}`}
                onPointerDown={(e) => startDrag(e, h)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="cropper__bar">
        {outSize && (
          <span className="cropper__size">
            {outSize.w} × {outSize.h} px
          </span>
        )}
        <button className="cropper__save" onClick={save}>
          잘라서 저장 (PNG)
        </button>
      </div>
    </div>
  )
}

function clamp(v, min, max) {
  return Math.min(Math.max(v, min), max)
}
