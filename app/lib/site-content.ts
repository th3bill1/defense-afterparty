export type Lang = "pl" | "en";

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
    pl: "Przyjęcie po obronie rozprawy doktorskiej",
    en: "Doctoral Defense Celebration",
  },
  nav: [
    { to: "/", label: { pl: "Start", en: "Home" } },
    { to: "/faq", label: { pl: "FAQ", en: "FAQ" } },
    { to: "/contact", label: { pl: "Kontakt", en: "Contact" } },
    { to: "/calendar", label: { pl: "Kalendarz", en: "Schedule" } },
  ] satisfies NavItem[],
  landing: {
    meta: {
      title: {
        pl: "Zaproszenie na przyjęcie z okazji obrony rozprawy doktorskiej",
        en: "Invitation to the Doctoral Defense Celebration",
      },
      description: {
        pl: "Uroczyste przyjęcie z okazji obrony rozprawy doktorskiej - Dworek Białołęka, 27 czerwca 2026.",
        en: "Elegant doctoral defense celebration at Dworek Białołęka on June 27, 2026.",
      },
    },
    hero: {
      eyebrow: {
        pl: "Zaproszenie",
        en: "Invitation",
      },
      headline: {
        pl: "Najpiękniej jest świętowć w gronie osób, które były częścią tej drogi",
        en: "Let us celebrate a doctoral defense together",
      },
      intro: {
        pl: "Do usunięcia",
        en: "You are invited to an elegant evening reception with close friends and family.",
      },
      dateBadge: {
        pl: "27 czerwca 2026 | 18:00",
        en: "June 27, 2026 | 6:00 PM",
      },
      buttons: {
        confirm: { pl: "Potwierdzenie przybycia", en: "Confirm attendance" },
        venue: { pl: "Miejsce przyjęcia", en: "See venue" },
        directions: { pl: "Wskazówki dojazdowe", en: "Get directions" },
      },
      photoPlaceholder: {
        pl: "Miejsce na zdjęcie doktorantki / dworku",
        en: "Placeholder for a photo of the PhD graduate / venue",
      },
    },
    keyInfo: {
      title: {
        pl: "Szczegóły przyjęcia",
        en: "Key information",
      },
      items: [
        {
          label: { pl: "Data", en: "Date" },
          value: { pl: "27 czerwca 2026", en: "June 27, 2026" },
        },
        {
          label: { pl: "Godzina", en: "Time" },
          value: { pl: "18:00", en: "6:00 PM" },
        },
        {
          label: { pl: "Miejsce", en: "Venue" },
          value: { pl: "Dworek Białołęka", en: "Dworek Białołęka" },
        },
        {
          label: { pl: "Adres", en: "Address" },
          value: {
            pl: "ul. Białołęcka 281, Warszawa",
            en: "Białołęcka 281, Warsaw",
          },
        },
        {
          label: { pl: "Nocleg", en: "Accommodation" },
          value: {
            pl: "Po przyjęciu zapewniony jest dla Państwa nocleg (dotyczy gości spoza województwa mazowieckiego",
            en: "A paid hotel room is provided after the reception",
          },
        },
      ] satisfies DetailItem[],
    },
    venue: {
      title: {
        pl: "Miejsce wydarzenia - Dworek Białołęka",
        en: "Venue - Dworek Białołęka",
      },
      lead: {
        pl: "Kameralny, elegancki dworek bankietowy na Zielonej Białołęce, idealny na uroczyste spotkanie.",
        en: "An intimate and elegant banquet manor in Green Białołęka, perfect for a festive gathering.",
      },
      features: {
        pl: ["elegancka sala", "zielona okolica", "Warszawa - Białołęka", "nocleg dla gości"],
        en: ["elegant hall", "green surroundings", "Warsaw - Białołęka", "guest accommodation"],
      },
      imageSrc: "/dworek-z-zewnatrz.jpg",
    },
    travel: {
      title: {
        pl: "Interaktywny dojazd",
        en: "Interactive directions",
      },
      lead: {
        pl: "Sprawdź lokalizację i wybierz najwygodniejszy sposób dotarcia.",
        en: "Check the location and choose the most convenient way to arrive.",
      },
      mapsButton: {
        pl: "Otwórz w Google Maps",
        en: "Open in Google Maps",
      },
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Dworek+Bia%C5%82o%C5%82%C4%99ka%2C+Bia%C5%82o%C5%82%C4%99cka+281%2C+Warszawa",
      mapEmbedUrl:
        "https://maps.google.com/maps?q=Dworek%20Bia%C5%82o%C5%82%C4%99ka%20Bia%C5%82o%C5%82%C4%99cka%20281%20Warszawa&z=14&output=embed",
      tips: [
        {
          title: { pl: "Samochód", en: "By car" },
          text: {
            pl: "Najwygodniejszy dojazd od strony Trasy Toruńskiej i Białołęki.",
            en: "The easiest route is via Trasa Toruńska and Białołęka.",
          },
        },
        {
          title: { pl: "Taxi / Uber / Bolt", en: "Taxi / Uber / Bolt" },
          text: {
            pl: "Podaj kierowcy: Dworek Białołęka, ul. Białołęcka 281.",
            en: "Use this destination: Dworek Białołęka, Białołęcka 281.",
          },
        },
        {
          title: { pl: "Komunikacja miejska", en: "Public transport" },
          text: {
            pl: "[Placeholder: linie autobusowe i przystanek docelowy].",
            en: "[Placeholder: bus lines and nearest stop].",
          },
        },
        {
          title: { pl: "Parking", en: "Parking" },
          text: {
            pl: "[Placeholder: informacje o parkingu przy obiekcie].",
            en: "[Placeholder: parking details on site].",
          },
        },
      ] satisfies TravelTip[],
    },
    rsvp: {
      title: {
        pl: "RSVP",
        en: "RSVP",
      },
      lead: {
        pl: "Daj nam znać, czy będziesz świętować razem z nami.",
        en: "Let us know if you will celebrate with us.",
      },
      deadline: {
        pl: "Prosimy o potwierdzenie przybycia do dnia 31 maja 2026 r.",
        en: "Please confirm your attendance by May 31, 2026.",
      },
      fields: {
        fullName: { pl: "Imię i nazwisko", en: "Full name" },
        attendance: { pl: "Obecność", en: "Attendance" },
        guestCount: { pl: "Liczba osób", en: "Number of guests" },
        stay: { pl: "Korzystanie z noclegu", en: "Accommodation needed" },
        diet: { pl: "Preferencje żywieniowe", en: "Dietary preferences" },
        message: { pl: "Wiadomość dla organizatorów", en: "Message to organizers" },
        submit: { pl: "Wyślij potwierdzenie", en: "Send confirmation" },
      },
      options: {
        attendanceYes: { pl: "Tak, będę", en: "Yes, I will attend" },
        attendanceNo: { pl: "Niestety nie", en: "No, I cannot attend" },
        stayYes: { pl: "Tak", en: "Yes" },
        stayNo: { pl: "Nie", en: "No" },
      },
      placeholders: {
        name: {
          pl: "Jan Kowalski",
          en: "John Smith",
        },
        guestCount: {
          pl: "np. 2",
          en: "e.g. 2",
        },
        diet: {
          pl: "np. wegetariańskie, bez glutenu",
          en: "e.g. vegetarian, gluten-free",
        },
        message: {
          pl: "[Twoja wiadomość]",
          en: "[Your message]",
        },
      },
    },
    hotel: {
      title: {
        pl: "Nocleg",
        en: "Accommodation",
      },
      lead: {
        pl: "Po przyjęciu zapewniamy gościom opłacony pokój hotelowy.",
        en: "After the reception, guests are provided with a paid hotel room.",
      },
      details: [
        {
          label: { pl: "Zameldowanie", en: "Check-in" },
          value: { pl: "[Placeholder: godzina zameldowania]", en: "[Placeholder: check-in time]" },
        },
        {
          label: { pl: "Wymeldowanie", en: "Check-out" },
          value: { pl: "[Placeholder: godzina wymeldowania]", en: "[Placeholder: check-out time]" },
        },
        {
          label: { pl: "Śniadanie", en: "Breakfast" },
          value: { pl: "[Placeholder: informacje o śniadaniu]", en: "[Placeholder: breakfast details]" },
        },
        {
          label: { pl: "Liczba osób w pokoju", en: "Guests per room" },
          value: { pl: "[Placeholder: liczba osób]", en: "[Placeholder: number of guests]" },
        },
      ] satisfies DetailItem[],
    },
    timeline: {
      title: {
        pl: "Harmonogram",
        en: "Timeline",
      },
      items: [
        { time: "17:30", title: { pl: "Przyjazd gości", en: "Guest arrival" } },
        { time: "18:00", title: { pl: "Powitanie", en: "Welcome" } },
        { time: "19:00", title: { pl: "Kolacja", en: "Dinner" } },
        { time: "20:30", title: { pl: "Toast", en: "Toast" } },
        { time: "21:00", title: { pl: "Wspólne świętowanie", en: "Celebration" } },
      ] satisfies TimelineItem[],
    },
    gallery: {
      title: {
        pl: "Galeria",
        en: "Gallery",
      },
      lead: {
        pl: "Zdjęcia dworku, sali, detali przyjęcia i doktorantki.",
        en: "Photos of the venue, hall, event details, and PhD graduate.",
      },
      items: [
        {
          title: { pl: "Dworek", en: "Venue" },
          caption: { pl: "[Zdjęcie dworku]", en: "[Venue photo]" },
        },
        {
          title: { pl: "Sala bankietowa", en: "Banquet hall" },
          caption: { pl: "[Zdjęcie sali]", en: "[Hall photo]" },
        },
        {
          title: { pl: "Detale przyjęcia", en: "Reception details" },
          caption: { pl: "[Zdjęcie detali]", en: "[Details photo]" },
        },
        {
          title: { pl: "Doktorantka", en: "PhD graduate" },
          caption: { pl: "[Zdjęcie doktorantki]", en: "[PhD graduate photo]" },
        },
      ] satisfies GalleryItem[],
      controls: {
        close: { pl: "Zamknij", en: "Close" },
        previous: { pl: "Poprzednie", en: "Previous" },
        next: { pl: "Następne", en: "Next" },
      },
    },
    faq: {
      title: {
        pl: "Informacje dodatkowe / FAQ",
        en: "Additional information / FAQ",
      },
      items: [
        {
          question: {
            pl: "Do kiedy potwierdzić obecność?",
            en: "By when should I confirm attendance?",
          },
          answer: {
            pl: "Prosimy o RSVP do 31 maja 2026 r.",
            en: "Please send your RSVP by May 31, 2026.",
          },
        },
        {
          question: {
            pl: "Czy nocleg jest zapewniony?",
            en: "Is accommodation provided?",
          },
          answer: {
            pl: "Tak, po przyjęciu dla gości przewidziany jest opłacony pokój hotelowy.",
            en: "Yes, guests have a paid hotel room after the reception.",
          },
        },
        {
          question: {
            pl: "Czy można przyjść z osobą towarzyszącą?",
            en: "Can I bring a plus-one?",
          },
          answer: {
            pl: "Tak, wpisz liczbę osób w formularzu RSVP.",
            en: "Yes, please include the number of guests in RSVP.",
          },
        },
        {
          question: {
            pl: "Gdzie zaparkować?",
            en: "Where can I park?",
          },
          answer: {
            pl: "[Placeholder: szczegóły parkingu przy obiekcie].",
            en: "[Placeholder: parking details at the venue].",
          },
        },
        {
          question: {
            pl: "Jak dojechać?",
            en: "How can I get there?",
          },
          answer: {
            pl: "Skorzystaj z mapy i przycisku Google Maps w sekcji dojazdu.",
            en: "Use the map and Google Maps button in the travel section.",
          },
        },
        {
          question: {
            pl: "Jaki jest dress code?",
            en: "What is the dress code?",
          },
          answer: {
            pl: "[Placeholder: smart casual / wieczorowy].",
            en: "[Placeholder: smart casual / evening attire].",
          },
        },
      ] satisfies FaqItem[],
    },
    contact: {
      title: { pl: "Kontakt", en: "Contact" },
      lead: {
        pl: "W razie pytań skontaktuj się z organizatorem.",
        en: "If you have questions, contact the organizer.",
      },
      phoneLabel: { pl: "Telefon", en: "Phone" },
      emailLabel: { pl: "E-mail", en: "Email" },
      phone: { pl: "[+48 ...]", en: "[+48 ...]" },
      email: { pl: "[kontakt@twojadomena.pl]", en: "[contact@yourdomain.com]" },
      cta: { pl: "Skontaktuj się", en: "Contact" },
    },
  },
  faq: {
    title: {
      pl: "FAQ",
      en: "FAQ",
    },
    lead: {
      pl: "Najczęstsze pytania dotyczące przyjęcia.",
      en: "Most common questions about the celebration.",
    },
    items: [
      {
        question: {
          pl: "Do kiedy potwierdzić obecność?",
          en: "By when should I confirm attendance?",
        },
        answer: {
          pl: "Do 31 maja 2026 r.",
          en: "By May 31, 2026.",
        },
      },
      {
        question: {
          pl: "Czy nocleg jest zapewniony?",
          en: "Is accommodation provided?",
        },
        answer: {
          pl: "Tak, po przyjęciu goście mają opłacony pokój hotelowy.",
          en: "Yes, guests are provided with a paid hotel room.",
        },
      },
    ] satisfies FaqItem[],
  },
  contact: {
    title: {
      pl: "Kontakt",
      en: "Contact",
    },
    intro: {
      pl: "Jeśli masz pytania, napisz do organizatora.",
      en: "If you have questions, contact the organizer.",
    },
    direct: {
      pl: "Email: [kontakt@twojadomena.pl] | Telefon: [+48 ...]",
      en: "Email: [contact@yourdomain.com] | Phone: [+48 ...]",
    },
    formLabels: {
      name: { pl: "Imię", en: "Name" },
      email: { pl: "Email", en: "Email" },
      message: { pl: "Wiadomość", en: "Message" },
      send: { pl: "Wyślij (szablon)", en: "Send (template)" },
    },
  },
  calendar: {
    title: {
      pl: "Kalendarz",
      en: "Calendar",
    },
    intro: {
      pl: "Skrócony plan przygotowań i dnia wydarzenia.",
      en: "Short plan for preparation and the event day.",
    },
    items: [
      {
        date: "31.05.2026",
        title: { pl: "Termin RSVP", en: "RSVP deadline" },
        note: {
          pl: "Ostateczna data potwierdzeń przybycia.",
          en: "Final attendance confirmation date.",
        },
      },
      {
        date: "27.06.2026",
        title: { pl: "Dzień przyjęcia", en: "Celebration day" },
        note: {
          pl: "Start wydarzenia o 18:00.",
          en: "Event starts at 6:00 PM.",
        },
      },
      {
        date: "28.06.2026",
        title: { pl: "Nocleg i śniadanie", en: "Hotel stay and breakfast" },
        note: {
          pl: "[Placeholder: szczegóły porannego wymeldowania].",
          en: "[Placeholder: morning check-out details].",
        },
      },
    ] satisfies CalendarItem[],
  },
  controls: {
    language: {
      pl: "PL",
      en: "EN",
    },
    themeLight: {
      pl: "Jasny",
      en: "Light",
    },
    themeDark: {
      pl: "Ciemny",
      en: "Dark",
    },
  },
  footer: {
    pl: "Przyjęcie po obronie doktoratu | Dworek Białołęka",
    en: "Doctoral defense celebration | Dworek Białołęka",
  },
};
