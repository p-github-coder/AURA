import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/regions.css';

// ===== Europe =====
import santorini from '../assets/santorini.jpg';
import mykonos from '../assets/mykonos.jpg';
import athens from '../assets/athens.jpg';
import crete from '../assets/crete.jpg';
import rome from '../assets/rome.jpg';
import amalfiCoast from '../assets/amalfi.jpg';
import florence from '../assets/florence.jpg';
import venice from '../assets/venice.jpg';
import paris from '../assets/tower.jpg';
import nice from '../assets/nice.jpg';
import provence from '../assets/provence.jpg';
import bordeaux from '../assets/bordeaux.jpg';
import barcelona from '../assets/barcelona.jpg';
import madrid from '../assets/madrid.jpg';
import seville from '../assets/sevielle.jpg';
import mallorca from '../assets/mallorca.jpg';
import lisbon from '../assets/libson.jpg';
import porto from '../assets/porto.jpg';
import algarve from '../assets/algarve.jpg';
import madeira from '../assets/madeira.jpg';
import dubrovnik from '../assets/dubrovnik.jpg';
import split from '../assets/split.jpg';
import hvar from '../assets/hvar.jpg';
import zagreb from '../assets/zagreb.jpg';

// ===== Americas =====
import newYork from '../assets/New York.jpg';
import losAngeles from '../assets/Los Angeles.jpg';
import miami from '../assets/Miami.jpg';
import grandCanyon from '../assets/Grand Canyon.jpg';
import cancun from '../assets/Cancun.jpg';
import mexicoCity from '../assets/Mexico City.jpg';
import tulum from '../assets/Tulum.jpg';
import guadalajara from '../assets/Guadalajara.jpg';
import rioDeJaneiro from '../assets/Rio de Janeiro.jpg';
import saoPaulo from '../assets/Sao Paulo.jpg';
import salvador from '../assets/Salvador.jpg';
import fernandoDeNoronha from '../assets/Fernando de Noronha.jpg';
import banff from '../assets/Banff.jpg';
import vancouver from '../assets/Vancouver.jpg';
import toronto from '../assets/Toronto.jpg';
import quebecCity from '../assets/Quebec City.jpg';
import machuPicchu from '../assets/Machu Picchu.jpg';
import cusco from '../assets/Cusco.jpg';
import lima from '../assets/Lima.jpg';
import sacredValley from '../assets/Sacred Valley.jpg';
import buenosAires from '../assets/Buenos Aires.jpg';
import patagonia from '../assets/Patagonia.jpg';
import mendoza from '../assets/Mendoza.jpg';
import iguazuFalls from '../assets/Iguazu Falls.jpg';

// ===== Asia =====
import tokyo from '../assets/tokyo.jpg';
import kyoto from '../assets/kyoto.jpg';
import osaka from '../assets/Osaka.jpg';
import hokkaido from '../assets/Hokkaido.jpg';
import bangkok from '../assets/Bangkok.jpg';
import chiangMai from '../assets/Chiang Mai.jpg';
import phuket from '../assets/Phuket.jpg';
import krabi from '../assets/Krabi.jpg';
import bali from '../assets/Bali.jpg';
import jakarta from '../assets/Jakarta.jpg';
import yogyakarta from '../assets/Yogyakarta.jpg';
import komodoIsland from '../assets/Komodo Island.jpg';
import hanoi from '../assets/Hanoi.jpg';
import hoChiMinhCity from '../assets/Ho Chi Minh City.jpg';
import haLongBay from '../assets/Ha Long Bay.jpg';
import daNang from '../assets/Da Nang.jpg';
import seoul from '../assets/Seoul.jpg';
import busan from '../assets/Busan.jpg';
import jejuIsland from '../assets/Jeju Island.jpg';
import gyeongju from '../assets/Gyeongju.jpg';
import newDelhi from '../assets/New Delhi.jpg';
import jaipur from '../assets/Jaipur.jpg';
import goa from '../assets/Goa.jpg';
import kerala from '../assets/Kerala.jpg';

