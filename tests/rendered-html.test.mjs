import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the FNL concert page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>FNL — Friday Night Live<\/title>/i);
  assert.match(html, /FRIDAY NIGHT LIVE/);
  assert.match(html, /property="og:image" content="[^"]*\/og\.png\?v=20261021-fnl-r2"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /assets\/fnl\/stage\.webp/);
  assert.doesNotMatch(html, /assets\/fnl\/city-night\.webp/);
  assert.match(html, /fnl-curtain-left/);
  assert.match(html, /data-text="FRIDAY"/);
  assert.equal((html.match(/class="fnl-title-divider"/g) ?? []).length, 2);
  assert.doesNotMatch(html, /ONE NIGHT ONLY · 2026|>PRESENTS<|LIVE MUSIC · SEOUL/);
  assert.match(html, /class="fnl-schedule-board"/);
  assert.match(html, /LIVE 시작까지/);
  assert.match(html, /fnl-2026\.ics/);
  assert.match(html, /assets\/fnl\/logo-red\.webp/);
  assert.match(html, /Google Calendar/);
  assert.match(html, /calendar\.google\.com\/calendar\/render/);
  assert.match(html, /Apple · 기본 캘린더/);
  assert.match(html, /Outlook/);
  assert.match(html, /outlook\.live\.com\/calendar\/0\/deeplink\/compose/);
  assert.match(html, /fnl-admit-ticket/);
  assert.equal((html.match(/class="fnl-program-sheet(?: fnl-faq-sheet)?"/g) ?? []).length, 2);
  assert.match(html, />FNL<\/span>\s*<span>TICKET<\/span>/);
  assert.match(html, /Friday Night Live/);
  assert.match(html, /NEW RIVER와 24 Hz가 함께하는 12월의 금요일 밤입니다/);
  assert.doesNotMatch(html, /설명 추후 입력|공연설명 타이틀|설명 위치/);
  assert.doesNotMatch(html, />가안</);
  assert.match(html, /LINE UP/);
  assert.doesNotMatch(html, /오늘 밤의 두 팀/);
  assert.match(html, /2026\. 12\. 11\. FRI/);
  assert.match(html, /class="fnl-hero-meta"/);
  assert.match(html, /2026\.12\.11 FRI/);
  assert.match(html, /합정 001클럽/);
  assert.match(html, /18:30 입장/);
  assert.match(html, />관람 안내</);
  assert.match(html, /공연 시간·셋리스트/);
  assert.match(html, /모바일 빠른 메뉴/);
  assert.match(html, /001클럽 길찾기 ↗/);
  assert.match(html, /PLACE &amp; ACCESS/);
  assert.match(html, /장소 안내/);
  assert.match(html, /001클럽/);
  assert.match(html, /공연 셋리스트/);
  assert.match(html, /연주 순서는 공연 준비 상황에 따라 변경될 수 있습니다/);
  assert.match(html, /<details class="fnl-setlist">/);
  assert.doesNotMatch(html, /class="fnl-setlist" open/);
  assert.match(html, /전체 셋리스트/);
  assert.match(html, /눌러서 펼쳐보기/);
  assert.match(html, /셋리스트 접기/);
  assert.match(html, /원곡 듣기 ↗/);
  assert.doesNotMatch(html, /class="fnl-encore"|합동 앙코르곡|>ENCORE</);
  assert.doesNotMatch(html, /19:00 시작 · 가안|본공연 시작 · 가안/);
  assert.match(html, /사랑하게 될 거야/);
  assert.match(html, /OFFICIAL HIGE DANDISM/);
  assert.match(html, /https:\/\/www\.youtube\.com\/watch\?v=TQ8WlA2GXbk/);
  assert.doesNotMatch(html, /Official髭男dism/);
  assert.match(html, /노래는 불빛처럼 달린다/);
  assert.match(html, /유다빈밴드/);
  assert.match(html, /https:\/\/www\.youtube\.com\/watch\?v=NMrQlOg5Ouc/);
  assert.doesNotMatch(html, /2pAtQgjvsJ0|버전 확인 중/);
  assert.match(html, /Time Is Running Out/);
  assert.match(html, /21세기의 어떤 날/);
  assert.match(html, /LUCY/);
  assert.match(html, /https:\/\/www\.youtube\.com\/watch\?v=Rg42mGBDzzQ/);
  assert.match(html, /5,000원/);
  assert.match(html, /사전 예매/);
  assert.match(html, /현장 결제/);
  assert.match(html, /Instagram DM/);
  assert.match(html, /주차할 수 있나요\?/);
  assert.match(html, /네이버 길찾기/);
  assert.match(html, />카카오맵</);
  assert.match(html, /장소 안내 보기/);
  assert.match(html, /주소 복사/);
});

test("keeps the previous design available at /old/ without indexing it", async () => {
  const response = await render("/old");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /hero-water-guitar\.webp/);
  assert.match(html, /hero-instrument-guitar\.webp/);
  assert.match(html, /NEW RIVER와 24 Hz가 함께 만드는 겨울 합동공연입니다\./);
  assert.match(html, /name="robots" content="noindex, nofollow"/);
});

test("keeps internal planning material out of the public page", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /공개 승인 게이트|P0 — 공개 전에 반드시 결정/i);
});
