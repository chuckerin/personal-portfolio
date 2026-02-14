import { ChevronDown } from 'lucide-react';
import { highlights } from '../data/highlights';

export const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                About Me
              </span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
              Building the future,
              <span className='font-serif italic font-normal text-white'>
                {' '}
                one component at a time.
              </span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I'm a passionate software engineer with over 29 years of
                experience crafting digital products that make a difference. My
                journey started as a Windows application developer for the US
                Air Force, and it has evolved into a deep expertise in modern
                full stack technologies.
              </p>
              <p>
                I specialize in React & TypeScript for the front end, Java &
                Spring Boot for the middle Tier, and MongoDB, MySQL, &
                PostgreSQL for the back end. My approach combines technical
                excellence with a keen eye for design and user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
            <div className='glass rounded-2xl p6 glow-border animate-fade-in animation-delay-300'>
              <p className='text-lg font-medium italic text-foreground'>
                "My mission is to create digital experiences that are not just
                functional, but truly delightful - products that users are
                excited to use and are easy for developers to maintain"
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className='glass p-6 rounded-2xl animate-fade-in'
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20'>
                  <item.icon className='w6 h6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className='absolute bottom-8 left-1/2 -translate-x-1/2 
        animate-fade-in animation-delay-800'
      >
        <a
          href='#projects'
          className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
        >
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <ChevronDown className='w-6 h-6 animate-bounce' />
        </a>
      </div>
    </section>
  );
};
