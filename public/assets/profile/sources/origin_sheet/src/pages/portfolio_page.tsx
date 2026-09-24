import HeroSection from '../components/hero/HeroSection';
import TimelineSection from '../components/timeline/TimelineSection';
import './PortfolioPage.css';

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <HeroSection />
      <main className="portfolio-page__main">
        <TimelineSection />
      </main>
      <footer className="portfolio-page__footer">© {new Date().getFullYear()} Enes Demirağ</footer>
    </div>
  );
}
