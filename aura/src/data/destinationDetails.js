// src/data/destinationDetails.js

// ===== Santorini Images =====
import santoriniHero from '../assets/santorini.jpg';
import redBeach from '../assets/Red Beach.jpg';
import perissaBeach from '../assets/Perissa Beach.jpg';
import kamariBeach from '../assets/Kamari Beach.jpg';
import vlychadaBeach from '../assets/Vlychada Beach.jpg';
import santoriniCaldera from '../assets/Santorini Caldera.jpg';
import neaKameni from '../assets/Nea Kameni Volcano.jpg';
import therasiaIsland from '../assets/Therasia Island.jpg';
import skarosRock from '../assets/Skaros Rock.jpg';
import akrotiriSite from '../assets/Akrotiri Archaeological Site.jpg';
import ancientThera from '../assets/Ancient Thera.jpg';
import oiaVillage from '../assets/Oia Village.jpg';
import megalochoriVillage from '../assets/Megalochori Village.jpg';
import calderaHiking from '../assets/Caldera Hiking Trail.jpg';
import volcanoBoatTour from '../assets/Volcano Boat Tour.jpg';
import seaKayaking from '../assets/Sea Kayaking.jpg';
import scubaDiving from '../assets/Scuba Diving.jpg';
import favaMeKoukia from '../assets/Fava me Koukia.jpg';
import tomatokeftedes from '../assets/Tomatokeftedes.jpg';
import santoriniAssyrtiko from '../assets/Santorini Assyrtiko.jpg';
import vinsanto from '../assets/Vinsanto.jpg';
import canavesOia from '../assets/Canaves Oia Hotel.jpg';
import graceHotel from '../assets/Grace Hotel Santorini.jpg';
import katikies from '../assets/Katikies Santorini.jpg';
import aressana from '../assets/Aressana Spa Hotel & Suites.jpg';

// ===== Mykonos Images =====
import mykonosHero from '../assets/mykonos.jpg'; // use your existing mykonos.jpg as hero
import psarouBeach from '../assets/Psarou Beach.jpg';
import paradiseBeach from '../assets/Paradise Beach.jpg';
import eliaBeach from '../assets/Elia Beach.jpg';
import ornosBeach from '../assets/Ornos Beach.jpg';
import mykonosWindmills from '../assets/Mykonos Windmills.jpg';
import armenistisLighthouse from '../assets/Armenistis Lighthouse.jpg';
import mykonosCoastalTrails from '../assets/Mykonos Coastal Trails.jpg';
import riniaIsland from '../assets/Rinia Island.jpg';
import mykonosTown from '../assets/Mykonos Town (Chora).jpg';
import littleVenice from '../assets/Little Venice.jpg';
import panagiaParaportiani from '../assets/Panagia Paraportiani Church.jpg';
import delosIsland from '../assets/Delos Island.jpg';
import jetSkiing from '../assets/Jet Skiing.jpg';
import sailingCruise from '../assets/Sailing Cruise.jpg';
import windsurfing from '../assets/Windsurfing.jpg';
import scubaDivingMykonos from '../assets/Scuba Diving.jpg'; // you can reuse or rename if needed
import kopanisti from '../assets/Kopanisti.jpg';
import louza from '../assets/Louza.jpg';
import mykonianSausage from '../assets/Mykonian Sausage.jpg';
import matsata from '../assets/Matsata.jpg';
import cavoTagoo from '../assets/Cavo Tagoo Mykonos.jpg';
import mykonosGrand from '../assets/Mykonos Grand Hotel & Resort.jpg';
import bohemeMykonos from '../assets/Boheme Mykonos.jpg';
import santaMarina from '../assets/Santa Marina, a Luxury Collection Resort.jpg';

