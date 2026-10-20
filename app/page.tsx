/* eslint-disable @next/next/no-img-element -- Static export serves supplied artwork without runtime optimization. */
import { bands, encore, event, setlists } from "./content";
import { ScrollExperience } from "./scroll-experience";

const faqs = [
  {
    question: "입장 및 신청은 어떻게 하나요?",
    answer:
      "관람료는 1인 5,000원이며 사전 예매와 현장 결제가 모두 가능합니다. 사전 예매 링크와 현장 결제 수단은 추후 안내합니다.",
  },
  {
    question: "공연 촬영이 가능한가요?",
    answer:
      "관객 촬영 범위와 공식 영상 공개 여부를 협의 중입니다. 공연 전 최종 안내를 확인해 주세요.",
  },
  {
    question: "주차할 수 있나요?",
    answer:
      "001클럽에는 전용 주차 공간이 없습니다. 합정역 2번 출구에서 도보 약 4분 거리이므로 대중교통 이용을 권장합니다.",
  },
  {
    question: "음식물을 가져갈 수 있나요?",
    answer: "공연장 안내에 따라 생수를 제외한 음식물은 반입할 수 없습니다.",
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const songCount = setlists.reduce(
    (total, group) => total + group.songs.length,
    0,
  );

  return (
    <div className="fnl-page">
      <a className="fnl-skip-link" href="#main">
        본문으로 바로가기
      </a>

      <header className="fnl-header">
        <a className="fnl-wordmark" href="#top" aria-label="페이지 맨 위로">
          <img
            src={`${basePath}/assets/fnl/logo-white.webp`}
            alt="FNL"
            width="1100"
            height="1000"
          />
          <span>FRIDAY NIGHT LIVE</span>
        </a>
        <nav className="fnl-nav" aria-label="주요 메뉴">
          <a href="#about">공연</a>
          <a href="#bands">출연</a>
          <a href="#setlist">셋리스트</a>
          <a href="#ticket">관람</a>
          <a href="#venue">장소</a>
        </nav>
      </header>
      <ScrollExperience heroSelector=".fnl-hero" navSelector=".fnl-nav" />

      <main id="main" tabIndex={-1}>
        <section className="fnl-hero" id="top" aria-labelledby="fnl-hero-title">
          <img
            className="fnl-stage-image"
            src={`${basePath}/assets/fnl/stage.webp`}
            alt=""
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="fnl-stage-shade" aria-hidden="true" />

          <div className="fnl-hero-content">
            <p className="fnl-broadcast-label">ONE NIGHT ONLY · 2026</p>
            <div className="fnl-marquee">
              <span className="fnl-bulbs" aria-hidden="true" />
              <img
                src={`${basePath}/assets/fnl/logo-red.webp`}
                alt="FNL"
                width="1100"
                height="1000"
                className="fnl-hero-logo"
              />
              <h1 id="fnl-hero-title">FRIDAY NIGHT LIVE</h1>
            </div>

            <p className="fnl-hero-cast">NEW RIVER <i>×</i> 24 Hz</p>
            <div className="fnl-hero-meta" aria-label="공연 주요 정보">
              <time dateTime="2026-12-11">DEC 11 · FRI</time>
              <span aria-hidden="true">/</span>
              <strong>{event.start}</strong>
              <span aria-hidden="true">/</span>
              <strong>{event.venue}</strong>
            </div>

            <div className="fnl-hero-actions">
              <a href="#setlist">SHOW RUNDOWN</a>
              <a href="#ticket">관람 안내</a>
            </div>
          </div>

          <div className="fnl-curtain fnl-curtain-left" aria-hidden="true">
            <span />
          </div>
          <div className="fnl-curtain fnl-curtain-right" aria-hidden="true">
            <span />
          </div>
          <a className="fnl-scroll-cue" href="#about" aria-label="공연 소개로 이동">
            <span>SCROLL FOR TONIGHT&apos;S SHOW</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="fnl-section fnl-about" id="about">
          <div className="fnl-section-label">
            <span>01</span>
            <p>OPENING MONOLOGUE</p>
          </div>
          <div className="fnl-about-grid">
            <div className="fnl-about-copy">
              <p className="fnl-overline">THIS FRIDAY NIGHT</p>
              <h2>두 밴드가 만드는<br />한 번뿐인 라이브</h2>
              <p>
                NEW RIVER와 24 Hz가 함께 만드는 겨울 합동공연입니다.
                공연에 대한 자세한 이야기는 준비되는 대로 공개합니다.
              </p>
              <dl className="fnl-date-lockup">
                <div>
                  <dt>DATE</dt>
                  <dd>2026. 12. 11. FRI</dd>
                </div>
                <div>
                  <dt>ON AIR</dt>
                  <dd>{event.start}</dd>
                </div>
              </dl>
            </div>
            <figure className="fnl-poster-frame">
              <img
                src={`${basePath}/assets/fnl/city-night.webp`}
                alt="도시의 밤을 배경으로 한 Friday Night Live 포스터"
                width="813"
                height="1100"
                loading="lazy"
                decoding="async"
              />
              <figcaption>SEOUL · HAPJEONG · LIVE</figcaption>
            </figure>
          </div>
        </section>

        <section className="fnl-section fnl-bands" id="bands">
          <div className="fnl-section-label fnl-section-label-light">
            <span>02</span>
            <p>TONIGHT&apos;S LINE-UP</p>
          </div>
          <div className="fnl-section-heading">
            <p>LIVE GUESTS</p>
            <h2>오늘 밤의 두 팀</h2>
          </div>

          <div className="fnl-band-grid">
            {bands.map((band, index) => (
              <article className="fnl-band-card" key={band.id}>
                <div className="fnl-band-card-top">
                  <span>GUEST {String(index + 1).padStart(2, "0")}</span>
                  <span>LIVE</span>
                </div>
                <div className="fnl-band-logo-wrap">
                  <img
                    src={`${basePath}${band.logo}`}
                    alt={`${band.name} 로고`}
                    width={band.logoWidth}
                    height={band.logoHeight}
                    loading="lazy"
                    decoding="async"
                    className={`fnl-band-logo fnl-band-logo-${band.id}`}
                  />
                </div>
                <div className="fnl-band-card-copy">
                  <h3>{band.name}</h3>
                  <p>{band.description}</p>
                  <span>멤버 소개 · 추후 공개</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fnl-section fnl-rundown" id="setlist">
          <div className="fnl-section-label">
            <span>03</span>
            <p>SHOW RUNDOWN</p>
          </div>
          <div className="fnl-section-heading fnl-section-heading-dark">
            <p>LIVE CUE SHEET</p>
            <h2>공연 시간 &amp; 셋리스트</h2>
            <span>시간과 곡 순서는 준비 과정에서 변경될 수 있습니다.</span>
          </div>

          <div className="fnl-timeline" aria-label="공연 시간표">
            <div>
              <time dateTime="2026-12-11T18:30:00+09:00">{event.doors}</time>
              <span>DOORS OPEN</span>
            </div>
            <div className="fnl-timeline-live">
              <time dateTime="2026-12-11T19:00:00+09:00">{event.start}</time>
              <span>LIVE START</span>
            </div>
            <div>
              <time dateTime="2026-12-11T21:30:00+09:00">{event.expectedEnd}</time>
              <span>EXPECTED END</span>
            </div>
          </div>

          <details className="fnl-setlist">
            <summary>
              <span className="fnl-setlist-no">RUN OF SHOW</span>
              <span>
                <strong>전체 셋리스트</strong>
                <small>눌러서 펼쳐보기</small>
              </span>
              <span className="fnl-setlist-count">{songCount} SONGS</span>
              <i aria-hidden="true" />
            </summary>
            <div className="fnl-setlist-content">
              {setlists.map((group, groupIndex) => (
                <section className="fnl-setlist-group" key={group.id}>
                  <header>
                    <span>{String(groupIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{group.band}</h3>
                      <p>{group.label}</p>
                    </div>
                    <small>{group.songs.length} SONGS</small>
                  </header>
                  <ol>
                    {group.songs.map((song, songIndex) => (
                      <li key={`${group.id}-${song.title}`}>
                        <span>{String(songIndex + 1).padStart(2, "0")}</span>
                        <div>
                          <strong>{song.title}</strong>
                          <small>{song.artist}</small>
                        </div>
                        {song.note && <em>{song.note}</em>}
                        <a
                          href={song.youtube}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${song.title} 공식 YouTube 영상 새 창에서 보기`}
                        >
                          YOUTUBE ↗
                        </a>
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
              {encore.isPublic && (
                <p className="fnl-encore">{encore.band} · {encore.description}</p>
              )}
            </div>
          </details>
        </section>

        <section className="fnl-section fnl-ticket" id="ticket">
          <div className="fnl-section-label fnl-section-label-light">
            <span>04</span>
            <p>BOX OFFICE</p>
          </div>
          <div className="fnl-ticket-grid">
            <div className="fnl-ticket-intro">
              <p>ADMIT ONE</p>
              <h2>관람 안내</h2>
              <strong>{event.ticketPrice}</strong>
              <span>1인 관람료</span>
            </div>
            <div className="fnl-ticket-stub">
              <div>
                <span>BOOKING</span>
                <strong>{event.ticketMethods.join(" · ")}</strong>
                <p>사전 예매 방법과 현장 결제 수단은 확정되는 대로 안내합니다.</p>
                <small>{event.reservationStatus}</small>
              </div>
              <div>
                <span>CONTACT</span>
                <strong>{event.inquiryChannel}</strong>
                <p>공연과 관람에 관한 문의 채널입니다. 계정 링크는 추후 연결됩니다.</p>
                <small>{event.inquiryStatus}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="fnl-section fnl-venue" id="venue">
          <div className="fnl-section-label fnl-section-label-light">
            <span>05</span>
            <p>TONIGHT&apos;S STUDIO</p>
          </div>
          <div className="fnl-venue-grid">
            <div className="fnl-venue-title">
              <p>{event.dateLabel}</p>
              <h2>{event.venue}</h2>
              <address>{event.address}</address>
              <div className="fnl-venue-actions">
                <a href={event.mapUrl} target="_blank" rel="noreferrer">네이버 지도 ↗</a>
                <a href={event.kakaoMapUrl} target="_blank" rel="noreferrer">카카오맵 ↗</a>
                <a href={event.venueGuideUrl} target="_blank" rel="noreferrer">공식 사이트 ↗</a>
              </div>
            </div>
            <dl className="fnl-venue-facts">
              <div><dt>지하철</dt><dd>합정역 2번 출구에서 도보 약 4분</dd></div>
              <div><dt>주차</dt><dd>전용 주차 공간 없음</dd></div>
              <div><dt>안내</dt><dd>생수 외 음식물 반입 불가</dd></div>
            </dl>
          </div>
        </section>

        <section className="fnl-section fnl-guide" id="guide">
          <div className="fnl-section-label">
            <span>06</span>
            <p>HOUSE RULES</p>
          </div>
          <div className="fnl-section-heading fnl-section-heading-dark">
            <p>BEFORE THE SHOW</p>
            <h2>자주 묻는 질문</h2>
          </div>
          <div className="fnl-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{faq.question}</strong>
                  <i aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="fnl-footer">
        <img
          src={`${basePath}/assets/fnl/logo-white.webp`}
          alt="FNL"
          width="1100"
          height="1000"
        />
        <div>
          <strong>FRIDAY NIGHT LIVE</strong>
          <p>NEW RIVER × 24 Hz · 2026.12.11 · {event.venue}</p>
          <small>현재 페이지는 공연 준비를 위한 초안이며 일부 내용은 변경될 수 있습니다.</small>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
