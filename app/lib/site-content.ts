export type Lang = "pl";

type LocalizedText = Record<Lang, string>;

type NavItem = {
  to: string;
  label: LocalizedText;
};

type CalendarItem = {
  date: string;
  title: LocalizedText;
  note: LocalizedText;
};

type FaqItem = {
  question: LocalizedText;
  answer: LocalizedText;
};

type DetailItem = {
  label: LocalizedText;
  value: LocalizedText;
};

type TravelTip = {
  title: LocalizedText;
  text: LocalizedText;
};

type TimelineItem = {
  time: string;
  title: LocalizedText;
};

type GalleryItem = {
  title: LocalizedText;
  caption: LocalizedText;
};

export const siteContent = {
  title: {
    pl: "Przyjęcie z okazji obrony doktoratu",
  },
  nav: [
    { to: "/", label: { pl: "Start" } },
    { to: "/faq", label: { pl: "FAQ" } },
    { to: "/contact", label: { pl: "Kontakt" } },
    { to: "/calendar", label: { pl: "Kalendarz" } },
  ] satisfies NavItem[],
  landing: {
    meta: {
      title: {
        pl: "Zaproszenie na przyjęcie z okazji obrony rozprawy doktorskiej",
      },
      description: {
        pl: "Uroczyste przyjęcie z okazji obrony rozprawy doktorskiej - Dworek Białołęka, 27 czerwca 2026.",
      },
    },
    hero: {
      eyebrow: {
        pl: "Zaproszenie",
      },
      headline: {
        pl: "Najpiękniej jest świętowć w gronie osób, które były częścią tej drogi",
      },
      intro: {
        pl: "Do usunięcia",
      },
      dateBadge: {
        pl: "27 czerwca 2026 | 18:00",
      },
      buttons: {
        confirm: { pl: "Potwierdzenie przybycia" },
        venue: { pl: "Miejsce przyjęcia" },
        directions: { pl: "Wskazówki dojazdowe" },
        timeline: { pl: "Harmonogram" },
      },
      photoPlaceholder: {
        pl: "Miejsce na zdjęcie doktorantki / dworku",
      },
    },
    keyInfo: {
      title: {
        pl: "Szczegóły przyjęcia",
      },
      items: [
        {
          label: { pl: "Data" },
          value: { pl: "27 czerwca 2026" },
        },
        {
          label: { pl: "Godzina" },
          value: { pl: "18:00" },
        },
        {
          label: { pl: "Miejsce przyjęcia" },
          value: { pl: "Dworek Białołęka" },
        },
        {
          label: { pl: "Adres" },
          value: {
            pl: "ul. Białołęcka 281, Warszawa",
          },
        },
        {
          label: { pl: "Nocleg" },
          value: {
            pl: "Nocleg zapewniony jest dla gości dojeżdżających spoza województwa mazowieckiego",
          },
        },
        {
          label: { pl: "Miejsce noclegu" },
          value: { pl: "Dworek Białołęka" },
        },
      ] satisfies DetailItem[],
    },
    venue: {
      title: {
        pl: "Miejsce wydarzenia - Dworek Białołęka",
      },
      lead: {
        pl: "Kameralny, elegancki dworek bankietowy na Zielonej Białołęce.",
      },
      imageSrc: "/dworek-z-zewnatrz.jpg",
    },
    travel: {
      title: {
        pl: "Interaktywny dojazd",
      },
      lead: {
        pl: "Sprawdź lokalizację i wybierz najwygodniejszy sposób dotarcia.",
      },
      mapsButton: {
        pl: "Otwórz w Google Maps",
      },
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Dworek+Bia%C5%82o%C5%82%C4%99ka%2C+Bia%C5%82o%C5%82%C4%99cka+281%2C+Warszawa",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Dworek%20Bia%C5%82o%C5%82%C4%99ka%20Bia%C5%82o%C5%82%C4%99cka%20281%20Warszawa&z=14&output=embed",
      tips: [
        {
          title: { pl: "Samochód" },
          text: {
            pl: "Najwygodniejszy dojazd od strony Trasy Toruńskiej i Białołęki.",
          },
        },
        {
          title: { pl: "Taxi / Uber / Bolt" },
          text: {
            pl: "Podaj kierowcy: Dworek Białołęka, ul. Białołęcka 281.",
          },
        },
        {
          title: { pl: "Komunikacja miejska" },
          text: {
            pl: "Przystanek Przydrożna 51, linie autobusowe 204, 234, 314, N-14.",
          },
        },
        {
          title: { pl: "Parking" },
          text: {
            pl: "Parking jest dostępny na terenie obiektu.",
          },
        },
      ] satisfies TravelTip[],
    },
    rsvp: {
      title: {
        pl: "RSVP",
      },
      deadline: {
        pl: "Prosimy o potwierdzenie przybycia do dnia 14 czerwca 2026 r.",
      },
      fields: {
        fullName: { pl: "Imię i nazwisko" },
        attendance: { pl: "Obecność" },
        guestCount: { pl: "Liczba osób" },
        stay: { pl: "Korzystanie z noclegu" },
        diet: { pl: "Preferencje żywieniowe" },
        message: { pl: "Wiadomość dla organizatorów" },
        submit: { pl: "Wyślij potwierdzenie" },
      },
      options: {
        attendanceYes: { pl: "Tak, będę" },
        attendanceNo: { pl: "Niestety nie" },
        stayYes: { pl: "Tak" },
        stayNo: { pl: "Nie" },
      },
      placeholders: {
        name: {
          pl: "Jan Kowalski",
        },
        guestCount: {
          pl: "np. 2",
        },
        diet: {
          pl: "np. wegetariańskie, bez glutenu",
        },
        message: {
          pl: "[Twoja wiadomość]",
        },
      },
    },
    hotel: {
      title: {
        pl: "Nocleg",
      },
      lead: {
        pl: "Po przyjęciu zapewniamy gościom opłacony pokój hotelowy.",
      },
      details: [
        {
          label: { pl: "Zameldowanie" },
          value: { pl: "Od 14:00" },
        },
        {
          label: { pl: "Wymeldowanie" },
          value: { pl: "Do 10:00" },
        },
        {
          label: { pl: "Śniadanie" },
          value: { pl: "9:00 - 12:00, Skarbka z Gór 23A/23" },
        }
      ] satisfies DetailItem[],
    },
    timeline: {
      title: {
        pl: "Harmonogram",
      },
      items: [
        { time: "18:00", title: { pl: "Rozpoczęcie przyjęcia" } },
        { time: "18:15", title: { pl: "Aperitif" } },
        { time: "18:30", title: { pl: "Obiad" } },
        { time: "19:30", title: { pl: "Wspólne świętowanie" } },
        { time: "21:00", title: { pl: "Niespodzianka dla gości" } },
        { time: "22:00", title: { pl: "Ciepły posiłek" } },
        { time: "23:00", title: { pl: "Niespodzianka dla gości" } },
        { time: "01:00", title: { pl: "Ciepły posiłek" } },
        { time: "04:00", title: { pl: "Zakończenie przyjęcia" } },
      ] satisfies TimelineItem[],
    },
    gallery: {
      title: {
        pl: "Galeria",
      },
      lead: {
        pl: "Zdjęcia dworku, sali, detali przyjęcia i doktorantki.",
      },
      items: [
        {
          title: { pl: "Dworek" },
          caption: { pl: "[Zdjęcie dworku]" },
        },
        {
          title: { pl: "Sala bankietowa" },
          caption: { pl: "[Zdjęcie sali]" },
        },
        {
          title: { pl: "Detale przyjęcia" },
          caption: { pl: "[Zdjęcie detali]" },
        },
        {
          title: { pl: "Doktorantka" },
          caption: { pl: "[Zdjęcie doktorantki]" },
        },
      ] satisfies GalleryItem[],
      controls: {
        close: { pl: "Zamknij" },
        previous: { pl: "Poprzednie" },
        next: { pl: "Następne" },
      },
    },
    faq: {
      title: {
        pl: "Informacje dodatkowe / FAQ",
      },
      items: [
        {
          question: {
            pl: "Do kiedy potwierdzić obecność?",
          },
          answer: {
            pl: "Prosimy o RSVP do 14 czerwca 2026 r.",
          },
        },
        {
          question: {
            pl: "Czy nocleg jest zapewniony?",
          },
          answer: {
            pl: "Tak, po przyjęciu dla gości spoza województwa mazowieckiego jest opłacony pokój hotelowy.",
          },
        },
        {
          question: {
            pl: "Czy można przyjść z osobą towarzyszącą?",
          },
          answer: {
            pl: "Tak, wpisz liczbę osób w formularzu RSVP.",
          },
        },
        {
          question: {
            pl: "Gdzie zaparkować?",
          },
          answer: {
            pl: "Na terenie dworku.",
          },
        },
        {
          question: {
            pl: "Jak dojechać?",
          },
          answer: {
            pl: "Skorzystaj z mapy i przycisku Google Maps w sekcji dojazdu.",
          },
        },
        {
          question: {
            pl: "Jaki jest dress code?",
          },
          answer: {
            pl: "Smart casual.",
          },
        },
      ] satisfies FaqItem[],
    },
    contact: {
      title: { pl: "Kontakt" },
      lead: {
        pl: "W razie pytań skontaktuj się ze mną.",
      },
      phoneLabel: { pl: "Telefon" },
      emailLabel: { pl: "E-mail" },
      phone: { pl: "+48 884 375 483" },
      cta: { pl: "Skontaktuj się" },
    },
  },
  faq: {
    title: {
      pl: "FAQ",
    },
    lead: {
      pl: "Najczęstsze pytania dotyczące przyjęcia.",
    },
    items: [
      {
        question: {
          pl: "Do kiedy potwierdzić obecność?",
        },
        answer: {
          pl: "Do 31 maja 2026 r.",
        },
      },
      {
        question: {
          pl: "Czy nocleg jest zapewniony?",
        },
        answer: {
          pl: "Tak, po przyjęciu goście mają opłacony pokój hotelowy.",
        },
      },
    ] satisfies FaqItem[],
  },
  contact: {
    title: {
      pl: "Kontakt",
    },
    intro: {
      pl: "Jeśli masz pytania, napisz do organizatora.",
    },
    direct: {
      pl: "Telefon: +48 884 375 483",
    },
    formLabels: {
      name: { pl: "Imię" },
      email: { pl: "Email" },
      message: { pl: "Wiadomość" },
      send: { pl: "Wyślij (szablon)" },
    },
  },
  calendar: {
    title: {
      pl: "Kalendarz",
    },
    intro: {
      pl: "Skrócony plan przygotowań i dnia wydarzenia.",
    },
    items: [
      {
        date: "31.05.2026",
        title: { pl: "Termin RSVP" },
        note: {
          pl: "Ostateczna data potwierdzeń przybycia.",
        },
      },
      {
        date: "27.06.2026",
        title: { pl: "Dzień przyjęcia" },
        note: {
          pl: "Start wydarzenia o 18:00.",
        },
      },
      {
        date: "28.06.2026",
        title: { pl: "Nocleg i śniadanie" },
        note: {
          pl: "[Placeholder: szczegóły porannego wymeldowania].",
        },
      },
    ] satisfies CalendarItem[],
  },
  controls: {
    language: {
      pl: "PL",
    },
    themeLight: {
      pl: "Jasny",
    },
    themeDark: {
      pl: "Ciemny",
    },
  },
  footer: {
    pl: "Przyjęcie po obronie doktoratu | Dworek Białołęka",
  },
};