// ===== Africa =====
import marrakech from '../assets/Marrakech.jpg';
import casablanca from '../assets/Casablanca.jpg';
import fez from '../assets/Fez.jpg';
import chefchaouen from '../assets/Chefchaouen.jpg';
import capeTown from '../assets/Cape Town.jpg';
import johannesburg from '../assets/Johannesburg.jpg';
import krugerNationalPark from '../assets/Kruger National Park.jpg';
import stellenbosch from '../assets/Stellenbosch.jpg';
import cairo from '../assets/Cairo.jpg';
import luxor from '../assets/Luxor.jpg';
import aswan from '../assets/Aswan.jpg';
import sharmElSheikh from '../assets/Sharm El Sheikh.jpg';
import serengeti from '../assets/Serengeti.jpg';
import zanzibar from '../assets/Zanzibar.jpg';
import kilimanjaro from '../assets/Kilimanjaro.jpg';
import ngorongoro from '../assets/Ngorongoro.jpg';
import nairobi from '../assets/Nairobi.jpg';
import maasaiMara from '../assets/Maasai Mara.jpg';
import mombasa from '../assets/Mombasa.jpg';
import amboseli from '../assets/Amboseli.jpg';

// ===== Oceania =====
import sydney from '../assets/Sydney.jpg';
import melbourne from '../assets/Melbourne.jpg';
import greatBarrierReef from '../assets/Great Barrier Reef.jpg';
import uluru from '../assets/Uluru.jpg';
import queenstown from '../assets/queenstowm.jpg';
import auckland from '../assets/Auckland.jpg';
import rotorua from '../assets/Rotorua.jpg';
import milfordSound from '../assets/Milford Sound.jpg';
import nadi from '../assets/nadi.jpg';
import denarau from '../assets/Denarau.jpg';
import yasawaIslands from '../assets/Yasawa Islands.jpg';
import coralCoast from '../assets/Coral Coast.jpg';
import boraBora from '../assets/Bora Bora.jpg';
import tahiti from '../assets/Tahiti.jpg';
import moorea from '../assets/Moorea.jpg';
import rangiroa from '../assets/Rangiroa.jpg';

// ===== Middle East =====
import dubai from '../assets/Dubai.jpg';
import abuDhabi from '../assets/Abu Dhabi.jpg';
import sharjah from '../assets/Sharjah.jpg';
import rasAlKhaimah from '../assets/Ras Al Khaimah.jpg';
import istanbul from '../assets/Istanbul.jpg';
import cappadocia from '../assets/Cappadocia.jpg';
import antalya from '../assets/Antalya.jpg';
import pamukkale from '../assets/Pamukkale.jpg';
import petra from '../assets/Petra.jpg';
import amman from '../assets/Amman.jpg';
import wadiRum from '../assets/Wadi Rum.jpg';
import deadSea from '../assets/Dead Sea.jpg';
import muscat from '../assets/Muscat.jpg';
import salalah from '../assets/Salalah.jpg';
import nizwa from '../assets/Nizwa.jpg';
import wahibaSands from '../assets/Wahiba Sands.jpg';

