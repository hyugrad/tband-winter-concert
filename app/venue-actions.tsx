"use client";

import { useState } from "react";

type VenueActionsProps = {
  address: string;
  mapUrl: string;
  kakaoMapUrl: string;
  venueGuideUrl: string;
};

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
      <button type="button" onClick={copyAddress} aria-live="polite">
        {copyLabel}
      </button>
      <a href={mapUrl} target="_blank" rel="noreferrer">
        네이버 지도로 길찾기 ↗
      </a>
      <a href={kakaoMapUrl} target="_blank" rel="noreferrer">
        카카오맵으로 길찾기 ↗
      </a>
      <a href={venueGuideUrl} target="_blank" rel="noreferrer">
        001클럽 안내 보기 ↗
      </a>
    </div>
  );
}
