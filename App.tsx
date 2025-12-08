import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import VideoSection from "./components/VideoSection";
import VideoLibrary from "./components/VideoLibrary";
import Download from "./components/Download";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import { defaultData, SiteData, getDynamicDownloadData } from "./data";

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);
  const [siteData, setSiteData] = useState<SiteData>(() => {
    try {
      const savedData = localStorage.getItem("siteData");
      return savedData ? JSON.parse(savedData) : defaultData;
    } catch (error) {
      console.error("Failed to parse site data from localStorage", error);
      return defaultData;
    }
  });
  const [dynamicDownloadData, setDynamicDownloadData] = useState(
    defaultData.download
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Load dynamic download data on component mount
  useEffect(() => {
    const loadDynamicDownloadData = async () => {
      try {
        const dynamicData = await getDynamicDownloadData();
        if (dynamicData) {
          setDynamicDownloadData(dynamicData);
        }
      } catch (error) {
        console.error("Failed to load dynamic download data:", error);
        // Keep using defaultData.download as fallback
      }
    };

    loadDynamicDownloadData();
  }, []);

  if (route === "#/admin") {
    return <Admin data={siteData} setData={setSiteData} />;
  }

  return (
    <div className="relative min-h-screen font-sans bg-slate-950 text-slate-50 selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Premium Background System */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
        {/* Top Glow/Nebula Effect */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(192,38,211,0.15),rgba(255,255,255,0))]"></div>

        {/* Subtle Grid with Mask */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Ambient Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-fuchsia-900/10 to-transparent"></div>
      </div>

      <Header content={siteData.header} />

      <main className="relative z-10">
        <Hero content={siteData.hero} />
        <Features content={siteData.features} />
        <Stats content={siteData.stats} />
        <HowItWorks content={siteData.howItWorks} />
        <VideoSection content={siteData.videoSection} />
        <VideoLibrary content={siteData.videoLibrary} />
        <Download content={dynamicDownloadData} />
        <Testimonials content={siteData.testimonials} />
        <Pricing content={siteData.pricing} />
        <Contact content={siteData.contact} />
        <CTA content={siteData.cta} />
      </main>

      <Footer content={siteData.footer} />
    </div>
  );
};

export default App;
