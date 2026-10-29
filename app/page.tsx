/* eslint-disable @next/next/no-img-element -- Static export serves supplied artwork without runtime optimization. */
import { bands, encore, event, setlists } from "./content";
import { EventCountdown } from "./event-countdown";
import { ScrollExperience } from "./scroll-experience";
import { VenueActions } from "./venue-actions";

const calendarTitle = "FNL — Friday Night Live";
const calendarDescription = "NEW RIVER × 24 Hz 합동공연";
const calendarLocation = `${event.venue}, ${event.address}`;
const googleCalendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams(
  {
    action: "TEMPLATE",
    text: calendarTitle,
    dates: "20261211T100000Z/20261211T123000Z",
    details: calendarDescription,
    location: calendarLocation,
  },
).toString()}`;
const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?${new URLSearchParams(
  {
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: calendarTitle,
    startdt: "2026-12-11T10:00:00Z",
    enddt: "2026-12-11T12:30:00Z",
    body: calendarDescription,
    location: calendarLocation,
  },
).toString()}`;

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
          <a href="#schedule">일정</a>
          <a href="#setlist">셋리스트</a>
          <a href="#ticket">관람</a>
          <a href="#venue">장소</a>
        </nav>
      </header>
      <ScrollExperience heroSelector=".fnl-hero" navSelector=".fnl-nav" />
      <nav className="fnl-mobile-actions" aria-label="모바일 빠른 메뉴">
        <a href="#ticket">관람 안내</a>
        <a href={event.mapUrl} target="_blank" rel="noreferrer">
          001클럽 길찾기 ↗
        </a>
      </nav>

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
                <span data-text="FRIDAY" aria-hidden="true">FRIDAY</span>
                <i className="fnl-title-divider" aria-hidden="true" />
                <span data-text="NIGHT" aria-hidden="true">NIGHT</span>
                <i className="fnl-title-divider" aria-hidden="true" />
                <span data-text="LIVE" aria-hidden="true">LIVE</span>
              </h1>
            </div>

            <p className="fnl-hero-cast">NEW RIVER <i>×</i> 24 Hz</p>
            <div className="fnl-hero-meta" aria-label="공연 주요 정보">
              <p>
                <time dateTime="2026-12-11">2026.12.11 FRI</time>
                <span aria-hidden="true">·</span>
                <strong>{event.start}</strong>
              </p>
              <p>
                <strong>{`합정 ${event.venue}`}</strong>
                <span aria-hidden="true">·</span>
                <strong>{event.ticketPrice}</strong>
              </p>
              <small>{`${event.doors} 입장`}</small>
            </div>

            <div className="fnl-hero-actions">
              <a href="#ticket">관람 안내</a>
              <a href="#schedule">공연 시간·셋리스트</a>
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
              loading="lazy"
            />
            <div className="fnl-about-copy">
              <h2>Friday Night Live</h2>
              <p>
                NEW RIVER와 24 Hz가 함께하는 12월의 금요일 밤입니다.
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

        <section className="fnl-section fnl-schedule" id="schedule">
          <div className="fnl-section-label fnl-section-label-light">
            <span>03</span>
            <p>LIVE COUNTDOWN</p>
          </div>
          <div className="fnl-schedule-board">
            <div className="fnl-schedule-clock">
              <p>LIVE 시작까지</p>
              <EventCountdown target="2026-12-11T19:00:00+09:00" />
            </div>
            <div className="fnl-schedule-date">
              <time dateTime="2026-12-11">
                <span>DEC</span>
                <strong>11</strong>
                <em>FRI</em>
              </time>
              <dl>
                <div><dt>DOORS</dt><dd>{event.doors}</dd></div>
                <div><dt>LIVE</dt><dd>{event.start}</dd></div>
                <div><dt>END</dt><dd>{event.expectedEnd}</dd></div>
                <div><dt>VENUE</dt><dd>{event.venue}</dd></div>
              </dl>
              <details className="fnl-calendar-menu">
                <summary>
                  <span aria-hidden="true">＋</span>
                  캘린더에 추가
                  <i aria-hidden="true" />
                </summary>
                <div className="fnl-calendar-options">
                  <a href={googleCalendarUrl} target="_blank" rel="noreferrer">
                    <strong>Google Calendar</strong>
                    <span>로그인 후 일정 만들기 ↗</span>
                  </a>
                  <a href={`${basePath}/fnl-2026.ics`} download>
                    <strong>Apple · 기본 캘린더</strong>
                    <span>일정 파일로 추가하기 ↓</span>
                  </a>
                  <a href={outlookCalendarUrl} target="_blank" rel="noreferrer">
                    <strong>Outlook</strong>
                    <span>로그인 후 일정 만들기 ↗</span>
                  </a>
                </div>
              </details>
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
              <strong>{event.ticketPrice}</strong>
              <span>1인 관람료</span>
            </div>
            <div className="fnl-ticket-column">
              <div className="fnl-ticket-stub">
                <div>
                  <span>BOOKING</span>
                  <strong>{event.ticketMethods.join(" · ")}</strong>
                  <p>사전 예매 방법과 현장 결제 수단은 확정되는 대로 안내합니다.</p>
                  {event.reservationFormUrl ? (
                    <a className="fnl-booking-button" href={`${basePath}/apply/`}>
                      사전 예매하기 ↗
                    </a>
                  ) : (
                    <small>{event.reservationStatus}</small>
                  )}
                </div>
                <div>
                  <span>CONTACT</span>
                  <strong>{event.inquiryChannel}</strong>
                  <p>공연과 관람에 관한 문의 채널입니다. 계정 링크는 추후 연결됩니다.</p>
                  <small>{event.inquiryStatus}</small>
                </div>
              </div>

              <div className="fnl-admit-ticket" aria-label="FNL 공연 티켓">
                <div className="fnl-admit-main">
                  <span className="fnl-admit-overline">FRIDAY NIGHT LIVE · 2026</span>
                  <strong className="fnl-admit-title">
                    <span>FNL</span>
                    <span>TICKET</span>
                  </strong>
                  <dl>
                    <div>
                      <dt>DATE</dt>
                      <dd>DEC 11</dd>
                    </div>
                    <div>
                      <dt>SHOW</dt>
                      <dd>{event.start}</dd>
                    </div>
                    <div>
                      <dt>VENUE</dt>
                      <dd>001 CLUB</dd>
                    </div>
                  </dl>
                </div>
                <div className="fnl-admit-stub">
                  <span>ADMIT<br />ONE</span>
                  <strong>1211</strong>
                  <small>{event.ticketPrice}</small>
                </div>
              </div>
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
              <address>{event.address}</address>
              <VenueActions
                address={event.address}
                mapUrl={event.mapUrl}
                kakaoMapUrl={event.kakaoMapUrl}
                venueGuideUrl={event.venueGuideUrl}
              />
            </div>
            <dl className="fnl-venue-facts">
              <div><dt>지하철</dt><dd>합정역 2번 출구에서 도보 약 4분</dd></div>
              <div><dt>주차</dt><dd>전용 주차 공간 없음</dd></div>
              <div><dt>안내</dt><dd>생수 외 음식물 반입 불가</dd></div>
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
                <p>{faq.answer}</p>
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
          <p>NEW RIVER × 24 Hz · 2026.12.11 · {event.venue}</p>
          <small>현재 페이지는 공연 준비를 위한 초안이며 일부 내용은 변경될 수 있습니다.</small>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </div>
  );
}
