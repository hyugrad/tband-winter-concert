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

export const event = {
  eyebrow: "2026 WINTER JOINT LIVE",
  title: "2026 NEW RIVER X 24 Hz 합동공연",
  tagline: "공연에 대한 자세한 이야기는 곧 공개합니다.",
  date: "2026. 12. 11. FRI",
  dateLabel: "2026년 12월 11일 금요일",
  doors: "18:30",
  start: "19:00",
  expectedEnd: "21:30",
  ticketPrice: "5,000원",
  ticketMethods: ["사전 예매", "현장 결제"],
  reservationStatus: "사전 예매 링크 준비 중",
  inquiryChannel: "Instagram DM",
  inquiryStatus: "공식 계정 링크 준비 중",
  venue: "001클럽",
  venueSectionTitle: "공연장 안내",
  address: "서울 마포구 서교동 483-15 지하",
  mapUrl:
    "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%84%9C%EA%B5%90%EB%8F%99%20483-15",
  kakaoMapUrl:
    "https://map.kakao.com/?q=%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EC%84%9C%EA%B5%90%EB%8F%99%20483-15",
  venueGuideUrl: "https://001club.co.kr/",
};

export const bands = [
  {
    id: "new-river",
    name: "NEW RIVER",
    logo: "/assets/logo-new-river.png",
    logoWidth: 1254,
    logoHeight: 1254,
    description:
      "물결처럼 흐르는 멜로디와 선명한 밴드 사운드를 들려주는 NEW RIVER.",
  },
  {
    id: "24hz",
    name: "24 Hz",
    logo: "/assets/logo-24hz.png",
    logoWidth: 160,
    logoHeight: 160,
    description:
      "서로 다른 주파수를 한 무대의 에너지로 바꾸는 밴드 24 Hz.",
  },
];

export const encore = {
  isPublic: false,
  label: "ENCORE",
  band: "NEW RIVER × 24 Hz",
  description: "합동 앙코르곡 · 추후 공개",
};

export const setlists: SetlistGroup[] = [
  {
    id: "24hz-set-1",
    band: "24 Hz",
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
        title: "NO PAIN",
        artist: "실리카겔",
        youtube: "https://www.youtube.com/watch?v=JaIMSzE5yLA",
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
    band: "24 Hz",
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
        artist: "페퍼톤스",
        youtube: "https://www.youtube.com/watch?v=2pAtQgjvsJ0",
        note: "버전 확인 중",
      },
    ],
  },
  {
    id: "new-river-set",
    band: "NEW RIVER",
    label: "SET",
    songs: [
      {
        title: "염라",
        artist: "윤하 ver.",
        youtube: "https://www.youtube.com/watch?v=iq1XuC4R024",
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
    ],
  },
];
