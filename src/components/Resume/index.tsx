const skills = [
  'Time Management',
  'Networking',
  'Troubleshooting',
  'Recordkeeping',
  'Adaptability',
  'Work Ethic',
  'Maintenance Management',
  'Communication',
  'Teamwork',
];

const education = [
  {
    title: 'General Education Development Test Certificate (GED)',
    detail: 'Cocoa, FL',
    year: '2021',
  },
  {
    title: 'Recruit Training, Marine Corps Recruit Depot',
    detail: 'San Diego, CA · 13 weeks of professional development training',
    year: '2022',
  },
  {
    title: 'Marine Combat Training Battalion, School of Infantry',
    detail: 'Camp Pendleton, CA · 4 weeks of technical training',
    year: '2022',
  },
  {
    title:
      'Intelligence Surveillance Reconnaissance (ISR) Systems Engineer Course',
    detail: 'San Angelo, TX · 6 months of technical training',
    year: '2022',
  },
];

const certifications = [
  'Intelligence Surveillance Reconnaissance (ISR) Systems Engineer Course Certificate',
  'HTML/CSS Web Designer Certification',
  'JavaScript Professional Developer Certification',
];

const Resume = () => {
  return (
    <main className='mx-auto max-w-[900px] px-5 pb-20 text-[#f5f5f5] sm:px-8 lg:px-12'>
      <header className='border-b border-white/10 pb-8'>
        <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl'>
          Travis Burke
        </h2>
        <address className='mt-4 flex flex-col gap-1 text-sm text-white/55 not-italic sm:flex-row sm:gap-5'>
          <span>Melbourne, Florida</span>
        </address>
      </header>

      <section className='border-b border-white/10 py-8'>
        <h3 className='text-xs font-medium tracking-[0.2em] text-[#9cb7e5]/75 uppercase'>
          Professional Summary
        </h3>
        <p className='mt-4 text-sm leading-7 text-white/70'>
          Intelligence Surveillance Reconnaissance Systems Engineer and military
          veteran with 2 years of experience in networking and satellite
          communication. Experienced in supporting military radio intelligence
          units with encrypted communications across tactical radio platforms,
          satellite platforms, and data network services. Brings a comprehensive
          information technology background and critical-thinking skills
          developed through leading daily military training and weekly readiness
          operations. Career supported by professional development training in
          the United States Marine Corps.
        </p>
      </section>

      <section className='border-b border-white/10 py-8'>
        <h3 className='text-xs font-medium tracking-[0.2em] text-[#9cb7e5]/75 uppercase'>
          Skills
        </h3>
        <ul className='mt-4 flex flex-wrap gap-2'>
          {skills.map((skill) => (
            <li
              key={skill}
              className='rounded-full border border-white/10 bg-[#101012] px-3 py-1.5 text-xs text-white/65 transition hover:border-white/25'
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className='border-b border-white/10 py-8'>
        <h3 className='text-xs font-medium tracking-[0.2em] text-[#9cb7e5]/75 uppercase'>
          Professional Experience
        </h3>
        <article className='mt-5'>
          <div className='flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline'>
            <h4 className='font-medium text-white'>
              United States Marine Corps
            </h4>
            <p className='text-sm text-white/45'>2022–2024</p>
          </div>
          <p className='mt-1 text-sm text-white/65'>
            Private First Class / Electronics Warfare Reconnaissance Engineer
            (2651)
          </p>
          <p className='mt-1 text-sm text-white/45'>Kaneohe Bay, HI</p>
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-white/65 marker:text-white/35'>
            <li>
              Troubleshot Cisco switches, routers, and satellite communication
              devices to restore normal operation.
            </li>
            <li>
              Assisted staff and users with computer malfunctions and software
              issues involving encrypted tactical radio, satellite, and data
              network communications.
            </li>
            <li>
              Maintained 50 computers, 50 radios, 20 switches, and 20 satellite
              communication devices with an estimated combined value of $5
              million.
            </li>
            <li>
              Trained newly hired personnel to set up and operate equipment,
              systems, and software.
            </li>
            <li>
              Maintained equipment logs and inventory records in accordance with
              regulations.
            </li>
          </ul>
        </article>
      </section>

      <section
        id='education'
        className='scroll-mt-28 border-b border-white/10 py-8'
      >
        <h3 className='text-xs font-medium tracking-[0.2em] text-[#9cb7e5]/75 uppercase'>
          Education
        </h3>
        <ul className='mt-5 space-y-5'>
          {education.map((item) => (
            <li
              key={item.title}
              className='flex flex-col justify-between gap-1 sm:flex-row sm:gap-6'
            >
              <div>
                <h4 className='text-sm leading-6 font-medium text-white/85'>
                  {item.title}
                </h4>
                <p className='text-sm leading-6 text-white/45'>{item.detail}</p>
              </div>
              <span className='shrink-0 text-sm text-white/45'>
                {item.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id='certifications' className='scroll-mt-28 pt-8'>
        <h3 className='text-xs font-medium tracking-[0.2em] text-[#9cb7e5]/75 uppercase'>
          Certifications
        </h3>
        <ul className='mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-white/65 marker:text-white/35'>
          {certifications.map((certification) => (
            <li key={certification}>{certification}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Resume;
