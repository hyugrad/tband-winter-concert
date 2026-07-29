/* eslint-disable @next/next/no-img-element -- Static export serves the original band logos without a runtime image optimizer. */
import { bands, event, setlists } from "./content";
import { ScrollExperience } from "./scroll-experience";

const heroInstruments = [
  { id: "guitar", file: "hero-instrument-guitar.webp", width: 465, height: 730 },
  { id: "drum", file: "hero-instrument-drum.webp", width: 439, height: 377 },
  {
    id: "microphone",
    file: "hero-instrument-microphone.webp",
    width: 233,
    height: 404,
  },
  { id: "synth", file: "hero-instrument-synth.webp", width: 489, height: 399 },
  { id: "pedal", file: "hero-instrument-pedal.webp", width: 282, height: 319 },
  { id: "bass", file: "hero-instrument-bass.png", width: 640, height: 960 },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <>
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="페이지 맨 위로">
          <span className="wordmark-tape">NR × 24</span>
        </a>
        <nav className="site-nav" aria-label="주요 메뉴">
          <a href="#about">공연</a>
          <a href="#bands">팀</a>
          <a href="#setlist">셋리스트</a>
          <a href="#ticket">관람</a>
          <a href="#venue">장소</a>
        </nav>
      </header>
      <ScrollExperience />

      <main id="main" tabIndex={-1}>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <img
              className="hero-water-image"
              src={`${basePath}/hero-water-guitar.webp`}
              alt=""
              width="1672"
              height="941"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="hero-instrument-field">
              {heroInstruments.map((instrument) => (
                <img
                  className={`hero-instrument hero-instrument-${instrument.id}`}
                  src={`${basePath}/${instrument.file}`}
                  alt=""
                  width={instrument.width}
                  height={instrument.height}
                  loading="eager"
                  decoding="async"
                  key={instrument.id}
                />
              ))}
            </div>
          </div>
          <div className="hero-grain" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">{event.eyebrow}</p>
            <p className="working-title">{event.title}</p>
            <h1 id="hero-title">
              <span className="title-name">
                <span>NEW</span>
                <span>RIVER</span>
              </span>
              <span className="title-join">×</span>
              <span>24 Hz</span>
            </h1>
            <p className="hero-tagline">{event.tagline}</p>

            <div className="hero-event-brief" aria-label="공연 주요 정보">
              <div className="hero-date-row">
                <time dateTime="2026-12-11">{event.date}</time>
                <span>{event.start}</span>
              </div>
              <p className="hero-venue-line">{event.venue}</p>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href="#ticket">
                관람 안내
              </a>
              <a className="button button-ghost" href="#setlist">
                셋리스트 보기
              </a>
            </div>
          </div>

          <a className="scroll-cue" href="#about" aria-label="공연 소개로 이동">
            <span>SCROLL</span>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="section intro-section" id="about">
          <div className="intro-copy">
            <h2>공연 소개</h2>
            <p>
              NEW RIVER와 24 Hz가 함께 만드는 겨울 합동공연입니다. 자세한
              이야기는 준비되는 대로 공개합니다.
            </p>
          </div>
        </section>

        <section className="section bands-section" id="bands">
          <div className="section-heading">
            <h2>밴드 소개</h2>
          </div>

          <div className="band-grid">
            {bands.map((band, index) => (
              <article className="band-card" key={band.id}>
                <div className="band-index">0{index + 1}</div>
                <div className="band-logo-wrap">
                  <img
                    src={`${basePath}${band.logo}`}
                    alt={`${band.name} 로고`}
                    width={band.logoWidth}
                    height={band.logoHeight}
                    loading="lazy"
                    decoding="async"
                    className={`band-logo band-logo-${band.id}`}
                  />
                </div>
                <div className="band-copy">
                  <p className="provisional-label">BAND PROFILE</p>
                  <h3>{band.name}</h3>
                  <p>{band.description}</p>
                  <span className="member-placeholder">
                    멤버 소개 · 추후 공개
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section program-section" id="setlist">
          <div className="section-heading">
            <h2>공연 시간 &amp; 셋리스트</h2>
            <p className="section-note">
              시간과 곡 순서는 준비 과정에서 변경될 수 있습니다.
            </p>
          </div>

          <div className="timeline" aria-label="공연 시간표">
            <div className="timeline-row">
              <time dateTime="2026-12-11T18:30:00+09:00">{event.doors}</time>
              <div>
                <strong>DOORS OPEN</strong>
                <span>입장 시작 예정</span>
              </div>
            </div>
            <div className="timeline-row timeline-row-focus">
              <time dateTime="2026-12-11T19:00:00+09:00">{event.start}</time>
              <div>
                <strong>LIVE START</strong>
                <span>본공연 시작</span>
              </div>
            </div>
            <div className="timeline-row">
              <time dateTime="2026-12-11T21:30:00+09:00">
                {event.expectedEnd}
              </time>
              <div>
                <strong>EXPECTED END</strong>
                <span>종료 예정</span>
              </div>
            </div>
          </div>

          <div className="setlist-groups">
            <details className="setlist-shell">
              <summary>
                <span className="setlist-number">ALL</span>
                <span className="setlist-title">
                  <strong>전체 셋리스트</strong>
                  <small>눌러서 보기</small>
                </span>
                <span className="setlist-count">
                  {setlists.reduce((total, group) => total + group.songs.length, 0)} SONGS
                </span>
                <span className="detail-toggle" aria-hidden="true" />
              </summary>

              <div className="setlist-content">
                {setlists.map((group, groupIndex) => (
                  <section className="setlist-card" key={group.id}>
                    <div className="setlist-group-heading">
                      <span className="setlist-number">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="setlist-title">
                        <strong>{group.band}</strong>
                        <small>{group.label}</small>
                      </span>
                      <span className="setlist-count">
                        {group.songs.length} SONGS
                      </span>
                    </div>
                    <ol className="song-list">
                      {group.songs.map((song, songIndex) => (
                        <li key={`${group.id}-${song.title}`}>
                          <span className="song-number">
                            {String(songIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="song-info">
                            <strong>{song.title}</strong>
                            <small>{song.artist}</small>
                          </span>
                          {song.note && (
                            <span className="song-note">{song.note}</span>
                          )}
                          <a
                            href={song.youtube}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${song.title} 공식 YouTube 영상 새 창에서 보기`}
                          >
                            YouTube <span aria-hidden="true">↗</span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </section>
                ))}

                <div className="encore-card">
                  <span>ENCORE</span>
                  <div>
                    <strong>NEW RIVER × 24 Hz</strong>
                    <p>합동 앙코르곡 · 추후 공개</p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>

        <section className="section ticket-section" id="ticket">
          <div className="section-heading">
            <h2>관람 안내</h2>
            <p className="section-note">
              사전 예매와 현장 결제를 모두 이용할 수 있습니다.
            </p>
          </div>

          <div className="ticket-layout">
            <article className="price-card">
              <p>관람료</p>
              <strong>{event.ticketPrice}</strong>
              <span>1인 관람료</span>
            </article>

            <div className="ticket-info">
              <div>
                <span className="ticket-label">예매</span>
                <strong>{event.ticketMethods.join(" · ")}</strong>
                <p>
                  사전 예매 방법과 현장 결제 수단은 확정되는 대로 안내합니다.
                </p>
                <span className="status-pill">{event.reservationStatus}</span>
              </div>
              <div>
                <span className="ticket-label">문의</span>
                <strong>{event.inquiryChannel}</strong>
                <p>
                  공연과 관람에 관한 문의 채널입니다. 계정 링크는 추후
                  연결됩니다.
                </p>
                <span className="status-pill">{event.inquiryStatus}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section venue-section" id="venue">
          <div className="venue-watermark" aria-hidden="true">
            001
          </div>
          <div className="section-heading">
            <h2>{event.venueSectionTitle}</h2>
          </div>

          <div className="venue-layout">
            <div className="venue-primary">
              <p className="venue-date">{event.dateLabel}</p>
              <h3>{event.venue}</h3>
              <address>{event.address}</address>
              <div className="venue-actions">
                <div className="map-buttons">
                  <a
                    className="button button-primary"
                    href={event.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    네이버 지도 ↗
                  </a>
                  <a
                    className="button button-map-secondary"
                    href={event.kakaoMapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    카카오맵 ↗
                  </a>
                </div>
                <a
                  className="text-link"
                  href={event.venueGuideUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  001클럽 공식 사이트 ↗
                </a>
              </div>
            </div>

            <dl className="venue-facts">
              <div>
                <dt>지하철</dt>
                <dd>합정역 2번 출구에서 도보 약 4분</dd>
              </div>
              <div>
                <dt>주차</dt>
                <dd>전용 주차 공간 없음</dd>
              </div>
              <div>
                <dt>안내</dt>
                <dd>생수 외 음식물 반입 불가</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section guide-section" id="guide">
          <div className="section-heading">
            <h2>관람 안내</h2>
          </div>

          <div className="guide-list">
            <details>
              <summary>
                <span>입장 및 신청은 어떻게 하나요?</span>
                <i aria-hidden="true" />
              </summary>
              <p>
                관람료는 1인 5,000원이며 사전 예매와 현장 결제가 모두
                가능합니다. 사전 예매 링크와 현장 결제 수단은 추후 안내합니다.
              </p>
            </details>
            <details>
              <summary>
                <span>공연 촬영이 가능한가요?</span>
                <i aria-hidden="true" />
              </summary>
              <p>
                관객 촬영 범위와 공식 영상 공개 여부를 협의 중입니다. 공연 전 최종
                안내를 확인해 주세요.
              </p>
            </details>
            <details>
              <summary>
                <span>주차할 수 있나요?</span>
                <i aria-hidden="true" />
              </summary>
              <p>
                001클럽에는 전용 주차 공간이 없습니다. 합정역 2번 출구에서
                도보 약 4분 거리이므로 대중교통 이용을 권장합니다.
              </p>
            </details>
            <details>
              <summary>
                <span>음식물을 가져갈 수 있나요?</span>
                <i aria-hidden="true" />
              </summary>
              <p>공연장 안내에 따라 생수를 제외한 음식물은 반입할 수 없습니다.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p className="footer-title">NEW RIVER × 24 Hz</p>
        <p>
          2026.12.11 FRI · {event.venue} · {event.ticketPrice}
        </p>
        <p className="footer-note">
          현재 페이지는 공연 준비를 위한 초안이며 일부 내용은 변경될 수 있습니다.
        </p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