// ===== Athens Images =====
import athensHero from '../assets/athens.jpg'; // use your existing athens.jpg as hero
import vouliagmeniBeach from '../assets/Vouliagmeni Beach.jpg';
import astirBeach from '../assets/Astir Beach.jpg';
import edemBeach from '../assets/Edem Beach.jpg';
import kavouriBeach from '../assets/Kavouri Beach.jpg';
import mountLycabettus from '../assets/Mount Lycabettus.jpg';
import nationalGarden from '../assets/National Garden of Athens.jpg';
import lakeVouliagmeni from '../assets/Lake Vouliagmeni.jpg';
import philopapposHill from '../assets/Philopappos Hill.jpg';
import acropolisOfAthens from '../assets/Acropolis of Athens.jpg';
import acropolisMuseum from '../assets/Acropolis Museum.jpg';
import plaka from '../assets/Plaka.jpg';
import ancientAgora from '../assets/Ancient Agora of Athens.jpg';
import acropolisWalkingTour from '../assets/Acropolis Walking Tour.jpg';
import mountLycabettusHike from '../assets/Mount Lycabettus Hike.jpg';
import seaKayakingAthens from '../assets/Sea Kayaking along the Athens Riviera.jpg';
import cyclingTourAthens from '../assets/Cycling Tour through Athens.jpg';
import moussaka from '../assets/Moussaka.jpg';
import souvlaki from '../assets/Souvlaki.jpg';
import spanakopita from '../assets/Spanakopita.jpg';
import loukoumades from '../assets/Loukoumades.jpg';
import electraMetropolis from '../assets/Electra Metropolis Athens.jpg';
import hotelGrandeBretagne from '../assets/Hotel Grande Bretagne.jpg';
import theModernistAthens from '../assets/The Modernist Athens.jpg';
import cocoMatAthens from '../assets/Coco-Mat Athens BC.jpg';

