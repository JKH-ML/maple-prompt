// ─────────────────────────────────────────────────────────────
//  프롬프트 게시글 데이터
//
//  새 게시글을 추가하려면 아래 배열에 객체 하나를 복사해서 붙여넣고
//  내용만 바꾸면 됩니다. id 는 서로 겹치지 않게 해주세요.
//
//  하나의 게시글 구조:
//  {
//    id:        고유 번호 (숫자, 중복 금지)
//    title:     제목
//    thumbnail: 썸네일 이미지 주소 (URL)
//    prompt:    프롬프트 본문 (여러 줄은 백틱 `` 안에 작성)
//    sourceUrl: 원문 링크
//    likes:     좋아요 초기 개수
//  }
// ─────────────────────────────────────────────────────────────

export const prompts = [
  {
    id: 2,
    title: '스티커 스타일',
    thumbnail: '/i1615608016.png',
    prompt: `다음 첨부된 그림을 참고하여 애니메이션 느낌의 캐릭터 콜라주 시트를 그려주세요.

스티커 시트 형식의 한 장의 일러스트로 그려주세요. 배경은 흰색으로 해주세요.

머리가 강조되고 몸집이 작은 SD스타일로 그려주세요. chibi스타일로 제작해주세요.

캐릭터 특징을 살려서 그려주세요. 머리스타일, 머리색깔, 머리모양, 머리길이, 앞머리모양, 눈모양, 눈색깔, 둥근뺨, 홍조, 전반적인 분위기, 의상, 악세사리들, 작은 손, 헐렁한 옷주름, simple한 다리, 얼굴 표정, 그 밖의 인상적인 특징

캐릭터의 정체성을 유지하면서 귀여운 애니메이션 느낌을 살려서 그려주세요.

캐릭터의 엉성한 비율을 유지하고, 캐릭터가 지닌 느낌을 표현해주세요.

윤곽을 드러내는 선은 최대한 깔끔하게 따주세요. 디지털 드로잉 기법으로 그려주세요. 그라데이션과 하이라이트는 부드럽게 처리해주세요.

여러가지 변형의 작은 캐릭터를 많이 그려주세요. 다양한 자세와 표정으로 그려주세요. 앉은 자세, 서있는 자세, 보는 사람에게 활이나 총을 겨누는 자세, 올려다 보는 자세, 손가락으로 브이 (✌️) 표시를 하는 자세, 그 외의 역동적인 자세, 웃는 표정, 우는 표정, 화난 표정, 당황한 표정, 삐진 표정, 그 외의 역동적인 표정으로 자세와 표정이 어우러지게 그려주세요. 어울리는 소품을 추가해주세요

캐릭터 주변에 낙서 느낌의 손글씨와 기호를 랜덤하게 배치해주세요. 낙서 내용은 간단하게 '뭐해?' '졸려' '사랑해' '배고파' '뭐먹지' '날씨 좋다' '기분 좋아' '삐졌어' 등의 일상 용어 또는 'smile' 'be happy' 'lucky' 등의 간단한 영단어로 해주세요. 기호는 단순한 선, 스마일 마크, 별, 하트, 물방울, 느낌표, 물음표, 음표, 얼굴 표정을 간단히 그린 이모티콘으로 랜덤하게 그려주세요. 아기자기한 분위기로 배치해주세요.

배경은 흰색 배경으로 해주세요. 전체적으로 한장의 조화로운 스티커 모음집처럼 구성해주세요.`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6554584',
    likes: 0,
  },

  {
    id: 3,
    title: 'SNS 크레파스 손그림 스타일',
    thumbnail: '/i1815284834.png',
    prompt: `첨부한 캐릭터 카드 이미지를 참고해서, 카드 전체 레이아웃과 정보 영역은 유지하고 중앙 캐릭터만 어린아이 크레파스 손그림 스타일로 변환해줘.

핵심 목표:
- 원본 카드의 틀, 배경색, 상단 로고, 하단 정보 영역, 텍스트, 숫자, 색상, 위치는 최대한 유지
- 카드에 적힌 캐릭터명, 직업명, 레벨, 월드명, 인기/점수 등 모든 정보는 원본 그대로 유지
- 중앙 캐릭터만 3~4살 아이가 크레파스로 보고 따라 그린 듯한 그림으로 바꾸기

중앙 캐릭터 표현:
- 원본 캐릭터의 머리색, 머리 모양, 의상 색, 장식, 무기, 리본, 모자, 포즈, 표정 등 핵심 특징은 알아볼 수 있게 유지
- 캐릭터를 너무 예쁘게 재해석하지 말고, 어린아이가 열심히 따라 그린 듯 단순하고 엉성하게 표현
- 얼굴은 동그랗고 단순하게
- 눈, 코, 입은 간단한 점과 선으로 표현
- 표정은 원본 캐릭터의 분위기를 단순하게 반영
- 머리카락은 세밀한 머릿결 없이 크레파스로 북북 칠한 덩어리처럼 표현
- 옷과 장식은 원본의 색과 큰 형태만 유지하고 삐뚤삐뚤하게 표현

그림체:
- 흰 종이에 크레파스 또는 오일파스텔로 직접 그린 듯한 질감
- 두껍고 거친 선
- 흔들리고 삐뚤삐뚤한 윤곽선
- 색칠이 선 밖으로 조금 삐져나간 느낌
- 빈틈이 보이는 러프한 채색
- 인체 비율은 일부러 어색하고 귀엽게
- 주변 반짝이, 이펙트, 장식은 아이가 그린 낙서처럼 단순화

피해야 할 것:
- 픽셀아트 느낌
- 정교한 디지털 일러스트
- 애니메이션풍 미화
- 깔끔한 선화
- 고퀄리티 캐릭터 일러스트
- 카드 레이아웃 변경
- 텍스트나 숫자 변경
- 특정 캐릭터명이나 특정 카드 정보에 맞춘 고정 표현

전체적으로 카드 UI는 원본처럼 깔끔하게 남기고, 중앙 캐릭터만 "무엇을 그리려 한 건지는 알겠는데 조금 엉망이고 귀여운" 어린아이 크레파스 손그림처럼 바꿔줘.`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6540283',
    likes: 0,
  },

  {
    id: 4,
    title: '다양한 포즈/표정 스케치(19)',
    thumbnail: '/i1870962622.png',
    prompt: `Use the attached reference image as the character reference.

Analyze and extract the person's main visual features: hairstyle, hair length, hair color, bangs, eye shape, eye color, facial impression, outfit, accessories, body proportions, and overall vibe.

Keep the person recognizable, but redraw them as an intentionally charming messy doodle collage character sheet.

ultra messy doodle collage, intentionally bad but cute drawing, chaotic sketchbook page, MS Paint mouse drawing aesthetic, rough scribbles, ugly-cute, charming amateur doodle, white background, low quality hand-drawn feeling, uneven anatomy, childish lineart, goofy proportions, awkward but adorable composition, pixel-ish roughness, messy coloring outside the lines, loose sketch strokes, ballpoint pen texture, colored pen sketch, notebook doodle vibe

multiple drawings of the same person across the canvas, character reference sheet, expression sheet, pose sheet, sticker sheet, doodle collage layout, many small variations of the same character,

large main portrait, full body standing pose, sitting pose, pointing at viewer, peace sign pose, close-up face, sleepy face, crying face, angry face, smug face, embarrassed face, chibi face, tiny mascot-like face, looking down at camera, dynamic perspective

convert the reference person into a cute anime-style doodle character, keep their distinctive features and fashion identity, soft blush, expressive eyes, simple cute face, rounded cheeks, slightly exaggerated cute proportions, small hands, simple legs, loose clothing folds, adorable imperfect sketch feeling

scribbled handwritten text

random doodles around the character: stars, hearts, arrows, speech bubbles, question marks, exclamation marks, barcode, tiny notes, emoji faces, "owo", "???", abstract scribbles, small mascot animal, messy symbols, color swatches

color palette based on the reference image, limited to 3–5 main colors, rough marker coloring, sketchy hatching, visible pen strokes, white empty background with scattered doodles, cute chaotic energy, charming messy collage, playful personality`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6552944',
    likes: 0,
  },

  {
    id: 5,
    title: 'AI 커미션',
    thumbnail: '/i1101035447.jpg',
    prompt: `업로드한 피사체를 바탕으로 요즘 유행하는 애니메이션 아트 스타일 이미지를 만들어줘. 약간씩 균일하지 않은 부분이 있는 과감한 line-work에 flat shadow shapes가 들어가는 최소한의 cel shading을 적용해줘. 밝고 채도 높은 색, 깔끔하고 그래픽적인 조명을 사용해. 스타일은 만화 캐릭터 같은 exaggerated proportions로 하고, 폭넓은 감정을 담을 수 있도록 이목구비가 단순하면서도 표현력 높으면서 해부학적으로 다양하게 늘어나게 해. 배경은 살짝 뒤틀린 공간으로 바꿔줘. 장난스러운 perspective distortion에 사물들을 단순화시켜. 완전히 양식화된 비현실적 세계에서 활기차고 생동감 있으면서 코믹한 느낌이 나는 구도와 분위기를 만들어줘.

- 절대 하면 안되는 것
보라색 배경 X, 화질깨짐 X`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6555547',
    likes: 0,
  },

  {
    id: 6,
    title: '인생네컷',
    thumbnail: '/i1438969798.png',
    prompt: `Korean photobooth strip (인생네컷 aesthetic), realistic Korean self-photo studio frame design, vertical photo strip layout, 4 cut frame, soft cream or black photobooth border, tiny Korean timestamp, cute Korean sticker decorations.

Inside each frame: SD/chibi anime character with oversized head and tiny body, expressive poses and emotions, maintaining recognizable identity.

Different poses: standing, finger heart, peace sign, looking upward, playful pointing pose
Expressions: smiling, shy blush, annoyed, sleepy

Add Korean handwritten doodles around the border:
"오늘 기분 최고"
"뭐먹지?"
"졸려..."
"행복해"

Cute accidental photobooth feeling, slightly awkward pose composition, Korean trendy photobooth atmosphere, soft lighting, clean anime rendering, white background.

Korean photobooth aesthetic, life four cuts, self photo studio vibe, photoism style, photomatic vibe, trendy Korean sticker decoration, Korean Gen-Z aesthetic`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6555823',
    likes: 0,
  },

  {
    id: 7,
    title: '아기자기 AI 커미션',
    thumbnail: '/i1659870602.png',
    prompt: `다음 참조된 이미지를 참고하여 애니메이션 느낌의 그림을 그려주세요.

참조된 이미지의 캐릭터 특징을 살려서 그려주세요 : hairstyle, 머리 색깔, 앞머리 모양, 머리 길이, 눈매, 눈 색깔, 둥근 뺨, 홍조, 악세서리들, 의상, 옷주름, 그 외의 전반적인 특징과 캐릭터의 분위기

참조된 이미지의 캐릭터에 주로 사용된 색채를 3~5가지 정도로 제한하고, 그 제한된 색채와 유사한 색을 가진 소품을 캐릭터 주변에 배치해주세요. 아기자기한 소품으로 구성해주세요. 캐릭터와 어울리는 소품으로 구성해주세요. 화면에 가득차게 구성해주세요.

배경은 어울리는 자연풍경이나 실내환경으로 그려주세요. 캐릭터는 그림 중앙에 배치해주세요. 캐릭터의 자세는 역동적으로 그려주세요. 앉아 있는 자세, 내려다 보는 자세, 올려다 보는 자세, 엎드린 자세, 서 있는 자세, 뛰는 자세, 걷는 자세 등. 캐릭터의 표정은 자세와 어울리는 표정으로 그려주세요. 졸린 표정, 웃는 표정, 찡그린 표정, 윙크하는 표정, 우는 표정, 무표정 등.

금지 : 정면을 바라보고 있는 차렷자세

금지 : 하얀색 배경`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6560652',
    likes: 0,
  },

  {
    id: 8,
    title: '프로필 사진',
    thumbnail: '/i1591208598.png',
    prompt: `Use the uploaded character image as the reference.

IMPORTANT:
Do not recreate a fixed default character.
The final result must adapt dynamically to the uploaded character's identity, colors, outfit, accessories, mood, and overall personality.

Analyze and preserve the uploaded character's core identity:
- hairstyle
- hair length
- bangs
- hair texture
- dominant hair color
- eye shape
- eye style
- facial vibe
- skin tone
- outfit identity
- upper-body outfit details
- neckline, collar, ribbon, tie, sleeves, shoulder details
- accessories
- decorative elements
- overall personality and atmosphere

Create a clean anime-style chibi profile icon suitable for:
KakaoTalk,
Discord,
game community profile,
SNS profile picture.

STYLE:
clean 2D anime rendering,
cute chibi proportions,
large expressive face,
small upper body,
smooth bold line art,
minimal cel shading,
soft glossy highlights,
high readability at small size,
modern Korean anime profile icon aesthetic,
sticker-like finish,
soft rounded shapes,
simple but polished composition.

COMPOSITION:
Show ONLY the character's head, face, shoulders, and upper chest.
The final image must be a close-up half-body / bust portrait.
Do not show full body.
Do not show legs.
Do not show feet.
Do not show the entire outfit from head to toe.

The face should be the main focus.
The upper-body outfit details should be visible enough to preserve the original character identity.
Use a profile-icon friendly crop.

CIRCLE FRAMING:
The character must stay completely inside the pastel circular background.
The entire head, hair, accessories, shoulders, hands, and sticker outline must be fully contained within the circular background.
Leave a clear safe margin between the character and the edge of the circle.
No part of the character should touch, overlap, or go outside the circular background.
No hair, hat, accessory, hand, shoulder, or outline should extend beyond the circle.
The circular background should frame the character like a neat profile icon badge.
Keep the character slightly smaller if necessary to fit fully inside the circle.
The final composition should look clean, balanced, and neatly contained.

EXPRESSION:
The expression MUST adapt naturally to the uploaded character instead of repeating the same face every time.

Possible moods include:
- sleepy
- smug
- shy
- annoyed
- playful
- relaxed
- embarrassed
- cheerful
- emotionally tired
- cool and expressionless
- soft smiling
- teasing
- awkwardly cute

Avoid generating the exact same expression for different characters.

POSE:
Use a simple upper-body pose that fits a profile icon.

Possible examples:
- resting cheek on one hand
- slightly tilted head
- looking away from camera
- side glance
- small shrug
- leaning forward slightly
- relaxed shoulders
- sleepy slouch
- subtle peace sign near the chest
- holding a small accessory near the chest
- slightly puffed cheeks
- crossed arms cropped at chest level
- hand near mouth

Avoid identical pose repetition.
Avoid full-body poses.
Avoid wide poses that push the character outside the circle.

BACKGROUND:
white outer background,
one large soft pastel circular shape behind the character,
minimal decorative doodles inside the circle only.

IMPORTANT:
The background color palette MUST be generated dynamically from:
- the uploaded character's outfit colors
- hair tones
- accessory colors
- decorative accents
- overall mood

The background should harmonize naturally with the character instead of using a fixed color.

The crop must be from the top of the head to the upper chest only, like a KakaoTalk profile icon bust portrait.
The entire portrait must remain inside the circular background with comfortable spacing.

DOODLES:
tiny stars,
small dots,
minimal sparkles,
soft scribbles,
small geometric doodles,
tiny puffs,
cute simple symbols.

Doodles should stay subtle and inside the circle.
Do not let doodles or decorations extend outside the circle.

COLOR RULE:
Use a limited palette derived naturally from the uploaded character itself.
Keep the colors soft, cohesive, pastel-toned, and visually clean.

STYLE GOAL:
The final image should feel like a polished trendy anime profile icon commonly used in modern Korean game communities and SNS profiles.

IMPORTANT:
Only one character.
No duplicate versions.
No extra mini characters.
No full body.
No legs.
No feet.
No text.
No speech bubbles.
No watermark.
No weapon.
No magic circle.
No halo.
No wings.
No realistic rendering.
No cluttered background.
No blurry quality.
No broken anatomy.
No heavy effects.
No over-detailed rendering.
No image artifacts.
Do not use the same pose every time.
Do not use the same expression every time.
Dynamic based on uploaded character.

STRICT NEGATIVE:
character outside the circle,
hair outside the circle,
accessory outside the circle,
hat outside the circle,
hands outside the circle,
shoulders outside the circle,
sticker outline outside the circle,
cropped-off head,
cropped-off hair,
circle hidden behind oversized character,
oversized face touching the circle edge,
unbalanced framing.`,
    sourceUrl: 'https://m.inven.co.kr/board/maple/5974/6570621',
    likes: 0,
  },

  {
    id: 9,
    title: '디스코드 헤더',
    thumbnail: '/i1705856313.png',
    prompt: `Use the uploaded character image as the reference. Redraw the character as a clean 2D SD / chibi anime illustration, not a 3D render. Create a simple Discord header banner in 1100x440.

Only ONE chibi character should appear in the entire image. No duplicate, mini version, sticker version, or extra character.

Preserve the character's hairstyle, hair color, eye color, outfit, existing accessories, and overall vibe. Do not heavily redesign the outfit. Do not add many new ornaments or accessories.

Remove any weapon completely. Do not include any weapon, staff, sword, halo, magic circle, glowing ring, or back ornament.

Use a soft everyday slice-of-life concept, not a luxurious or fantasy-rich mood. Choose one simple daily-life outdoor or indoor scene such as: yacht outing, picnic, flower field, seaside walk, sitting on the grass, cafe terrace, window-side rest, or peaceful room scene.

Keep the composition simple, airy, and clean. The character does not need to be full body; upper body, half body, or a simple seated pose is fine.

Do not make the character look at the camera. Avoid direct eye contact. Make the character look like they are naturally enjoying the moment. Avoid hand-near-face poses. Keep the hands relaxed on the lap, beside the body, on a seat, railing, grass, or cushion.

Use clean line art, simple shapes, very light cel shading, and a soft limited color palette based on the character. Keep the background minimal and supportive. Make the result cute, soft, minimal, and clearly 2D.`,
    sourceUrl: 'https://m.inven.co.kr/board/maple/5974/6565223',
    likes: 0,
  },

  {
    id: 10,
    title: '유리 얼빡샷',
    thumbnail: '/i1341990297.png',
    prompt: `Use the uploaded character image as the main character reference.

Analyze and preserve the character's key visual identity:
hairstyle, hair length, hair color, bangs, eye shape, eye color, facial impression, accessories, outfit hints, color palette, and overall personality.

Redraw the character as an ultra-cute 2D anime illustration that strongly mixes Japanese SD chibi style with soft shoujo manga charm.

MAIN COMPOSITION:
Create an extreme close-up face shot in a square 1:1 composition.
The character's face should fill almost the entire frame in an exaggerated, adorable way.
The character is turning their face slightly to one side and pressing one cheek firmly and completely against a glass window or transparent surface, as if they are desperately trying to get a better look at something irresistible beyond the glass.
Because of the side angle, the pressed cheek should make wide, strong contact with the glass and look extremely flattened, squished, spread outward, and adorably compressed.
The other cheek should remain extra round, fluffy, soft, puffy, and unsquished, creating a very strong asymmetrical contrast.

HANDS AND POSE:
Show both hands clearly.
Both palms should be pressed directly against the glass near the face, with the fingers spread slightly and flattened a little by the pressure.
The pose should feel like the character is sticking themselves to the glass as closely as possible in a clingy, eager, silly, and lovable way.

EXPRESSION:
Make the expression extra adorable, goofy, and absorbed.
The eyes should be huge, sparkling, wide, and filled with intense curiosity, as if the character is completely fascinated by something on the other side of the glass.
The mouth should hang open in a soft, silly, absentminded "hehehe / ooh..." way.
Add a small string or drop of drool coming from the slightly open mouth to make the expression look even more cute, shameless, and distracted.
The overall expression should feel irresistibly cute, curious, and a little silly.

IMPORTANT FACE DESIGN:
Strongly exaggerate the cheeks.
Make both cheeks extremely soft, puffy, mochi-like, marshmallow-like, and baby-like.
The pressed cheek must look especially big, squished, flattened, and spread against the glass.
The unpressed cheek should look extra round and plush.
Make the face very short, round, soft, youthful, and chubby in a classic cute SD chibi way.
The cheeks should be one of the biggest and most eye-catching features in the image.

STYLE MIX:
Blend these two style qualities together:

1. SD chibi style:
oversized head, baby-like proportions, simplified tiny features, extremely cute and exaggerated facial proportions

2. Shoujo style:
delicate line art, glossy sparkling eyes, soft blush, dreamy sweetness, gentle emotional charm, pastel softness

The final result should feel like:
an ultra-kawaii Japanese SD chibi character with dreamy shoujo manga sweetness.

ART STYLE:
pure 2D illustration, Japanese anime style, SD chibi + shoujo hybrid, ultra-cute kawaii rendering, clean delicate line art, rounded face shapes, enormous sparkling anime eyes, tiny nose, tiny mouth, blush-heavy cheeks, soft pastel coloring, polished cel-shaded anime rendering, dreamy and fluffy shoujo atmosphere.
Keep it clearly 2D, not realistic, not semi-realistic, not painterly, not 3D.

OPTIONAL GLASS EFFECTS:
Add subtle but cute glass effects such as soft reflections, faint smudges, slight sheen, or delicate highlights where the cheek and palms press against the transparent surface.
These effects should help sell the "pressed to glass" feeling without distracting from the face.

FRAMING:
extreme close-up,
very tight crop,
face fills the frame,
head turned slightly to one side,
one cheek strongly pressed against the glass,
both palms pressed visibly against the glass,
minimal neck or body visible,
cute and intimate face-smushed composition.

BACKGROUND:
simple white or soft pastel background,
no scenery,
no complex background elements,
keep full focus on the face, palms, and pressed-against-glass situation.

OUTPUT:
1:1 aspect ratio.

Negative prompt:
photorealistic, semi-realistic, realistic painting, 3D render, painterly style, full body, distant shot, both cheeks equally squished, flat cheeks, sharp jawline, mature face, boring expression, low emotion, dark mood, complex background, extra characters, text, captions, speech bubbles, messy composition`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6585346',
    likes: 0,
  },

  {
    id: 11,
    title: '핸즈짤 특화 프롬프트',
    thumbnail: '/i1110027587.png',
    prompt: `Use the attached character image as the character reference.

IMPORTANT:
The original outfit/design from the reference character must be preserved and adapted into the final illustration.
Maintain the character's original clothing identity, including:
- outfit type
- colors
- accessories
- sleeves
- ribbons
- shoes
- patterns
- fantasy/game-style details
- class/job aesthetics
- ornaments
- iconic silhouette

You may stylize or slightly modernize the outfit to fit the profile-card presentation,
but it must still clearly look like the same original costume.

Analyze and preserve the character's core identity:
hairstyle,
hair length,
bangs,
eye shape,
eye color,
facial expression style,
original outfit motif,
accessories,
body proportions,
silhouette,
and overall personality vibe.

Then redesign the character into a clean anime "character profile board / scrapbook card" illustration in the exact format and composition style of a trendy Japanese SNS-style profile sheet.

STYLE:
soft anime rendering,
clean lineart,
polished cel shading,
pastel-highlighted colors,
bright cheerful atmosphere,
highly readable layout,
modern Japanese character profile card aesthetic,
slightly glossy eyes,
smooth gradient hair highlights,
youthful energetic mood

LAYOUT:
large centered half-body portrait as the main focus,
multiple smaller side panels showing alternate expressions and poses,
profile-sheet composition,
decorative handwritten notes,
cute stickers,
doodles,
stars,
hearts,
mini icons,
small speech bubble,
barcode-like decoration,
personality notes section,
likes/dislikes section,
color palette swatches,
character stats section

BACKGROUND:
white paper-like background with dark navy border framing,
scrapbook / notebook page feeling,
clean organized UI-style arrangement,
small tape corners and memo boxes,
minimal clutter but visually dense enough to feel like a real fandom profile card

TEXT STYLE:
all text should look handwritten or stylized like a Korean fandom character sheet,
replace all placeholder text dynamically to match the inserted character's theme and personality,
include:
- character nickname
- club/team/faction
- favorite things
- personality traits
- signature color palette
- role/class/title

SMALL PANELS:
include:
- cute chibi version
- cheering pose
- pointing pose
- smiling pose
- wink expression
- energetic pose
- mascot-like mini version

COLOR DESIGN:
adapt the entire palette to match the character's dominant colors,
harmonized accent colors,
soft pastel contrast,
high readability,
anime merchandise aesthetic,
cohesive UI-style color design

EXPRESSION:
friendly,
bright,
adorable,
slightly competitive,
confident but cute

VERY IMPORTANT:
The character must remain instantly recognizable as the original reference character.
The outfit must faithfully reflect the original design instead of becoming a default sports uniform.

masterpiece,
best quality,
anime profile sheet,
Korean scrapbook aesthetic,
character introduction card,
clean composition,
cute modern anime design,
highly detailed face,
glossy anime eyes,
decorative typography,
collectible character card feeling`,
    sourceUrl: 'https://www.inven.co.kr/board/maple/5974/6562230',
    likes: 0,
  },

  {
    id: 12,
    title: 'chibi anime',
    thumbnail: '/i1118144066.png',
    prompt: `SD chibi anime girl, oversized head, tiny body, long platinum blonde twin tails, huge pastel pink ribbon, flat pastel colors, minimal cel shading, thick clean outlines, simple anime face, half-lidded pink eyes, tiny mouth, sleepy annoyed expression, bratty cute vibe, emotionless expression, kawaii web animation aesthetic, low detail facial features, soft pink and cream palette, cute sticker-like composition, Japanese chibi animation style, plain soft background`,
    sourceUrl: 'https://m.inven.co.kr/board/maple/5974/6587352',
    likes: 0,
  },
]
