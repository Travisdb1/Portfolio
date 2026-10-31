import Breadcrumb from '@/components/Breadcrumb';
import Resume from '@/components/Resume';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Travis Burke',
  description:
    'Professional experience, education, skills, and certifications for Travis Burke.',
};

const ResumePage = () => {
  return (
    <div className='relative isolate overflow-hidden bg-[#0a0a0b] text-[#f5f5f5]'>
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
        className='pointer-events-none absolute inset-x-0 top-0 h-[68vh] opacity-[0.16]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'linear-gradient(to bottom, black, transparent 88%)',
        }}
      />
      <div className='relative z-10'>
        <Breadcrumb pageTitle='Resume' variant='resume' />
        <Resume />
      </div>
    </div>
  );
};

export default ResumePage;
