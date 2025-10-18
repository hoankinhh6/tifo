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
    <div className="bg-gray-900 min-h-screen font-sans">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <Header content={siteData.header} />
      <main>
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
