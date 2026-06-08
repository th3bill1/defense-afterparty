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

export const siteContent = {
  title: "Przyjęcie z okazji obrony rozprawy doktorskiej",
  nav: [
    { to: "/", label: "Start" },
    { to: "/faq", label: "FAQ" },
    { to: "/rsvp", label: "RSVP" },
    { to: "/contact", label: "Kontakt" },
    { to: "/menu", label: "Menu" },
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
      lead: "Po przyjęciu zapewniamy gościom opłacony pokój hotelowy. Nocleg zapewniony jest dla gości dojeżdżających spoza województwa mazowieckiego.",
      details: [
        {
          label: "Zameldowanie",
          value: "Od 14:00",
        },
        {
          label: "Wymeldowanie",
          value: "Do 10:00",
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
      lead: "Zdjęcia dworku, sali, detali przyjęcia i doktorantki.",
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
      items: [
        {
          question: "Do kiedy potwierdzić obecność?",
          answer: "Proszę o RSVP do 14 czerwca 2026 r.",
        },
        {
          question: "Czy nocleg jest zapewniony?",
          answer: "Tak, po przyjęciu dla gości spoza województwa mazowieckiego jest opłacony pokój hotelowy.",
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
        }

      ] satisfies FaqItem[],
    },
  contact: {
    title: "Kontakt",
    intro: "Jeśli masz pytania, napisz do organizatora.",
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
  author: "Wojciech Wójcik"
};
