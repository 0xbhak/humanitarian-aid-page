import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Mission from '../components/Mission';
import DistributionGrid from '../components/DistributionGrid';
import NewsFeed from '../components/NewsFeed';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      {/* Hero Section with Relative Stats Bar */}
      <section className="relative">
        <Hero />
        <StatsBar />
      </section>

      <section>
        <Mission />
      </section>

      <section>
        <DistributionGrid />
      </section>

      <section>
        <NewsFeed />
      </section>
      <Footer />
    </>
  );
}
