/* eslint-disable @next/next/no-img-element -- Static export serves supplied artwork without runtime optimization. */
import type { Metadata } from "next";
import { event } from "../content";

export const metadata: Metadata = {
  title: "사전 예매",
  description: "FNL — Friday Night Live 사전 예매 안내",
};

export default function ApplyPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="fnl-page fnl-apply-page">
      <a className="fnl-skip-link" href="#apply-main">
        신청 안내로 바로가기
      </a>

      <header className="fnl-apply-header">
        <a className="fnl-wordmark" href={`${basePath}/`} aria-label="공연 안내로 돌아가기">
          <img
            src={`${basePath}/assets/fnl/logo-white.webp`}
            alt="FNL"
            width="1100"
            height="1000"
          />
          <span>FRIDAY NIGHT LIVE</span>
        </a>
        <a className="fnl-apply-back" href={`${basePath}/#ticket`}>
          공연 안내로 돌아가기
        </a>
      </header>

      <main className="fnl-apply-main" id="apply-main">
        <section className="fnl-apply-intro" aria-labelledby="apply-title">
          <p className="fnl-overline">FNL · ADVANCE RESERVATION</p>
          <h1 id="apply-title">사전 예매</h1>
          <p>
            2026년 12월 11일, NEW RIVER와 24 Hz가 함께하는 Friday Night Live의
            사전 예매 페이지입니다.
          </p>
          <dl>
            <div>
              <dt>DATE</dt>
              <dd>{event.date}</dd>
            </div>
            <div>
              <dt>SHOW</dt>
              <dd>{event.start}</dd>
            </div>
            <div>
              <dt>VENUE</dt>
              <dd>{event.venue}</dd>
            </div>
            <div>
              <dt>TICKET</dt>
              <dd>{event.ticketPrice}</dd>
            </div>
          </dl>
        </section>

        <section className="fnl-apply-form" aria-label="사전 예매 신청양식">
          {event.reservationFormUrl ? (
            <>
              <iframe
                src={event.reservationFormUrl}
                title="FNL 사전 예매 신청양식"
                loading="eager"
              />
              <p>
                양식이 보이지 않으면{" "}
                <a href={event.reservationFormPublicUrl} target="_blank" rel="noreferrer">
                  새 창에서 신청하기 ↗
                </a>
              </p>
            </>
          ) : (
            <div className="fnl-apply-placeholder">
              <span>BOOKING SOON</span>
              <strong>사전 예매 준비 중</strong>
              <p>신청양식이 확정되는 대로 이 페이지에서 바로 예매할 수 있습니다.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
