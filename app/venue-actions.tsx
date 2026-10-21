"use client";

import { useState } from "react";

type VenueActionsProps = {
  address: string;
  mapUrl: string;
  kakaoMapUrl: string;
  venueGuideUrl: string;
};

function ActionIcon({ type }: { type: "map" | "copy" | "guide" }) {
  if (type === "copy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
    );
  }

  if (type === "guide") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 10v6M12 7h.01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-5.1 7-12A7 7 0 0 0 5 9c0 6.9 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.3" />
    </svg>
  );
}

export function VenueActions({
  address,
  mapUrl,
  kakaoMapUrl,
  venueGuideUrl,
}: VenueActionsProps) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  const copyLabel =
    copyState === "copied"
      ? "주소 복사됨 ✓"
      : copyState === "failed"
        ? "주소를 직접 선택해 주세요"
        : "주소 복사";

  return (
    <div className="fnl-venue-actions">
      <a href={mapUrl} target="_blank" rel="noreferrer">
        <ActionIcon type="map" />
        <span>네이버 길찾기</span>
      </a>
      <button type="button" onClick={copyAddress} aria-live="polite">
        <ActionIcon type="copy" />
        <span>{copyLabel}</span>
      </button>
      <a href={kakaoMapUrl} target="_blank" rel="noreferrer">
        <ActionIcon type="map" />
        <span>카카오맵</span>
      </a>
      <a href={venueGuideUrl} target="_blank" rel="noreferrer">
        <ActionIcon type="guide" />
        <span>장소 안내 보기</span>
      </a>
    </div>
  );
}
