import Link from 'next/link';
import Image from 'next/image';
import FocusPullCarousel from '@/components/ui/focus-pull-carousel';


const tools = [
  {
    number: '01',
    category: 'Editorial',
    title: 'Article titles',
    description: 'Give your next article a sharper opening line.',
    href: '/ai-examples/article-title-generator',
    color: '#f0b887',
    size: 'md:col-span-4',
  },
  {
    number: '02',
    category: 'Data',
    title: 'Spreadsheets',
    description: 'Shape rough instructions into useful spreadsheet output.',
    href: '/ai-examples/spreadsheet-generator',
    color: '#a9c5ff',
    size: 'md:col-span-4',
  },
  {
    number: '03',
    category: 'Interviewing',
    title: 'Interview questions',
    description: 'Prepare thoughtful questions for the conversation ahead.',
    href: '/ai-examples/interview-question-generator',
    color: '#e9a7c7',
    size: 'md:col-span-4',
  },
];

const platformFeatures = [
  {
    number: '01',
    title: 'A real AI foundation',
    description:
      'Start with an OpenAI integration and working examples, not a collection of empty screens.',
  },
  {
    number: '02',
    title: 'Product essentials included',
    description:
      'Authentication, database wiring, and a content-ready blog help move your product forward.',
  },
  {
    number: '03',
    title: 'Built for your next step',
    description:
      'A Next.js and TypeScript codebase gives you a clear foundation to customize and grow.',
  },
];

