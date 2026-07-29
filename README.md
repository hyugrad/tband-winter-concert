# NEW RIVER X 24 Hz 합동공연

2026년 12월 11일 합정 001클럽에서 열리는 합동공연의 모바일 우선 안내 페이지입니다.

## 현재 상태

- 모바일·데스크톱 반응형 초안
- 키 비주얼 방향: `River at 24Hz`
- 관람료 5,000원, 사전 예매 및 현장 결제
- 최종 공연명, 예매 링크, 멤버 정보, 앙코르 등은 미정
- 공개 주소: `https://hyugrad.github.io/tband-winter-concert/`

공개 저장소에는 페이지에 실제로 노출할 수 있는 정보만 둡니다. 계약, 대관 비용, 연락처, 내부 일정과 제작 메모는 별도 private 저장소에서 관리합니다.

## 로컬 실행

Node.js `22.13.0` 이상이 필요합니다.

```bash
npm install
npm run dev
```

기본 로컬 주소는 `http://localhost:3000`입니다.

## 검증

```bash
npm run build
npm test
npm run build:pages
npm run audit:prod
```

## 주요 파일

- `app/page.tsx`: 한 페이지 공연 안내 구조
- `app/content.ts`: 공개 공연 정보와 셋리스트
- `app/globals.css`: 모바일 우선 디자인과 반응형 규칙
- `public/assets/`: 웹 공개용 로고와 이미지

## 공개 전 확인

- 최종 공연명과 관람 방식
- 입장 및 종료 시각
- 로고·사진 공개 승인
- 공개 URL의 GitHub 계정명 노출 허용 여부
- public 저장소에 민감정보가 없는지 최종 검사

## GitHub Pages

정적 배포용 워크플로는 수동 실행만 허용합니다. 따라서 저장소에 푸시만 해서는 공개 페이지가 자동 갱신되지 않습니다.

공개본을 갱신할 때 저장소의 `Actions`에서 `Publish concert site` 워크플로를 수동 실행합니다.
