type NavItem = {
  to: string;
  label: string;
};

type CalendarItem = {
  date: string;
  title: string;
  note: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type DetailItem = {
  label: string;
  value: string;
};

type TravelTip = {
  title: string;
  text: string;
};

type TimelineItem = {
  time: string;
  title: string;
};

type GalleryItem = {
  title: string;
  caption: string;
};

type MenuHotDish = {
  title: string;
  items: string[];
  vegetarian: string;
};

type MenuSection = {
  title: string;
  items: string[];
};

type MenuContent = {
  title: string;
  description: string;
  intro: string;
  hotDishesTitle: string;
  hotDishes: MenuHotDish[];
  sections: MenuSection[];
};

type NotFoundContent = {
  title: string;
  description: string;
  label: string;
  heading: string;
  text: string;
  button: string;
};

export const siteContent = {
  title: "Przyjęcie z okazji obrony rozprawy doktorskiej",
  nav: [
    { to: "/", label: "Start" },
    { to: "/faq", label: "FAQ" },
    { to: "/rsvp", label: "RSVP" },
    { to: "/contact", label: "Kontakt" },
    { to: "/menu", label: "Menu" },
    { to: "/galeria", label: "Galeria" },
  ] satisfies NavItem[],
  landing: {
    meta: {
      title: "Przyjęcie z okazji obrony",
      description: "Uroczyste przyjęcie z okazji obrony rozprawy doktorskiej - Dworek Białołęka, 27 czerwca 2026.",
    },
    hero: {
      headline: "Najpiękniej jest świętowć w gronie osób, które były częścią tej drogi",
      intro: "Do usunięcia",
      dateBadge: "27 czerwca 2026 | 18:00",
      buttons: {
        confirm: "Potwierdzenie przybycia",
        venue: "Miejsce przyjęcia",
        directions: "Wskazówki dojazdowe",
        timeline: "Harmonogram",
      },
      photoUrl: "doktor_chlANIA.jpg",
    },
    keyInfo: {
      title: "Szczegóły przyjęcia",
      items: [
        {
          label: "Data",
          value: "27 czerwca 2026",
        },
        {
          label: "Godzina",
          value: "18:00",
        },
        {
          label: "Miejsce przyjęcia",
          value: "Dworek Białołęka",
        },
        {
          label: "Adres",
          value: "ul. Białołęcka 281, Warszawa",
        },
        {
          label: "Nocleg",
          value: "Nocleg zapewniony jest dla gości dojeżdżających spoza województwa mazowieckiego",
        },
        {
          label: "Miejsce noclegu",
          value: "Dworek Białołęka",
        },
      ] satisfies DetailItem[],
    },
    venue: {
      title: "Miejsce wydarzenia - Dworek Białołęka",
      lead: "Kameralny, elegancki dworek bankietowy na Zielonej Białołęce.",
      imageSrc: "/dworek-z-zewnatrz.jpg",
    },
    travel: {
      title: "Interaktywny dojazd",
      lead: "Sprawdź lokalizację i wybierz najwygodniejszy sposób dotarcia.",
      mapsButton: "Otwórz w Google Maps",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Dworek+Bia%C5%82o%C5%82%C4%99ka%2C+Bia%C5%82o%C5%82%C4%99cka+281%2C+Warszawa",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Dworek%20Bia%C5%82o%C5%82%C4%99ka%20Bia%C5%82o%C5%82%C4%99cka%20281%20Warszawa&z=14&output=embed",
      tips: [
        {
          title: "Samochód",
          text: "Najwygodniejszy dojazd od strony Trasy Toruńskiej i Białołęki.",
        },
        {
          title: "Taxi / Uber / Bolt",
          text: "Podaj kierowcy: Dworek Białołęka, ul. Białołęcka 281.",
        },
        {
          title: "Komunikacja miejska",
          text: "Przystanek Przydrożna 51, linie autobusowe 204, 234, 314, N-14.",
        },
        {
          title: "Parking",
          text: "Parking jest dostępny na terenie obiektu.",
        },
      ] satisfies TravelTip[],
    },
    rsvp: {
      title: "RSVP",
      deadline: "Proszę o potwierdzenie przybycia do dnia 14 czerwca 2026 r.",
      fields: {
        fullName: "Imię i nazwisko",
        attendance: "Obecność",
        guestCount: "Liczba osób",
        stay: "Nocleg",
        diet: "Preferencje żywieniowe",
        message: "Wiadomość dla organizatorki",
        submit: "Wyślij potwierdzenie",
      },
      options: {
        attendanceYes: "Tak, będę",
        attendanceNo: "Niestety nie",
        stayYes: "Tak",
        stayNo: "Nie",
      },
      placeholders: {
        name: "Jan Kowalski",
        guestCount: "np. 2",
        diet: "np. wegetariańskie, bez glutenu",
        message: "[Twoja wiadomość]",
      },
    },
    hotel: {
      title: "Nocleg",
      lead: "Po przyjęciu zapewniam gościom opłacony pokój hotelowy. Nocleg zapewniony jest dla gości dojeżdżających spoza województwa mazowieckiego.",
      details: [
        {
          label: "Zameldowanie",
          value: "Od 14:00",
        },
        {
          label: "Wymeldowanie",
          value: "Do 11:30",
        },
        {
          label: "Śniadanie",
          value: "9:00 - 12:00, ul. Skarbka z Gór 23A/23",
        }
      ] satisfies DetailItem[],
    },
    timeline: {
      title: "Harmonogram",
      items: [
        { time: "18:00", title: "Rozpoczęcie przyjęcia" },
        { time: "18:15", title: "Aperitif" },
        { time: "18:30", title: "Obiad" },
        { time: "19:30", title: "Pierwsza publikacja (na parkiecie)" },
        { time: "20:00", title: "Tort" },
        { time: "21:00", title: "Doktorat. Historia przetrwania" },
        { time: "22:00", title: "Ciepły posiłek" },
        { time: "23:00", title: "Ostatni egzamin" },
        { time: "00:00", title: "Doktoczepiny" },
        { time: "01:00", title: "Ciepły posiłek" },
        { time: "04:00", title: "Zakończenie przyjęcia" },
      ] satisfies TimelineItem[],
    },
    gallery: {
      title: "Galeria",
      lead: "Zapraszam wszystkich gości do dzielenia się zdjęciami z przyjęcia!",
      description: "Galeria zdjęć pobierana z Google Drive.",
      folderUrl:
        "https://drive.google.com/drive/folders/12IbtyNab0Dsy-wGsxUTfVKPp_lpi1nJA?usp=sharing",
      loading: "Wczytywanie zdjęć...",
      errorTitle: "Nie można wyświetlić galerii",
      emptyTitle: "Brak zdjęć",
      emptyText: "Folder nie zwrócił jeszcze żadnych plików graficznych.",
      openLabel: "Otwórz zdjęcie",
      items: [
        {
          title: "Dworek",
          caption: "[Zdjęcie dworku]",
        },
        {
          title: "Sala bankietowa",
          caption: "[Zdjęcie sali]",
        },
        {
          title: "Detale przyjęcia",
          caption: "[Zdjęcie detali]",
        },
        {
          title: "Doktorantka",
          caption: "[Zdjęcie doktorantki]",
        },
      ] satisfies GalleryItem[],
      controls: {
        close: "Zamknij",
        previous: "Poprzednie",
        next: "Następne",
      },
    },
    contact: {
      title: "Kontakt",
      lead: "W razie pytań skontaktuj się ze mną.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      nameLabel: "Anna Choma",
      phone: "+48 884 375 483",
      cta: "Skontaktuj się",
    },
  },
  faq: {
    title: "Informacje dodatkowe / FAQ",
    lead: "Najczęściej zadawane pytania przed przyjęciem.",
    items: [
      {
        question: "Do kiedy potwierdzić obecność?",
        answer: "Proszę o RSVP do 14 czerwca 2026 r.",
      },
      {
        question: "Czy nocleg jest zapewniony?",
        answer: "Tak, nocleg zapewniony jest dla gości dojeżdżających spoza województwa mazowieckiego.",
      },
      {
        question: "Czy można przyjść z osobą towarzyszącą?",
        answer: "Tak, wpisz liczbę osób w formularzu RSVP.",
      },
      {
        question: "Gdzie zaparkować?",
        answer: "Na terenie dworku.",
      },
      {
        question: "Jak dojechać?",
        answer: "Skorzystaj z mapy i przycisku Google Maps w sekcji dojazdu.",
      },
      {
        question: "Jaki jest dress code?",
        answer: "Smart casual.",
      },
      {
        question: "Czy mam przynieść ze sobą swój ulubiony alkohol?",
        answer: "Nie, podczas przyjęcia będzie dostępny bar z obsługą barmańską.",
      },
      {
        question: "Czy będzie można potańczyć?",
        answer: "Tak, DJ zadba o muzykę i dobrą atmosferę do tańca.",
      },
      {
        question: "Jakiego upominku oczekuje organizatorka?",
        answer: "W dalszą drogę najłatwiej zabrać to, co zmieści się w kopercie.",
      },
      {
        question: "Mam specjalne wymagania żywieniowe, co zrobić?",
        answer: "Proszę wpisać swoje preferencje żywieniowe w formularzu RSVP (do 14 czerwca 2026 r.).",
      },
    ] satisfies FaqItem[],
  },
  menu: {
    title: "Menu",
    description: "Menu przyjęcia z daniami gorącymi, przystawkami, deserami, napojami i alkoholem.",
    intro: "Poniżej znajdziesz dania gorące, propozycje wegetariańskie oraz bufet z przystawkami, deserami i napojami.",
    hotDishesTitle: "Dania gorące",
    hotDishes: [
      {
        title: "1 danie gorące",
        items: [
          "Rosół wykwintny z kuchni staropolskiej z makaronem",
          "Krem z pomidorów z grzanką",
        ],
        vegetarian: "Krem z pomidorów z grzanką",
      },
      {
        title: "2 danie gorące",
        items: [
          "Dewolay",
          "Purre",
          "Sałata z ogórkiem, rzodkiewką i szczypiorkiem",
        ],
        vegetarian: "Kotlet sojowy",
      },
      {
        title: "3 danie gorące",
        items: ["Gulasz węgierski"],
        vegetarian: "Leczo",
      },
      {
        title: "4 danie gorące",
        items: ["Barszcz czerwony z krokietem mięsnym"],
        vegetarian: "Barszcz czerwony z krokietem warzywnym",
      },
    ] satisfies MenuHotDish[],
    sections: [
      {
        title: "Przystawki w formie szwedzkiego stołu",
        items: [
          "Zestaw wędlin: pieczona karkówka, schab, boczek, szynka, pasztet z żurawiną, kabanosy, krucha kiełbasa",
          "Deska z wiejskimi specjałami",
          "Jaja faszerowane pieczarkami i łososiem",
          "Wrapy mięso-warzywne",
          "Wrapy wege",
          "Szynka z sałatką jarzynową",
          "Carpaccio z buraka",
          "Roladka z łososia z serkiem kremowym i szpinakiem",
          "Gyros",
        ],
      },
      {
        title: "Owoce",
        items: ["Mix owoców"],
      },
      {
        title: "Ciasta",
        items: [
          "Pychotka",
          "Szarlotka krucha",
          "Brauni",
          "Sernik na zimno z owocami",
          "Rurki z bitą śmietaną, eklerki i ptysie",
        ],
      },
      {
        title: "Napoje",
        items: [
          "Kawa",
          "Herbata",
          "Soki owocowe",
          "Napoje gazowane",
          "Woda niegazowana",
        ],
      },
      {
        title: "Alkohol",
        items: [
          "Wódka",
          "Whisky",
          "Wino",
          "Piwo",
          "Wino bezalkoholowe",
          "Piwo bezalkoholowe",
        ],
      },
    ] satisfies MenuSection[],
  } satisfies MenuContent,
  notFound: {
    title: "404",
    description: "Page not found.",
    label: "Page not found",
    heading: "404",
    text: "Nie znaleziono strony.",
    button: "Wróć na stronę główną",
  } satisfies NotFoundContent,
  contact: {
    title: "Kontakt",
    intro: "Jeśli masz pytania, napisz do organizatora przy pomocy formularza poniżej lub zadzwoń.",
    contactLabel: "Anna Choma",
    direct: "Telefon: +48 884 375 483",
    formLabels: {
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      send: "Wyślij (szablon)",
    },
  },
  calendar: {
    title: "Kalendarz",
    intro: "Skrócony plan przygotowań i dnia wydarzenia.",
    items: [
      {
        date: "31.05.2026",
        title: "Termin RSVP",
        note: "Ostateczna data potwierdzeń przybycia.",
      },
      {
        date: "27.06.2026",
        title: "Dzień przyjęcia",
        note: "Start wydarzenia o 18:00.",
      },
      {
        date: "28.06.2026",
        title: "Nocleg i śniadanie",
        note: "[Placeholder: szczegóły porannego wymeldowania].",
      },
    ] satisfies CalendarItem[],
  },
  footer: "Przyjęcie z okazji obrony rozprawy doktorskiej | Dworek Białołęka",
  author: "Wojciech Wójcik",
};
