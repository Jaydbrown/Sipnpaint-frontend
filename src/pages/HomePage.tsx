// src/pages/HomePage.tsx
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import Interactive3DPainting from '@/components/home/HyperRealisticPaintingExperience';
import PackagesSection from '@/components/home/PackagesSection';
import LocationsSection from '@/components/home/LocationsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <Interactive3DPainting />
      <PackagesSection />
      <LocationsSection />
    </div>
  );
};

export default HomePage;