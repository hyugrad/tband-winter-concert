import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders the public concert skeleton", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>2026 NEW RIVER X 24 Hz 합동공연<\/title>/i);
  assert.match(html, /공연에 대한 자세한 이야기는 곧 공개합니다\./);
  assert.match(html, /property="og:image" content="[^"]*\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /hero-water-guitar\.webp/);
  assert.match(html, /hero-instrument-guitar\.webp/);
  assert.match(html, /hero-instrument-drum\.webp/);
  assert.match(html, /hero-instrument-microphone\.webp/);
  assert.match(html, /hero-instrument-synth\.webp/);
  assert.match(html, /hero-instrument-pedal\.webp/);
  assert.match(html, /hero-instrument-bass\.png/);
  assert.match(html, /공연 소개/);
  assert.match(html, /NEW RIVER와 24 Hz가 함께 만드는 겨울 합동공연입니다\./);
  assert.doesNotMatch(html, /설명 추후 입력|공연설명 타이틀|설명 위치/);
  assert.doesNotMatch(html, />가안</);
  assert.match(html, /밴드 소개/);
  assert.doesNotMatch(html, /두 개의 흐름/);
  assert.doesNotMatch(html, /signal-line/);
  assert.doesNotMatch(html, /section-kicker|ABOUT THE NIGHT|THE BANDS/);
  assert.match(html, /2026\. 12\. 11\. FRI/);
  assert.match(html, /class="hero-event-brief"/);
  assert.doesNotMatch(html, /class="hero-meta"/);
  assert.match(html, /공연장 안내/);
  assert.match(html, /001클럽/);
  assert.match(html, /공연 시간 &amp; 셋리스트/);
  assert.match(html, /<details class="setlist-shell">/);
  assert.doesNotMatch(html, /class="setlist-shell" open/);
  assert.match(html, /전체 셋리스트/);
  assert.match(html, /눌러서 보기/);
  assert.doesNotMatch(html, /class="encore-card"|합동 앙코르곡|>ENCORE</);
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
  assert.match(html, /5,000원/);
  assert.match(html, /사전 예매/);
  assert.match(html, /현장 결제/);
  assert.match(html, /Instagram DM/);
  assert.match(html, /주차할 수 있나요\?/);
});

test("keeps internal planning material out of the public page", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /공개 승인 게이트|P0 — 공개 전에 반드시 결정/i);
});