export const destinationDetails = {
  // ==================== EUROPE ====================

  santorini: {
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    rating: 4.8,
    reviews: "1,246",
    tagline: "Iconic sunsets, whitewashed villages, and crystal-clear waters.",
    heroImage: santoriniHero,
    overview: "Santorini is the jewel of the Cyclades. Famous for its dramatic caldera, blue-domed churches, and unforgettable sunsets. The whitewashed villages of Oia, Fira and Imerovigli cling to the cliff edge.",
    
    beaches: [
      {
        name: "Red Beach",
        description: "Famous for its red volcanic cliffs and dark sand.",
        image: redBeach
      },
      {
        name: "Perissa Beach",
        description: "Black-sand beach with restaurants and beach activities.",
        image: perissaBeach
      },
      {
        name: "Kamari Beach",
        description: "Popular black-pebble beach with seaside cafés.",
        image: kamariBeach
      },
      {
        name: "Vlychada Beach",
        description: "Dramatic white cliffs and a unique volcanic landscape.",
        image: vlychadaBeach
      }
    ],

    nature: [
      {
        name: "Santorini Caldera",
        description: "Breathtaking volcanic cliffs and sea views.",
        image: santoriniCaldera
      },
      {
        name: "Nea Kameni Volcano",
        description: "Volcanic island with hiking paths and geothermal areas.",
        image: neaKameni
      },
      {
        name: "Therasia Island",
        description: "Peaceful landscapes and traditional villages.",
        image: therasiaIsland
      },
      {
        name: "Skaros Rock",
        description: "Scenic coastal rock formation with beautiful walking trails.",
        image: skarosRock
      }
    ],

    culture: [
      {
        name: "Akrotiri Archaeological Site",
        description: "Preserved ancient settlement from the Minoan period.",
        image: akrotiriSite
      },
      {
        name: "Ancient Thera",
        description: "Historic ruins located on Mesa Vouno mountain.",
        image: ancientThera
      },
      {
        name: "Oia Village",
        description: "Traditional architecture, narrow streets, and iconic blue-domed buildings.",
        image: oiaVillage
      },
      {
        name: "Megalochori Village",
        description: "Traditional village known for its history, churches, and local character.",
        image: megalochoriVillage
      }
    ],

    adventure: [
      {
        name: "Caldera Hiking Trail",
        description: "Hike between Fira and Oia with incredible views.",
        image: calderaHiking
      },
      {
        name: "Volcano Boat Tour",
        description: "Explore the volcanic islands around Santorini.",
        image: volcanoBoatTour
      },
      {
        name: "Sea Kayaking",
        description: "Paddle along the island’s coastline and volcanic cliffs.",
        image: seaKayaking
      },
      {
        name: "Scuba Diving",
        description: "Explore underwater volcanic formations and marine life.",
        image: scubaDiving
      }
    ],

    food: [
      {
        name: "Fava me Koukia",
        description: "Traditional yellow split-pea purée.",
        image: favaMeKoukia
      },
      {
        name: "Tomatokeftedes",
        description: "Delicious tomato fritters made with Santorini tomatoes.",
        image: tomatokeftedes
      },
      {
        name: "Santorini Assyrtiko",
        description: "Famous local white wine.",
        image: santoriniAssyrtiko
      },
      {
        name: "Vinsanto",
        description: "Traditional sweet dessert wine from Santorini.",
        image: vinsanto
      }
    ],

    hotels: [
      {
        name: "Canaves Oia Hotel",
        type: "Luxury",
        price: "€450+/night",
        note: "Luxury cave-style accommodation in Oia.",
        image: canavesOia
      },
      {
        name: "Grace Hotel Santorini",
        type: "Luxury",
        price: "€500+/night",
        note: "Luxury stay with caldera views.",
        image: graceHotel
      },
      {
        name: "Katikies Santorini",
        type: "Luxury",
        price: "€600+/night",
        note: "Iconic whitewashed luxury hotel in Oia.",
        image: katikies
      },
      {
        name: "Aressana Spa Hotel & Suites",
        type: "Luxury",
        price: "€300+/night",
        note: "Centrally located hotel in Fira.",
        image: aressana
      }
    ]
  },

  mykonos: {
  name: "Mykonos",
  country: "Greece",
  continent: "Europe",
  rating: 4.7,
  reviews: "1,105",
  tagline: "Vibrant nightlife, golden beaches, and Cycladic charm.",
  heroImage: mykonosHero,
  overview: "Mykonos is the glamorous party island of the Cyclades, known for its vibrant nightlife, beautiful beaches, whitewashed windmills, and chic atmosphere.",

  beaches: [
    {
      name: "Psarou Beach",
      description: "Famous for clear water, luxury beach clubs, and relaxing.",
      image: psarouBeach
    },
    {
      name: "Paradise Beach",
      description: "Lively beach with music, parties, and water activities.",
      image: paradiseBeach
    },
    {
      name: "Elia Beach",
      description: "Spacious sandy beach with beautiful turquoise water.",
      image: eliaBeach
    },
    {
      name: "Ornos Beach",
      description: "Family-friendly beach with restaurants and calm waters.",
      image: ornosBeach
    }
  ],

  nature: [
    {
      name: "Mykonos Windmills",
      description: "Iconic landmarks with beautiful views of the coastline.",
      image: mykonosWindmills
    },
    {
      name: "Armenistis Lighthouse",
      description: "Peaceful coastal spot with stunning sunset views.",
      image: armenistisLighthouse
    },
    {
      name: "Mykonos Coastal Trails",
      description: "Scenic walking routes through the island’s countryside.",
      image: mykonosCoastalTrails
    },
    {
      name: "Rinia Island",
      description: "Quiet, undeveloped island with clear waters and natural scenery.",
      image: riniaIsland
    }
  ],

  culture: [
    {
      name: "Mykonos Town (Chora)",
      description: "Traditional whitewashed buildings, narrow streets, and boutiques.",
      image: mykonosTown
    },
    {
      name: "Little Venice",
      description: "Historic waterfront area with colourful balconies and seaside cafés.",
      image: littleVenice
    },
    {
      name: "Panagia Paraportiani Church",
      description: "One of Mykonos’ most recognisable churches.",
      image: panagiaParaportiani
    },
    {
      name: "Delos Island",
      description: "Important ancient archaeological site near Mykonos.",
      image: delosIsland
    }
  ],

  adventure: [
    {
      name: "Jet Skiing",
      description: "Exciting water activity along Mykonos’ coastline.",
      image: jetSkiing
    },
    {
      name: "Scuba Diving",
      description: "Explore underwater rock formations and marine life.",
      image: scubaDivingMykonos
    },
    {
      name: "Sailing Cruise",
      description: "Discover hidden coves and nearby islands.",
      image: sailingCruise
    },
    {
      name: "Windsurfing",
      description: "Enjoy water sports in areas with favourable winds.",
      image: windsurfing
    }
  ],

  food: [
    {
      name: "Kopanisti",
      description: "Spicy, creamy local cheese.",
      image: kopanisti
    },
    {
      name: "Louza",
      description: "Traditional cured pork served as a local delicacy.",
      image: louza
    },
    {
      name: "Mykonian Sausage",
      description: "Seasoned sausage often served with bread or cheese.",
      image: mykonianSausage
    },
    {
      name: "Matsata",
      description: "Handmade pasta commonly served with meat or tomato-based sauces.",
      image: matsata
    }
  ],

  hotels: [
    {
      name: "Cavo Tagoo Mykonos",
      type: "Luxury",
      price: "€500+/night",
      note: "Luxury hotel known for its sea views and infinity pools.",
      image: cavoTagoo
    },
    {
      name: "Mykonos Grand Hotel & Resort",
      type: "Luxury",
      price: "€350+/night",
      note: "Upscale beachfront accommodation near Agios Ioannis.",
      image: mykonosGrand
    },
    {
      name: "Boheme Mykonos",
      type: "Boutique",
      price: "€250+/night",
      note: "Stylish boutique hotel overlooking Mykonos Town.",
      image: bohemeMykonos
    },
    {
      name: "Santa Marina, a Luxury Collection Resort",
      type: "Luxury",
      price: "€600+/night",
      note: "Luxury resort with a private beach and high-end facilities.",
      image: santaMarina
    }
  ]
},

athens: {
  name: "Athens",
  country: "Greece",
  continent: "Europe",
  rating: 4.6,
  reviews: "982",
  tagline: "Ancient history, iconic landmarks, and vibrant culture.",
  heroImage: athensHero,
  overview: "Athens is the historic capital of Greece and the cradle of Western civilization. Home to the Acropolis, ancient ruins, and a lively modern city full of energy.",

  beaches: [
    {
      name: "Vouliagmeni Beach",
      description: "Beautiful sandy beach with clear waters and nearby cafés.",
      image: vouliagmeniBeach
    },
    {
      name: "Astir Beach",
      description: "Upscale beach with comfortable facilities and seaside restaurants.",
      image: astirBeach
    },
    {
      name: "Edem Beach",
      description: "Relaxed beach close to the city, popular for swimming and sunsets.",
      image: edemBeach
    },
    {
      name: "Kavouri Beach",
      description: "Scenic beach surrounded by pine trees and rocky coastal areas.",
      image: kavouriBeach
    }
  ],

  nature: [
    {
      name: "Mount Lycabettus",
      description: "Hill offering panoramic views of Athens.",
      image: mountLycabettus
    },
    {
      name: "National Garden of Athens",
      description: "Peaceful green space with walking paths and shaded areas.",
      image: nationalGarden
    },
    {
      name: "Lake Vouliagmeni",
      description: "Natural thermal lake known for its warm waters.",
      image: lakeVouliagmeni
    },
    {
      name: "Philopappos Hill",
      description: "Scenic hill with walking trails and views of the Acropolis.",
      image: philopapposHill
    }
  ],

  culture: [
    {
      name: "Acropolis of Athens",
      description: "Historic landmark featuring the famous Parthenon.",
      image: acropolisOfAthens
    },
    {
      name: "Acropolis Museum",
      description: "Museum displaying important ancient Greek artefacts.",
      image: acropolisMuseum
    },
    {
      name: "Plaka",
      description: "Charming historic neighbourhood with traditional streets, shops, and cafés.",
      image: plaka
    },
    {
      name: "Ancient Agora of Athens",
      description: "Archaeological site that was once a major centre of public life.",
      image: ancientAgora
    }
  ],

  adventure: [
    {
      name: "Acropolis Walking Tour",
      description: "Explore Athens’ historic landmarks on foot.",
      image: acropolisWalkingTour
    },
    {
      name: "Mount Lycabettus Hike",
      description: "Climb the hill for panoramic city views.",
      image: mountLycabettusHike
    },
    {
      name: "Sea Kayaking along the Athens Riviera",
      description: "Explore the coastline from the water.",
      image: seaKayakingAthens
    },
    {
      name: "Cycling Tour through Athens",
      description: "Discover neighbourhoods, landmarks, and scenic streets by bicycle.",
      image: cyclingTourAthens
    }
  ],

  food: [
    {
      name: "Moussaka",
      description: "Baked dish made with layers of eggplant, meat sauce, and béchamel.",
      image: moussaka
    },
    {
      name: "Souvlaki",
      description: "Grilled meat served on skewers or in pita bread.",
      image: souvlaki
    },
    {
      name: "Spanakopita",
      description: "Flaky pastry filled with spinach and cheese.",
      image: spanakopita
    },
    {
      name: "Loukoumades",
      description: "Small Greek doughnuts usually served with honey or syrup.",
      image: loukoumades
    }
  ],

  hotels: [
    {
      name: "Electra Metropolis Athens",
      type: "Upscale",
      price: "€200+/night",
      note: "Stylish hotel near central Athens with city views.",
      image: electraMetropolis
    },
    {
      name: "Hotel Grande Bretagne",
      type: "Luxury",
      price: "€400+/night",
      note: "Historic luxury hotel in Syntagma Square.",
      image: hotelGrandeBretagne
    },
    {
      name: "The Modernist Athens",
      type: "Boutique",
      price: "€180+/night",
      note: "Contemporary boutique hotel with minimalist design.",
      image: theModernistAthens
    },
    {
      name: "Coco-Mat Athens BC",
      type: "Boutique",
      price: "€220+/night",
      note: "Modern hotel near the Acropolis with rooftop views.",
      image: cocoMatAthens
    }
  ]
},

  // ========== The rest of Europe stays exactly the same ==========
  // (mykonos, athens, crete, rome, amalfi-coast, florence, venice, paris, nice, provence, bordeaux, barcelona, madrid, seville, mallorca, lisbon, porto, algarve, madeira, dubrovnik, split, hvar, zagreb)

  // Paste the rest of the Europe code you already have here...
};