"use client";

import { useEffect, useState } from "react";

type CountdownProps = {
  target: string;
};

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
};

const emptyRemaining: Remaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isLive: false,
};

function getRemaining(target: string): Remaining {
  const difference = new Date(target).getTime() - Date.now();

  if (difference <= 0) {
    return { ...emptyRemaining, isLive: true };
  }

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    isLive: false,
  };
}

export function EventCountdown({ target }: CountdownProps) {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const update = () => setRemaining(getRemaining(target));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, [target]);

  const values = remaining ?? emptyRemaining;

  if (values.isLive) {
    return <strong className="fnl-countdown-live">LIVE NOW</strong>;
  }

  const units = [
    ["DAYS", values.days],
    ["HOURS", values.hours],
    ["MIN", values.minutes],
    ["SEC", values.seconds],
  ] as const;

  return (
    <div
      className="fnl-countdown-clock"
      role="timer"
      aria-label={`공연 시작까지 ${values.days}일 ${values.hours}시간 ${values.minutes}분 ${values.seconds}초`}
    >
      {units.map(([label, value]) => (
        <span key={label}>
          <strong>{remaining ? String(value).padStart(2, "0") : "--"}</strong>
          <small>{label}</small>
        </span>
      ))}
    </div>
  );
}
