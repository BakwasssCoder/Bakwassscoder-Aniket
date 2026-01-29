import {
  ThemeToggleButton1,
  ThemeToggleButton2,
  ThemeToggleButton3,
  ThemeToggleButton4,
} from "@/components/ui/skiper-ui/skiper4";
import { useThemeToggle } from "@/components/ui/skiper-ui/skiper26";
import React from "react";

import Hero from "./components/Hero";
import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";
import Scroll3DText from "./components/Scroll3DText";
import { Skiper28 } from "@/components/ui/skiper-ui/skiper28";
import { SpringMouseFollow } from "@/components/ui/skiper-ui/skiper61";
import { Skiper62 } from "@/components/ui/skiper-ui/skiper62";
import ImageCard from "./components/ImageCard";
import GridCarousel from "./components/GridCarousel";
import FavSongs from "./components/FavSongs";
import SuffelCard from "./components/SuffelCard";
import HowerExpand from "./components/HowerExpand";
import MyDetails from "./components/MyDetails";
import Contributions from "./components/Contributions";
import TweetCard from "@/components/kokonutui/tweet-card";
import XCards from "./components/XCards";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import WhatIDo from "./components/WhatIDo";
import BusinessVentures from "./components/BusinessVentures";
import PhilosophyMission from "./components/PhilosophyMission";

const MainLandinPage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Education Section */}
      <section>
        <Education />
      </section>

      {/* What I Do Section */}
      <section>
        <WhatIDo />
      </section>

      {/* Tech Stack Stats */}
      <section>
        <MyDetails />
      </section>

      {/* Photo Gallery */}
      <section>
        <GridCarousel />
      </section>

      {/* Favorite Songs */}
      <section>
        <FavSongs />
      </section>

      {/* Favorites Carousel */}
      <section>
        <SuffelCard />
      </section>

      {/* Business Ventures */}
      <section id="projects">
        <BusinessVentures />
      </section>

      {/* GitHub Contributions */}
      <section id="contributions">
        <Contributions />
      </section>

      {/* Twitter Cards */}
      <section>
        <XCards />
      </section>

      {/* Philosophy & Mission */}
      <section>
        <PhilosophyMission />
      </section>

    </div>
  );
};

export default MainLandinPage;
