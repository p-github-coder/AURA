import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navbar';
import Home from './pages/Home';
import Search from './components/SearchSection';
import PopularDestinations from './components/PopularDestinations';
import PlanWithEase from './components/PlanWithEase';
import StayInTouch from './components/StayInTouch';
import Footer from './components/Footer';

import AboutHero from './components/AboutHero';
import OurStory from './components/OurStory';
import AuraValue from './components/AuraValue';
import MeetTeam from './components/MeetTeam';
import Mission from './components/Mission';

import ExploreHero from './components/ExploreHero';
import BrowseCategory from './components/BrowseCategory';
import PopularRegions from './components/PopularRegions';
import TopExperiences from './components/TopExperiences';

import DiscoverHero from './components/DiscoverHero';
import FeaturedStories from './components/FeaturedStories';
import TravelGuides from './components/TravelGuides';
import Inspiration from './components/Inspiration';

import PlanHero from './components/PlanHero';
import StartPlanning from './components/StartPlanning';
import PopularTrip from './components/PopularTrip';
import PlanBelow from './components/PlanBelow';

import Regions from './pages/Regions';
import AllDestinations from './pages/AllDestinations';
import Descriptions from './pages/Descriptions';   // ← NEW

import Europe from './pages/continents/Europe';
import Americas from './pages/continents/Americas';
import Asia from './pages/continents/Asia';
import Africa from './pages/continents/Africa';
import Oceania from './pages/continents/Oceania';
import MiddleEast from './pages/continents/MiddleEast';

import ExploreResults from './pages/ExploreResults';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Search />
              <PopularDestinations />
              <PlanWithEase />
              <StayInTouch />
              <Footer />
            </>
          }
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={
            <>
              <AboutHero />
              <OurStory />
              <AuraValue />
              <MeetTeam />
              <Mission />
              <Footer />
            </>
          }
        />

        {/* EXPLORE */}
        <Route
          path="/explore"
          element={
            <>
              <ExploreHero />
              <BrowseCategory />
              <PopularRegions />
              <TopExperiences />
              <Footer variant="blue" />
            </>
          }
        />

        {/* DISCOVER */}
        <Route
          path="/discover"
          element={
            <>
              <DiscoverHero />
              <FeaturedStories />
              <TravelGuides />
              <Inspiration />
              <Footer variant="blue" />
            </>
          }
        />

        {/* PLAN */}
        <Route
          path="/plan"
          element={
            <>
              <PlanHero />
              <StartPlanning />
              <PopularTrip />
              <PlanBelow />
              <Footer variant="blue" />
            </>
          }
        />

        {/* ALL REGIONS - Overview Page (continents) */}
        <Route
          path="/destinations"
          element={
            <>
              <Regions />
              <Footer variant="blue" />
            </>
          }
        />

        {/* ALL DESTINATIONS - Flat spots page */}
        <Route
          path="/alldestinations"
          element={
            <>
              <AllDestinations />
              <Footer variant="blue" />
            </>
          }
        />

        {/* CONTINENT PAGES */}
        <Route
          path="/destinations/europe"
          element={
            <>
              <Europe />
              <Footer variant="blue" />
            </>
          }
        />
        <Route
          path="/destinations/americas"
          element={
            <>
              <Americas />
              <Footer variant="blue" />
            </>
          }
        />
        <Route
          path="/destinations/asia"
          element={
            <>
              <Asia />
              <Footer variant="blue" />
            </>
          }
        />
        <Route
          path="/destinations/africa"
          element={
            <>
              <Africa />
              <Footer variant="blue" />
            </>
          }
        />
        <Route
          path="/destinations/oceania"
          element={
            <>
              <Oceania />
              <Footer variant="blue" />
            </>
          }
        />
        <Route
          path="/destinations/middleeast"
          element={
            <>
              <MiddleEast />
              <Footer variant="blue" />
            </>
          }
        />

        {/* DESTINATION DETAIL PAGE */}
        <Route
          path="/destinations/:id"
          element={
            <>
              <Descriptions />
              <Footer variant="blue" />
            </>
          }
        />

        <Route
  path="/explore-results"
  element={
    <>
      <ExploreResults />
      <Footer variant="blue" />
    </>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;