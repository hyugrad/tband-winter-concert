/* eslint-disable @next/next/no-img-element -- Static export serves supplied artwork without runtime optimization. */
import { bands, encore, event, setlists } from "./content";
import { EventCountdown } from "./event-countdown";
import { ScrollExperience } from "./scroll-experience";
import { VenueActions } from "./venue-actions";

const faqs = [
  {
    question: "입장 및 신청은 어떻게 하나요?",
    answer:
      "사전 예매를 통해 티켓을 구매하실 수 있습니다. 티켓 가격은 전석 5,000원입니다.",
    reservationLink: true,
  },
  {
    question: "주차할 수 있나요?",
    answer:
      "001클럽에는 전용 주차 공간이 없습니다. 근처 공영주차장 또는 메세나폴리스 주차장을 별도로 이용해 주세요. 합정역 2번 출구에서 도보 약 4분 거리이므로 대중교통 이용을 권장합니다.",
    reservationLink: false,
  },
  {
    question: "음식물을 가져갈 수 있나요?",
    answer: "공연장 안내에 따라 생수를 제외한 음식물은 반입할 수 없습니다.",
    reservationLink: false,
  },
  {
    question: "공연을 보려면 몇 시까지 가야 하나요?",
    answer:
      "입장은 오후 7시부터 가능합니다. 공연은 오후 7시 30분에 시작하므로 오후 7시부터 7시 30분 사이에 입장해 주세요. 예매 확인은 입구에서 도와드리겠습니다.",
    reservationLink: false,
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
          <a href="#schedule">일정</a>
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
            <div className="fnl-marquee">
              <h1 id="fnl-hero-title" aria-label="Friday Night Live">
                <span className="fnl-hero-logo-stack" aria-hidden="true">
                  <img
                    className="fnl-hero-logo fnl-hero-logo-glow"
                    src={`${basePath}/assets/fnl/hero-logo-yellow.webp`}
                    alt=""
                    width="621"
                    height="507"
                    loading="eager"
                    decoding="async"
                  />
                  <img
                    className="fnl-hero-logo fnl-hero-logo-main"
                    src={`${basePath}/assets/fnl/hero-logo-red.webp`}
                    alt=""
                    width="621"
                    height="507"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <img
                    className="fnl-hero-logo fnl-hero-logo-tint"
                    src={`${basePath}/assets/fnl/hero-logo-red.webp`}
                    alt=""
                    width="621"
                    height="507"
                    loading="eager"
                    decoding="async"
                  />
                </span>
              </h1>
            </div>

            <p className="fnl-hero-cast">NEW RIVER <i>×</i> 24Hz</p>
            <div className="fnl-hero-meta" aria-label="공연 주요 정보">
              <p>
                <time dateTime="2026-12-11">2026.12.11 FRI</time>
                <span aria-hidden="true">·</span>
                <strong>{event.start}</strong>
              </p>
              <strong>{`합정 ${event.venue}`}</strong>
            </div>
          </div>

          <div className="fnl-curtain fnl-curtain-left" aria-hidden="true">
            <span />
          </div>
          <div className="fnl-curtain fnl-curtain-right" aria-hidden="true">
            <span />
          </div>
          <a className="fnl-scroll-cue" href="#about" aria-label="공연 소개로 이동">
            <span>Scroll</span>
            <small>아래로 스크롤해 보세요</small>
            <i aria-hidden="true" />
          </a>
        </section>

        <section className="fnl-section fnl-about" id="about">
          <div className="fnl-section-label fnl-section-label-light">
            <span>01</span>
            <p>OPENING MONOLOGUE</p>
          </div>
          <div className="fnl-about-grid">
            <img
              className="fnl-about-mark"
              src={`${basePath}/assets/fnl/logo-red.webp`}
              alt=""
              width="1100"
              height="1000"
              loading="eager"
              decoding="async"
            />
            <div className="fnl-about-copy">
              <h2>Friday Night Live</h2>
              <p>
                NEW RIVER와 24Hz가 함께하는 12월의 금요일 밤입니다.
                서로 다른 두 밴드의 라이브를 한 자리에서 만나보세요.
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
          </div>
        </section>

        <section className="fnl-section fnl-bands" id="bands">
          <div className="fnl-section-label fnl-section-label-light">
            <span>02</span>
            <p>LIVE GUESTS</p>
          </div>
          <div className="fnl-section-heading">
            <h2>LINE UP</h2>
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
                    loading="eager"
                    decoding="async"
                    className={`fnl-band-logo fnl-band-logo-${band.id}`}
                  />
                </div>
                <div className="fnl-band-card-copy">
                  <h3>{band.name}</h3>
                  <p>{band.description}</p>
                  <details className="fnl-band-members">
                    <summary>멤버 소개</summary>
                    <dl>
                      {band.members.map((member) => (
                        <div key={`${band.id}-${member.role}`}>
                          <dt>{member.role}</dt>
                          <dd>
                            {member.names}
                            {member.note && <small>{member.note}</small>}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="fnl-section fnl-schedule" id="schedule">
          <div className="fnl-section-label fnl-section-label-light">
            <span>03</span>
            <p>LIVE COUNTDOWN</p>
          </div>
          <div className="fnl-schedule-board">
            <div className="fnl-schedule-clock">
              <EventCountdown target="2026-12-11T19:30:00+09:00" />
            </div>
            <div className="fnl-schedule-date">
              <time dateTime="2026-12-11">
                <strong>12/11</strong>
                <em>FRI</em>
              </time>
              <dl>
                <div><dt>DOORS</dt><dd>{event.doors}</dd></div>
                <div><dt>LIVE</dt><dd>{event.start}</dd></div>
                <div><dt>END</dt><dd>{event.expectedEnd}</dd></div>
                <div><dt>VENUE</dt><dd>{event.venue}</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="fnl-section fnl-rundown" id="setlist">
          <div className="fnl-program-sheet">
          <div className="fnl-section-label">
            <span>04</span>
            <p>SHOW RUNDOWN</p>
          </div>
          <div className="fnl-section-heading fnl-section-heading-dark">
            <h2>공연 셋리스트</h2>
            <span>
              연주 순서는 공연 준비 상황에 따라 변경될 수 있습니다.
            </span>
          </div>

          <details className="fnl-setlist">
            <summary>
              <span className="fnl-setlist-no">RUN OF SHOW</span>
              <span>
                <strong>전체 셋리스트</strong>
                <small>
                  <span className="fnl-setlist-state-closed">눌러서 펼쳐보기</span>
                  <span className="fnl-setlist-state-open">셋리스트 접기</span>
                </small>
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
                          원곡 듣기 ↗
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
          </div>
        </section>

        <section className="fnl-section fnl-ticket" id="ticket">
          <div className="fnl-section-label fnl-section-label-light">
            <span>05</span>
            <p>BOX OFFICE</p>
          </div>
          <div className="fnl-ticket-grid">
            <div className="fnl-ticket-intro">
              <h2>관람 안내</h2>
            </div>
            <div className="fnl-ticket-column">
              <div className="fnl-ticket-stub">
                <div>
                  <span>BOOKING</span>
                  <strong>{event.ticketMethods.join(" · ")}</strong>
                  <p>사전 예매를 통해 티켓을 구매하실 수 있습니다. (티켓 가격: 전석 {event.ticketPrice})</p>
                  {event.reservationFormUrl ? (
                    <a className="fnl-booking-button" href={`${basePath}/apply/`}>
                      사전 예매하기 ↗
                    </a>
                  ) : (
                    <small>{event.reservationStatus}</small>
                  )}
                </div>
              </div>

              <figure className="fnl-admit-ticket">
                <img
                  src={`${basePath}/assets/fnl/ticket-final.webp`}
                  alt={`Friday Night Live 공연 티켓. 2026년 12월 11일, NEW RIVER × 24Hz, ${event.venue}, 오후 7시 30분`}
                  width="980"
                  height="287"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="fnl-section fnl-venue" id="venue">
          <div className="fnl-section-label fnl-section-label-light">
            <span>06</span>
            <p>PLACE &amp; ACCESS</p>
          </div>
          <div className="fnl-venue-grid">
            <div className="fnl-venue-title">
              <p>공연장</p>
              <h2>장소 안내</h2>
              <strong className="fnl-venue-name">{event.venue}</strong>
              <VenueActions
                displayAddress={event.address}
                copyAddress={event.copyAddress}
                mapUrl={event.mapUrl}
                kakaoMapUrl={event.kakaoMapUrl}
              />
            </div>
            <dl className="fnl-venue-facts">
              <div><dt>지하철</dt><dd>합정역 2번 출구에서 도보 약 4분</dd></div>
              <div><dt>주차</dt><dd>전용 주차 공간 없음, 근처 공영주차장 및 메세나폴리스 주차장 별도 이용 필요</dd></div>
              <div><dt>안내</dt><dd>생수 외 음식물 반입 불가, 전석 스탠딩</dd></div>
            </dl>
          </div>
        </section>

        <section className="fnl-section fnl-guide" id="guide">
          <div className="fnl-program-sheet fnl-faq-sheet">
          <div className="fnl-section-label">
            <span>07</span>
            <p>HOUSE RULES</p>
          </div>
          <div className="fnl-section-heading fnl-section-heading-dark">
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
                <p>
                  {faq.answer}{" "}
                  {faq.reservationLink && (
                    <a href={`${basePath}/apply/`}>사전 예매하기 →</a>
                  )}
                </p>
              </details>
            ))}
          </div>
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
          <p>NEW RIVER × 24Hz · 2026.12.11 · {event.venue}</p>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
