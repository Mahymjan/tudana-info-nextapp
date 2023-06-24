import { Meta } from '../layout/Meta';
import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';
import { AboutSection } from './About';
import { DetailsSection } from './Features';
import { Home } from './Home';
import { VideoSection } from './Video';
import { Bouquets } from './Bouquets';
import { StrawberryBenefits } from './Benefits';
// import { RecipesCarousel } from './Recipes';
import { Partners } from './Parnters';
import { Footer } from './Footer';
import { OurTeam } from './OurTeam';
import {OurMission} from './OurMission'
import { CatalogsGallery } from '../gallery/CatalogsGallery';

const Base = () => (
  <div className="relative antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Home />
    <AboutSection />
    <DetailsSection/>
    <VideoSection />
    <CatalogsGallery />
    <Bouquets />
    <StrawberryBenefits />
    {/* <RecipesCarousel /> */}
    <OurTeam />
    <Partners />
    <OurMission />
    <Footer/>
  </div>
);

export { Base };
