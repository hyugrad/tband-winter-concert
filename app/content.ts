export type Song = {
  title: string;
  artist: string;
  youtube: string;
  note?: string;
};

export type SetlistGroup = {
  id: string;
  band: string;
  label: string;
  songs: Song[];
};

export type BandMemberGroup = {
  role: string;
  names: string;
  note?: string;
};

export const event = {
  eyebrow: "2026 WINTER JOINT LIVE",
  title: "2026 NEW RIVER X 24Hz 합동공연",
  tagline: "공연에 대한 자세한 이야기는 곧 공개합니다.",
  date: "2026. 12. 11. FRI",
  dateLabel: "2026년 12월 11일 금요일",
  doors: "19:00",
  start: "19:30",
  expectedEnd: "22:00",
  ticketPrice: "5,000원",
  ticketMethods: ["사전 예매"],
  reservationStatus: "사전 예매 접수 중",
  reservationFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSchuCAh2lGGgi6RNGbz0jEI2j6I0VKZ6fU70epuw_kMW4QgOw/viewform?embedded=true",
  reservationFormPublicUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSchuCAh2lGGgi6RNGbz0jEI2j6I0VKZ6fU70epuw_kMW4QgOw/viewform?usp=publish-editor",
  inquiryChannel: "Instagram DM",
  inquiryStatus: "공식 계정 링크 준비 중",
  venue: "001클럽",
  venueSectionTitle: "공연장 안내",
  address: "서울 마포구 서교동 483-15 지하",
  copyAddress: "서울 마포구 서교동 483-15",
  mapUrl:
    "https://map.naver.com/p/search/001%ED%81%B4%EB%9F%BD",
  kakaoMapUrl:
    "https://map.kakao.com/?q=001%ED%81%B4%EB%9F%BD",
  venueGuideUrl: "https://001club.co.kr/",
};

export const bands = [
  {
    id: "new-river",
    name: "NEW RIVER",
    logo: "/assets/fnl/newriver-logo.webp",
    logoWidth: 900,
    logoHeight: 508,
    description:
      "물결처럼 흐르는 멜로디와 선명한 밴드 사운드를 들려주는 NEW RIVER.",
    members: [
      { role: "VOCAL", names: "강예진 · 고은산" },
      { role: "GUITAR", names: "신유경", note: "SUB 강예진" },
      { role: "BASS", names: "김원준" },
      { role: "DRUMS", names: "유지원" },
      { role: "KEYBOARD", names: "조혜수", note: "SUB 강예진" },
      { role: "VIOLIN", names: "박성은" },
    ] satisfies BandMemberGroup[],
  },
  {
    id: "24hz",
    name: "24Hz",
    logo: "/assets/logo-24hz-2026.png",
    logoWidth: 631,
    logoHeight: 631,
    description:
      "서로 다른 주파수를 한 무대의 에너지로 바꾸는 밴드 24Hz.",
    members: [
      { role: "VOCAL", names: "윤서희 · 윤성식 · 이다연 · 정재윤" },
      { role: "GUITAR", names: "김유진 · 김윤서 · 박하연 · 정서이" },
      { role: "BASS", names: "김현서 · 박종현" },
      { role: "DRUMS", names: "김태연 · 문정현" },
      { role: "KEYBOARD", names: "김도윤 · 박재은" },
    ] satisfies BandMemberGroup[],
  },
];

export const encore = {
  isPublic: false,
  label: "ENCORE",
  band: "NEW RIVER × 24Hz",
  description: "합동 앙코르곡 · 추후 공개",
};

export const setlists: SetlistGroup[] = [
  {
    id: "24hz-set-1",
    band: "24Hz",
    label: "SET 1",
    songs: [
      {
        title: "사랑하게 될 거야",
        artist: "한로로",
        youtube: "https://www.youtube.com/watch?v=h0KIWaUEIgQ",
      },
      {
        title: "그대에게",
        artist: "무한궤도",
        youtube: "https://www.youtube.com/watch?v=SVxiqGiLMCM",
      },
      {
        title: "혜성",
        artist: "윤하",
        youtube: "https://www.youtube.com/watch?v=ZnR0JiQGxRE",
      },
      {
        title: "Highlight",
        artist: "터치드",
        youtube: "https://www.youtube.com/watch?v=xY6Vf3dLHZ0",
      },
      {
        title: "첫 눈에 널 사랑할 수는 없었을까",
        artist: "캔트비블루",
        youtube: "https://www.youtube.com/watch?v=z9Vh2z89A2Y",
      },
      {
        title: "TOMBOY",
        artist: "HYUKOH",
        youtube: "https://www.youtube.com/watch?v=pC6tPEaAiYU",
      },
    ],
  },
  {
    id: "24hz-set-2",
    band: "24Hz",
    label: "SET 2",
    songs: [
      {
        title: "입춘",
        artist: "한로로",
        youtube: "https://www.youtube.com/watch?v=pNi9PjmbUrI",
      },
      {
        title: "난춘",
        artist: "새소년",
        youtube: "https://www.youtube.com/watch?v=KsznX5j2oQ0",
      },
      {
        title: "불",
        artist: "유다빈밴드",
        youtube: "https://www.youtube.com/watch?v=zugB7NqCsg8",
      },
      {
        title: "알루미늄",
        artist: "브로큰 발렌타인",
        youtube: "https://www.youtube.com/watch?v=Cz10jwWy98E",
      },
      {
        title: "Pretender",
        artist: "OFFICIAL HIGE DANDISM",
        youtube: "https://www.youtube.com/watch?v=TQ8WlA2GXbk",
      },
      {
        title: "노래는 불빛처럼 달린다",
        artist: "유다빈밴드",
        youtube: "https://www.youtube.com/watch?v=NMrQlOg5Ouc",
      },
    ],
  },
  {
    id: "new-river-set",
    band: "NEW RIVER",
    label: "SET",
    songs: [
      {
        title: "좋지 아니한가",
        artist: "유다빈밴드",
        youtube: "https://www.youtube.com/watch?v=kjYm0lA7XYQ",
      },
      {
        title: "샤이닝",
        artist: "자우림",
        youtube: "https://www.youtube.com/watch?v=y6tMA7mjFiA",
      },
      {
        title: "질풍가도",
        artist: "유정석",
        youtube: "https://www.youtube.com/watch?v=R1oY3eojua8",
      },
      {
        title: "Time Is Running Out",
        artist: "Muse",
        youtube: "https://www.youtube.com/watch?v=O2IuJPh6h_A",
      },
      {
        title: "21세기의 어떤 날",
        artist: "LUCY",
        youtube: "https://www.youtube.com/watch?v=Rg42mGBDzzQ",
      },
    ],
  },
];