function ArrowUpRight() {
  return (
    <svg
      aria-hidden='true'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.7'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='size-4'
    >
      <path d='M7 17 17 7M9 7h8v8' />
    </svg>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <div className='mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between'>
      <div className='max-w-2xl'>
        <div className='flex items-center gap-3 text-[11px] tracking-[0.28em] text-white/45 uppercase'>
          <span className='h-px w-8 bg-white/20' />
          {eyebrow}
        </div>
        <h2 className='mt-5 text-3xl leading-[1.05] font-medium tracking-tight text-white sm:text-4xl lg:text-5xl'>
          {title}{' '}
          <span className='font-serif font-normal text-white/65 italic'>
            {accent}
          </span>
        </h2>
        <p className='mt-4 max-w-xl text-sm leading-7 text-white/50 sm:text-base'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function AIProductLanding() {
  return (
    <main
      data-slot='ai-product-landing'
      className='overflow-hidden bg-[#0a0a0b] text-[#f5f5f5]'
    >
      <section
        id='home'
        className='relative flex min-h-[min(920px,100svh)] scroll-mt-24 flex-col items-center justify-center overflow-hidden px-5 pt-32 pb-20 text-center sm:px-8'
      >
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at 50% 20%, rgba(81, 93, 150, 0.2), transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(54, 72, 120, 0.12), transparent 45%)',
          }}
        />
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 top-0 h-[68%] opacity-[0.16]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
            maskImage: 'linear-gradient(to bottom, black, transparent 88%)',
          }}
        />

        <div className='relative z-10 mx-auto flex max-w-5xl flex-col items-center'>
          <span className='mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] tracking-[0.24em] text-white/60 uppercase sm:text-xs'>
            <span className='size-1.5 rounded-full bg-[#9cb7e5] shadow-[0_0_12px_#9cb7e5]' />
            Your next investment
          </span>
          <Image
            src='/images/hero/formal-portrait.png'
            alt='Formal portrait'
            width={183}
            height={235}
            className='mb-7 rounded-xl object-cover'
          />
          <h1
            className='max-w-5xl leading-[0.98] font-medium tracking-[-0.055em] text-white'
            style={{ fontSize: 'clamp(1rem, 5vw, 6rem)' }}
          >
            Travis Burke
          </h1>
          <p className='mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8'>
          Marine Corps Veteran with expertise in web development, web design, networking, and satellite communications. Proficient in HTML, CSS, JavaScript, React.js, and Cisco networking devices.
          </p>
          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <Link
              href='/ai-examples'
              className='group inline-flex items-center gap-2 rounded-full bg-[#f3f3f0] px-6 py-3 text-sm font-medium text-[#111113] transition hover:bg-white'
            >
              Will be AI chat for contact
              <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div className='relative z-10 mx-auto mt-16 w-full max-w-5xl sm:mt-20'>
          <FocusPullCarousel
            height='clamp(360px, 48vw, 520px)'
            cardWidth='min(70vw, 720px)'
            background='#101012'
            ink='#f2efe8'
            className='rounded-[26px] border border-white/10 shadow-[0_40px_140px_rgba(0,0,0,.5)]'
            slides={[
              {
                image: '/images/hero/html-badge.png',
                title: 'HTML & CSS',
                caption: 'Professional Web Designer 2026-2029',
              },
              {
                image: '/images/hero/javascript-badge.webp',
                title: 'JavaScript',
                caption: 'Professional Developer 2026-2029',
              },
              {
                image: '/images/hero/react-badge.webp',
                title: 'React.js',
                caption: 'TBD',
              },
              {
                image: '/images/hero/mysql-badge.png',
                title: 'MySQL',
                caption: 'TBD',
              },
              {
                image: '/images/hero/python-badge.png',
                title: 'Python',
                caption: 'TBD',
              },
              
            ]}
          />
        </div>


      </section>

      <section
        id='tools'
        className='scroll-mt-24 border-t border-white/[0.06] bg-[#0a0a0b] py-20 sm:py-28'
      >
        <div className='mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12'>
          <SectionHeading
            eyebrow='Projects Portfolio'
            title='Professional & Personal Projects'
            accent=':'
            description='From sleek, professional websites to bold, creative designs, I bring your vision to life with a style tailored to your needs.'
          />

          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-12 md:gap-4'>
            {tools.map((tool) => (
              <Link
                key={tool.number}
                href={tool.href}
                className={`group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-[22px] border border-white/[0.09] bg-[#101012] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#131316] sm:min-h-72 sm:p-8 ${tool.size}`}
              >
                <span
                  aria-hidden='true'
                  className='pointer-events-none absolute -top-20 -right-16 size-64 rounded-full opacity-[0.12] blur-[70px] transition-opacity duration-500 group-hover:opacity-25'
                  style={{ backgroundColor: tool.color }}
                />
                <div className='relative flex items-center justify-between'>
                  <span className='text-[10px] tracking-[0.22em] text-white/40 uppercase'>
                    {tool.number} &nbsp; / &nbsp; {tool.category}
                  </span>
                  <span className='flex size-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition group-hover:border-white/25 group-hover:text-white'>
                    <ArrowUpRight />
                  </span>
                </div>
                <div className='relative mt-14'>
                  <h3 className='text-2xl font-medium tracking-tight text-white sm:text-3xl'>
                    {tool.title}
                  </h3>
                  <p className='mt-2 max-w-sm text-sm leading-6 text-white/45'>
                    {tool.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id='features'
        className='scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-28'
      >
        <div className='mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12'>
          <SectionHeading
            eyebrow='The foundation'
            title='More than a prompt.'
            accent='A product.'
            description='A thoughtful starting point for the pieces that make an AI idea feel like a real, shippable product.'
          />

          <div className='grid gap-3 md:grid-cols-3 md:gap-4'>
            {platformFeatures.map((feature) => (
              <article
                key={feature.number}
                className='rounded-[22px] border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8'
              >
                <span className='font-serif text-3xl text-white/35 italic'>
                  {feature.number}
                </span>
                <h3 className='mt-10 text-lg font-medium text-white/90'>
                  {feature.title}
                </h3>
                <p className='mt-3 text-sm leading-7 text-white/45'>
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id='pricing' className='scroll-mt-24 py-8'>
        <div className='relative mx-auto max-w-[1200px] overflow-hidden rounded-[28px] border border-white/10 bg-[#101012] px-6 py-16 text-center sm:px-12 sm:py-24'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 opacity-60'
            style={{
              background:
                'radial-gradient(ellipse at 50% 110%, rgba(102, 125, 183, 0.24), transparent 55%)',
            }}
          />
          <div className='relative mx-auto max-w-2xl'>
            <span className='text-[10px] tracking-[0.28em] text-white/45 uppercase'>
              Make the next move
            </span>
            <h2 className='mt-5 text-4xl leading-tight font-medium tracking-tight text-white sm:text-6xl'>
              Start with an idea.
              <br />
              Leave with{' '}
              <span className='font-serif text-white/65 italic'>
                a launchpad.
              </span>
            </h2>
            <p className='mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50 sm:text-base'>
              Explore the examples, find your starting point, and shape the
              foundation around your product.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