function AllDestinations() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Randomly ordered list (no continent grouping)
  const allSpots = [
    { id: "kyoto", name: "Kyoto", country: "Japan", continent: "Asia", description: "Timeless temples, serene gardens, and geisha traditions.", rating: 4.9, reviews: "1,876", image: kyoto },
    { id: "petra", name: "Petra", country: "Jordan", continent: "Middle East", description: "Ancient rose-red city carved into desert cliffs.", rating: 4.9, reviews: "1,987", image: petra },
    { id: "banff", name: "Banff", country: "Canada", continent: "Americas", description: "Turquoise lakes surrounded by majestic Rocky Mountains.", rating: 4.9, reviews: "1,432", image: banff },
    { id: "santorini", name: "Santorini", country: "Greece", continent: "Europe", description: "Iconic sunsets, whitewashed villages, and crystal-clear waters.", rating: 4.8, reviews: "1,246", image: santorini },
    { id: "bora-bora", name: "Bora Bora", country: "French Polynesia", continent: "Oceania", description: "Overwater bungalows over impossibly blue lagoons.", rating: 4.9, reviews: "1,765", image: boraBora },
    { id: "serengeti", name: "Serengeti", country: "Tanzania", continent: "Africa", description: "Endless plains famous for the Great Migration.", rating: 4.9, reviews: "1,765", image: serengeti },
    { id: "machu-picchu", name: "Machu Picchu", country: "Peru", continent: "Americas", description: "Legendary Incan citadel high in the Andes Mountains.", rating: 4.9, reviews: "2,103", image: machuPicchu },
    { id: "cappadocia", name: "Cappadocia", country: "Turkey", continent: "Middle East", description: "Surreal landscapes and unforgettable hot air balloon rides.", rating: 4.9, reviews: "1,876", image: cappadocia },
    { id: "great-barrier-reef", name: "Great Barrier Reef", country: "Australia", continent: "Oceania", description: "World's largest coral reef system, teeming with life.", rating: 4.9, reviews: "1,876", image: greatBarrierReef },
    { id: "amalfi-coast", name: "Amalfi Coast", country: "Italy", continent: "Europe", description: "Dramatic cliffs, seaside villages, and breathtaking views.", rating: 4.9, reviews: "1,289", image: amalfiCoast },
    { id: "kruger-national-park", name: "Kruger National Park", country: "South Africa", continent: "Africa", description: "World-renowned safari with the Big Five.", rating: 4.9, reviews: "1,654", image: krugerNationalPark },
    { id: "queenstown", name: "Queenstown", country: "New Zealand", continent: "Oceania", description: "Adventure capital surrounded by dramatic mountains.", rating: 4.9, reviews: "1,543", image: queenstown },
    { id: "ha-long-bay", name: "Ha Long Bay", country: "Vietnam", continent: "Asia", description: "Emerald waters dotted with dramatic limestone islands.", rating: 4.9, reviews: "1,765", image: haLongBay },
    { id: "wadi-rum", name: "Wadi Rum", country: "Jordan", continent: "Middle East", description: "Otherworldly desert valley of red sand and towering cliffs.", rating: 4.9, reviews: "1,321", image: wadiRum },
    { id: "fernando-de-noronha", name: "Fernando de Noronha", country: "Brazil", continent: "Americas", description: "Untouched island paradise with crystal-clear waters.", rating: 4.9, reviews: "654", image: fernandoDeNoronha },
    { id: "milford-sound", name: "Milford Sound", country: "New Zealand", continent: "Oceania", description: "Breathtaking fiord framed by towering cliffs.", rating: 4.9, reviews: "1,321", image: milfordSound },
    { id: "komodo-island", name: "Komodo Island", country: "Indonesia", continent: "Asia", description: "Home to the legendary Komodo dragon and pink beaches.", rating: 4.9, reviews: "876", image: komodoIsland },
    { id: "ngorongoro", name: "Ngorongoro", country: "Tanzania", continent: "Africa", description: "A volcanic crater teeming with incredible wildlife.", rating: 4.9, reviews: "987", image: ngorongoro },
    { id: "yasawa-islands", name: "Yasawa Islands", country: "Fiji", continent: "Oceania", description: "Remote turquoise lagoons and untouched beauty.", rating: 4.9, reviews: "876", image: yasawaIslands },
    { id: "patagonia", name: "Patagonia", country: "Argentina", continent: "Americas", description: "Dramatic glaciers, mountains, and untamed wilderness.", rating: 4.9, reviews: "1,098", image: patagonia },
    { id: "iguazu-falls", name: "Iguazú Falls", country: "Argentina", continent: "Americas", description: "Spectacular waterfalls straddling the Argentina-Brazil border.", rating: 4.9, reviews: "1,456", image: iguazuFalls },
    { id: "maasai-mara", name: "Maasai Mara", country: "Kenya", continent: "Africa", description: "Iconic safari destination and Maasai culture.", rating: 4.9, reviews: "1,654", image: maasaiMara },
    { id: "grand-canyon", name: "Grand Canyon", country: "United States", continent: "Americas", description: "Breathtaking natural wonder carved over millions of years.", rating: 4.9, reviews: "1,987", image: grandCanyon },
    { id: "tokyo", name: "Tokyo", country: "Japan", continent: "Asia", description: "Neon-lit streets, ancient temples, and cutting-edge culture.", rating: 4.8, reviews: "2,456", image: tokyo },
    { id: "dubai", name: "Dubai", country: "United Arab Emirates", continent: "Middle East", description: "Futuristic skyline, luxury shopping, and desert adventures.", rating: 4.8, reviews: "2,345", image: dubai },
    { id: "paris", name: "Paris", country: "France", continent: "Europe", description: "City of light, art, and romance.", rating: 4.8, reviews: "2,156", image: paris },
    { id: "bali", name: "Bali", country: "Indonesia", continent: "Asia", description: "Lush rice terraces, spiritual temples, and stunning beaches.", rating: 4.8, reviews: "2,543", image: bali },
    { id: "rome", name: "Rome", country: "Italy", continent: "Europe", description: "Timeless ruins, historic streets, and culinary delights.", rating: 4.8, reviews: "1,512", image: rome },
    { id: "sydney", name: "Sydney", country: "Australia", continent: "Oceania", description: "Iconic harbor, opera house, and vibrant city beaches.", rating: 4.8, reviews: "2,134", image: sydney },
    { id: "cape-town", name: "Cape Town", country: "South Africa", continent: "Africa", description: "Table Mountain views, vineyards, and coastal beauty.", rating: 4.8, reviews: "2,145", image: capeTown },
    { id: "istanbul", name: "Istanbul", country: "Turkey", continent: "Middle East", description: "Where East meets West, rich in history and culture.", rating: 4.8, reviews: "2,134", image: istanbul },
    { id: "crete", name: "Crete", country: "Greece", continent: "Europe", description: "Stunning landscapes, rich history, and warm hospitality.", rating: 4.8, reviews: "1,376", image: crete },
    { id: "zanzibar", name: "Zanzibar", country: "Tanzania", continent: "Africa", description: "Spice island beaches with turquoise waters.", rating: 4.8, reviews: "1,543", image: zanzibar },
    { id: "tulum", name: "Tulum", country: "Mexico", continent: "Americas", description: "Ancient ruins overlooking pristine turquoise beaches.", rating: 4.8, reviews: "1,298", image: tulum },
    { id: "seville", name: "Seville", country: "Spain", continent: "Europe", description: "Flamenco, historic palaces, and Andalusian spirit.", rating: 4.8, reviews: "976", image: seville },
    { id: "krabi", name: "Krabi", country: "Thailand", continent: "Asia", description: "Dramatic limestone cliffs and crystal-clear lagoons.", rating: 4.8, reviews: "1,234", image: krabi },
    { id: "porto", name: "Porto", country: "Portugal", continent: "Europe", description: "Port wine, riverside beauty, and rich culture.", rating: 4.8, reviews: "1,112", image: porto },
    { id: "algarve", name: "Algarve", country: "Portugal", continent: "Europe", description: "Golden cliffs, hidden beaches, and sunshine.", rating: 4.8, reviews: "1,278", image: algarve },
    { id: "dubrovnik", name: "Dubrovnik", country: "Croatia", continent: "Europe", description: "Medieval walls and Adriatic beauty.", rating: 4.8, reviews: "1,456", image: dubrovnik },
    { id: "hokkaido", name: "Hokkaido", country: "Japan", continent: "Asia", description: "Snowy landscapes, hot springs, and fresh seafood.", rating: 4.8, reviews: "1,098", image: hokkaido },
    { id: "jeju-island", name: "Jeju Island", country: "South Korea", continent: "Asia", description: "Volcanic landscapes, waterfalls, and lush nature trails.", rating: 4.8, reviews: "1,432", image: jejuIsland },
    { id: "chefchaouen", name: "Chefchaouen", country: "Morocco", continent: "Africa", description: "The magical blue city nestled in the Rif Mountains.", rating: 4.8, reviews: "1,234", image: chefchaouen },
    { id: "luxor", name: "Luxor", country: "Egypt", continent: "Africa", description: "Open-air museum of temples and pharaonic tombs.", rating: 4.8, reviews: "1,321", image: luxor },
    { id: "kilimanjaro", name: "Kilimanjaro", country: "Tanzania", continent: "Africa", description: "Africa's tallest peak and a bucket-list trek.", rating: 4.8, reviews: "1,098", image: kilimanjaro },
    { id: "uluru", name: "Uluru", country: "Australia", continent: "Oceania", description: "Sacred red monolith rising from the outback.", rating: 4.8, reviews: "1,432", image: uluru },
    { id: "moorea", name: "Moorea", country: "French Polynesia", continent: "Oceania", description: "Dramatic peaks and vibrant coral gardens.", rating: 4.8, reviews: "876", image: moorea },
    { id: "rangiroa", name: "Rangiroa", country: "French Polynesia", continent: "Oceania", description: "World-class diving in a vast coral atoll.", rating: 4.8, reviews: "654", image: rangiroa },
    { id: "wahiba-sands", name: "Wahiba Sands", country: "Oman", continent: "Middle East", description: "Vast golden dunes and authentic Bedouin desert camps.", rating: 4.8, reviews: "765", image: wahibaSands },
    { id: "kerala", name: "Kerala", country: "India", continent: "Asia", description: "Tranquil backwaters and lush tropical scenery.", rating: 4.8, reviews: "1,098", image: kerala },
    { id: "sacred-valley", name: "Sacred Valley", country: "Peru", continent: "Americas", description: "Stunning Andean landscapes and ancient ruins.", rating: 4.8, reviews: "765", image: sacredValley },
    { id: "amboseli", name: "Amboseli", country: "Kenya", continent: "Africa", description: "Elephant herds framed by Mount Kilimanjaro.", rating: 4.8, reviews: "765", image: amboseli },
    { id: "mykonos", name: "Mykonos", country: "Greece", continent: "Europe", description: "Vibrant nightlife, golden beaches, and Cycladic charm.", rating: 4.7, reviews: "1,105", image: mykonos },
    { id: "florence", name: "Florence", country: "Italy", continent: "Europe", description: "Renaissance art, architecture, and Tuscan elegance.", rating: 4.7, reviews: "1,034", image: florence },
    { id: "venice", name: "Venice", country: "Italy", continent: "Europe", description: "Romantic canals, historic palaces, and timeless beauty.", rating: 4.7, reviews: "1,198", image: venice },
    { id: "barcelona", name: "Barcelona", country: "Spain", continent: "Europe", description: "Stunning architecture and Mediterranean charm.", rating: 4.7, reviews: "1,654", image: barcelona },
    { id: "lisbon", name: "Lisbon", country: "Portugal", continent: "Europe", description: "Historic charm, hills, and pastel colors.", rating: 4.7, reviews: "1,345", image: lisbon },
    { id: "mallorca", name: "Mallorca", country: "Spain", continent: "Europe", description: "Beautiful beaches, crystal waters, and island vibes.", rating: 4.7, reviews: "1,089", image: mallorca },
    { id: "hvar", name: "Hvar", country: "Croatia", continent: "Europe", description: "Lavender fields, beaches, and nightlife.", rating: 4.7, reviews: "876", image: hvar },
    { id: "provence", name: "Provence", country: "France", continent: "Europe", description: "Lavender fields, charming villages, and perfect weather.", rating: 4.7, reviews: "845", image: provence },
    { id: "madeira", name: "Madeira", country: "Portugal", continent: "Europe", description: "Lush landscapes and dramatic coastal views.", rating: 4.7, reviews: "865", image: madeira },
    { id: "new-york", name: "New York", country: "United States", continent: "Americas", description: "Iconic skyline, world-class culture, and nonstop energy.", rating: 4.7, reviews: "2,341", image: newYork },
    { id: "cancun", name: "Cancún", country: "Mexico", continent: "Americas", description: "White-sand beaches and vibrant Caribbean waters.", rating: 4.7, reviews: "1,654", image: cancun },
    { id: "rio-de-janeiro", name: "Rio de Janeiro", country: "Brazil", continent: "Americas", description: "Iconic beaches, Christ the Redeemer, and Carnival spirit.", rating: 4.7, reviews: "1,765", image: rioDeJaneiro },
    { id: "vancouver", name: "Vancouver", country: "Canada", continent: "Americas", description: "Coastal beauty meets vibrant, modern city life.", rating: 4.7, reviews: "1,298", image: vancouver },
    { id: "cusco", name: "Cusco", country: "Peru", continent: "Americas", description: "Ancient capital blending Incan and colonial history.", rating: 4.7, reviews: "1,234", image: cusco },
    { id: "quebec-city", name: "Quebec City", country: "Canada", continent: "Americas", description: "Old-world European charm in the heart of Canada.", rating: 4.7, reviews: "876", image: quebecCity },
    { id: "mendoza", name: "Mendoza", country: "Argentina", continent: "Americas", description: "World-class wine country nestled against the Andes.", rating: 4.7, reviews: "876", image: mendoza },
    { id: "chiang-mai", name: "Chiang Mai", country: "Thailand", continent: "Asia", description: "Mountain temples, elephant sanctuaries, and old-world charm.", rating: 4.7, reviews: "1,543", image: chiangMai },
    { id: "yogyakarta", name: "Yogyakarta", country: "Indonesia", continent: "Asia", description: "Ancient temples and the heart of Javanese culture.", rating: 4.7, reviews: "1,098", image: yogyakarta },
    { id: "da-nang", name: "Da Nang", country: "Vietnam", continent: "Asia", description: "Golden beaches and the iconic Golden Bridge nearby.", rating: 4.7, reviews: "987", image: daNang },
    { id: "seoul", name: "Seoul", country: "South Korea", continent: "Asia", description: "Futuristic skyline meets centuries-old royal palaces.", rating: 4.7, reviews: "1,987", image: seoul },
    { id: "jaipur", name: "Jaipur", country: "India", continent: "Asia", description: "The Pink City, rich with palaces and vibrant bazaars.", rating: 4.7, reviews: "1,321", image: jaipur },
    { id: "marrakech", name: "Marrakech", country: "Morocco", continent: "Africa", description: "Bustling souks, vibrant medinas, and desert charm.", rating: 4.7, reviews: "1,876", image: marrakech },
    { id: "aswan", name: "Aswan", country: "Egypt", continent: "Africa", description: "Nile River views and timeless Nubian culture.", rating: 4.7, reviews: "876", image: aswan },
    { id: "stellenbosch", name: "Stellenbosch", country: "South Africa", continent: "Africa", description: "Historic wine country surrounded by mountains.", rating: 4.7, reviews: "876", image: stellenbosch },
    { id: "melbourne", name: "Melbourne", country: "Australia", continent: "Oceania", description: "Coffee culture, laneways, and creative energy.", rating: 4.7, reviews: "1,654", image: melbourne },
    { id: "rotorua", name: "Rotorua", country: "New Zealand", continent: "Oceania", description: "Geothermal wonders and rich Maori culture.", rating: 4.7, reviews: "987", image: rotorua },
    { id: "denarau", name: "Denarau", country: "Fiji", continent: "Oceania", description: "Resort island paradise with golden beaches.", rating: 4.7, reviews: "1,098", image: denarau },
    { id: "tahiti", name: "Tahiti", country: "French Polynesia", continent: "Oceania", description: "Lush volcanic island with black sand beaches.", rating: 4.7, reviews: "987", image: tahiti },
    { id: "abu-dhabi", name: "Abu Dhabi", country: "United Arab Emirates", continent: "Middle East", description: "Grand mosques, cultural landmarks, and coastal elegance.", rating: 4.7, reviews: "1,543", image: abuDhabi },
    { id: "pamukkale", name: "Pamukkale", country: "Turkey", continent: "Middle East", description: "Dazzling white travertine terraces and thermal pools.", rating: 4.7, reviews: "987", image: pamukkale },
    { id: "dead-sea", name: "Dead Sea", country: "Jordan", continent: "Middle East", description: "Float in the mineral-rich waters of the lowest point on Earth.", rating: 4.7, reviews: "1,098", image: deadSea },
    { id: "muscat", name: "Muscat", country: "Oman", continent: "Middle East", description: "Whitewashed architecture set against rugged mountains.", rating: 4.7, reviews: "987", image: muscat },
    { id: "athens", name: "Athens", country: "Greece", continent: "Europe", description: "Ancient history, iconic landmarks, and vibrant culture.", rating: 4.6, reviews: "982", image: athens },
    { id: "nice", name: "Nice", country: "France", continent: "Europe", description: "Sun, sea, and Mediterranean elegance.", rating: 4.6, reviews: "987", image: nice },
    { id: "bordeaux", name: "Bordeaux", country: "France", continent: "Europe", description: "World-class wines and refined living.", rating: 4.6, reviews: "712", image: bordeaux },
    { id: "madrid", name: "Madrid", country: "Spain", continent: "Europe", description: "Vibrant capital with world-class art and energy.", rating: 4.6, reviews: "1,203", image: madrid },
    { id: "split", name: "Split", country: "Croatia", continent: "Europe", description: "Roman history meets beach life.", rating: 4.6, reviews: "987", image: split },
    { id: "miami", name: "Miami", country: "United States", continent: "Americas", description: "Vibrant nightlife, art deco charm, and turquoise waters.", rating: 4.6, reviews: "1,542", image: miami },
    { id: "mexico-city", name: "Mexico City", country: "Mexico", continent: "Americas", description: "Rich history, world-class food, and vibrant culture.", rating: 4.6, reviews: "1,432", image: mexicoCity },
    { id: "salvador", name: "Salvador", country: "Brazil", continent: "Americas", description: "Colorful colonial architecture and Afro-Brazilian culture.", rating: 4.6, reviews: "987", image: salvador },
    { id: "toronto", name: "Toronto", country: "Canada", continent: "Americas", description: "Diverse culture, iconic skyline, and lakeside charm.", rating: 4.6, reviews: "1,543", image: toronto },
    { id: "buenos-aires", name: "Buenos Aires", country: "Argentina", continent: "Americas", description: "Passionate tango, grand architecture, and vibrant streets.", rating: 4.6, reviews: "1,321", image: buenosAires },
    { id: "osaka", name: "Osaka", country: "Japan", continent: "Asia", description: "Vibrant street food scene and lively nightlife.", rating: 4.6, reviews: "1,432", image: osaka },
    { id: "bangkok", name: "Bangkok", country: "Thailand", continent: "Asia", description: "Bustling markets, ornate temples, and vibrant street life.", rating: 4.6, reviews: "2,134", image: bangkok },
    { id: "hanoi", name: "Hanoi", country: "Vietnam", continent: "Asia", description: "Charming Old Quarter and centuries of rich history.", rating: 4.6, reviews: "1,432", image: hanoi },
    { id: "busan", name: "Busan", country: "South Korea", continent: "Asia", description: "Coastal city with beaches, temples, and fresh seafood.", rating: 4.6, reviews: "1,234", image: busan },
    { id: "goa", name: "Goa", country: "India", continent: "Asia", description: "Golden beaches, Portuguese heritage, and laid-back vibes.", rating: 4.6, reviews: "1,876", image: goa },
    { id: "gyeongju", name: "Gyeongju", country: "South Korea", continent: "Asia", description: "Open-air museum of ancient Silla dynasty treasures.", rating: 4.6, reviews: "654", image: gyeongju },
    { id: "fez", name: "Fez", country: "Morocco", continent: "Africa", description: "Ancient medina and the world's oldest university.", rating: 4.6, reviews: "1,098", image: fez },
    { id: "cairo", name: "Cairo", country: "Egypt", continent: "Africa", description: "Ancient pyramids meet a sprawling, lively capital.", rating: 4.6, reviews: "1,987", image: cairo },
    { id: "sharm-el-sheikh", name: "Sharm El Sheikh", country: "Egypt", continent: "Africa", description: "Red Sea diving and pristine coral reefs.", rating: 4.6, reviews: "1,432", image: sharmElSheikh },
    { id: "mombasa", name: "Mombasa", country: "Kenya", continent: "Africa", description: "Swahili coast beaches and historic Old Town.", rating: 4.6, reviews: "987", image: mombasa },
    { id: "auckland", name: "Auckland", country: "New Zealand", continent: "Oceania", description: "City of sails set between two stunning harbors.", rating: 4.6, reviews: "1,098", image: auckland },
    { id: "coral-coast", name: "Coral Coast", country: "Fiji", continent: "Oceania", description: "Palm-fringed beaches and vibrant coral reefs.", rating: 4.6, reviews: "654", image: coralCoast },
    { id: "antalya", name: "Antalya", country: "Turkey", continent: "Middle East", description: "Turquoise coastline and ancient Roman ruins.", rating: 4.6, reviews: "1,234", image: antalya },
    { id: "ras-al-khaimah", name: "Ras Al Khaimah", country: "United Arab Emirates", continent: "Middle East", description: "Rugged mountains meet pristine desert coastline.", rating: 4.6, reviews: "654", image: rasAlKhaimah },
    { id: "salalah", name: "Salalah", country: "Oman", continent: "Middle East", description: "Lush greenery and monsoon-fed waterfalls.", rating: 4.6, reviews: "654", image: salalah },
    { id: "nizwa", name: "Nizwa", country: "Oman", continent: "Middle East", description: "Ancient fort city famous for its traditional souk.", rating: 4.6, reviews: "543", image: nizwa },
    { id: "los-angeles", name: "Los Angeles", country: "United States", continent: "Americas", description: "Sunny beaches, Hollywood glamour, and endless entertainment.", rating: 4.5, reviews: "1,876", image: losAngeles },
    { id: "guadalajara", name: "Guadalajara", country: "Mexico", continent: "Americas", description: "Birthplace of mariachi and tequila, full of tradition.", rating: 4.5, reviews: "876", image: guadalajara },
    { id: "sao-paulo", name: "São Paulo", country: "Brazil", continent: "Americas", description: "Bustling metropolis with incredible food and nightlife.", rating: 4.5, reviews: "1,321", image: saoPaulo },
    { id: "lima", name: "Lima", country: "Peru", continent: "Americas", description: "Coastal capital renowned for world-class cuisine.", rating: 4.5, reviews: "987", image: lima },
    { id: "phuket", name: "Phuket", country: "Thailand", continent: "Asia", description: "Tropical beaches and lively island nightlife.", rating: 4.5, reviews: "1,876", image: phuket },
    { id: "ho-chi-minh-city", name: "Ho Chi Minh City", country: "Vietnam", continent: "Asia", description: "Fast-paced energy blending history and modern life.", rating: 4.5, reviews: "1,321", image: hoChiMinhCity },
    { id: "new-delhi", name: "New Delhi", country: "India", continent: "Asia", description: "Historic monuments and vibrant, chaotic city energy.", rating: 4.4, reviews: "1,543", image: newDelhi },
    { id: "jakarta", name: "Jakarta", country: "Indonesia", continent: "Asia", description: "Dynamic capital blending modern life and rich heritage.", rating: 4.4, reviews: "987", image: jakarta },
    { id: "casablanca", name: "Casablanca", country: "Morocco", continent: "Africa", description: "Modern coastal city with grand Moorish architecture.", rating: 4.4, reviews: "987", image: casablanca },
    { id: "johannesburg", name: "Johannesburg", country: "South Africa", continent: "Africa", description: "Vibrant culture, history, and urban energy.", rating: 4.4, reviews: "987", image: johannesburg },
    { id: "nairobi", name: "Nairobi", country: "Kenya", continent: "Africa", description: "Urban energy bordering wild savanna landscapes.", rating: 4.4, reviews: "876", image: nairobi },
    { id: "nadi", name: "Nadi", country: "Fiji", continent: "Oceania", description: "Gateway to Fiji with vibrant markets and culture.", rating: 4.5, reviews: "765", image: nadi },
    { id: "sharjah", name: "Sharjah", country: "United Arab Emirates", continent: "Middle East", description: "Cultural capital with museums and traditional souks.", rating: 4.5, reviews: "876", image: sharjah },
    { id: "amman", name: "Amman", country: "Jordan", continent: "Middle East", description: "Modern capital layered over ancient Roman ruins.", rating: 4.5, reviews: "876", image: amman },
    { id: "zagreb", name: "Zagreb", country: "Croatia", continent: "Europe", description: "Charming capital with European elegance.", rating: 4.5, reviews: "654", image: zagreb },
  ];

  const filters = ["All", "Europe", "Americas", "Asia", "Africa", "Oceania", "Middle East"];

  const filteredSpots =
    activeFilter === "All"
      ? allSpots
      : allSpots.filter((spot) => spot.continent === activeFilter);

  return (
    <section className="destinations-page">
      <div className="destinations-container">
        {/* Page Header */}
        <div className="destinations-header">
          <h1>All Destinations</h1>
          <p>Browse every destination in one place, or filter by continent to narrow it down.</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Spots Grid */}
        <div className="spots-grid">
          {filteredSpots.map((spot) => (
            <Link
              to={`/destinations/${spot.id}`}
              key={spot.id}
              className="destination-card"
            >
              <div className="card-image">
                <img src={spot.image} alt={spot.name} />
                <span className="country-badge">{spot.country.toUpperCase()}</span>
              </div>

              <div className="card-content">
                <h3>{spot.name}</h3>
                <p>{spot.description}</p>
                <div className="rating">
                  <span className="star">★</span>
                  <span>{spot.rating}</span>
                  <span className="reviews">({spot.reviews} reviews)</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllDestinations;