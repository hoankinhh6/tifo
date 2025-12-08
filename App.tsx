import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
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
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

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

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc026d3, // Fuchsia 600 - Slightly deeper for elegance
        backgroundColor: 0x020617, // Slate 950
        points: 10.00, // Reduced density
        maxDistance: 24.00, // Longer connections
        spacing: 20.00, // More space between points
        showDots: true
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  if (route === "#/admin") {
    return <Admin data={siteData} setData={setSiteData} />;
  }

  return (
    <div className="relative min-h-screen font-sans bg-transparent text-slate-50 selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Vanta.js Background */}
      <div ref={vantaRef} className="fixed inset-0 -z-20 h-full w-full opacity-60" />

      {/* Stronger Overlay for Content Readability */}
      <div className="fixed inset-0 -z-10 h-full w-full pointer-events-none bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950/90"></div>

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
