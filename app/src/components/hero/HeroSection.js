import { Button } from '../ui/button';
import ShinyText from '../ShinyText';
import ColorBends from '../ColorBends';
const HeroSection = () => {
    return (<section className="h-[35rem] pt-40 w-full text-center flex-col relative bg-gray-200 dark:bg-background">
      <div className="z-10 relative space-y-6 flex flex-col h-full text-center items-center">
        <div className="space-y-6">
          <div>
            <ShinyText text="✨ Best Hosting Services " speed={2} delay={0} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left" yoyo={false} pauseOnHover={false} disabled={false}/>
            <h1 className="md:text-5xl sm:text-4xl text-3xl font-bungee leading-14">
              Where <span className="gradient">Performance</span> <br />
              Meets the Fire Power.
            </h1>
          </div>
          <p className="text-warp max-w-[40rem] text-center text-secondary-foreground/80 font-semibold text-md">
            FlameNodes is a modern game and cloud hosting platform focused on
            solutions for gamers, developers, and online communities.
          </p>

          <div className="space-x-8">
            <Button variant="great" size="great" className="cursor-pointer" onClick={() => {
            const pricingSection = document.getElementById('pricing');
            if (pricingSection) {
                pricingSection.scrollIntoView({ behavior: 'smooth' });
            }
        }}>
              Get Started
            </Button>
            <Button variant="secondary" size="great" className="text-md py-6 px-5 bg-secondary/40 backdrop-blur-xl border-secondary font-bold ">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute z-0 h-full w-full top-[0] ">
        <ColorBends rotation={90} speed={0.2} colors={['#ff2353']} transparent autoRotate={0} scale={2} frequency={1} warpStrength={1} mouseInfluence={1} parallax={0.5} noise={0.15} iterations={1} intensity={1.5} bandWidth={6}/>
      </div>
    </section>);
};
export default HeroSection;
//# sourceMappingURL=HeroSection.js.map