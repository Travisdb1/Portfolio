import Link from 'next/link';

const Breadcrumb = ({
  pageTitle,
  variant = 'default',
}: {
  pageTitle: string;
  variant?: 'default' | 'resume';
}) => {
  const isResume = variant === 'resume';

  return (
    <section className='relative z-10 overflow-hidden pt-30 pb-18 lg:pt-35 xl:pt-40'>
      {!isResume && (
        <>
          <div className='absolute top-25 left-0 -z-1 flex w-full flex-col gap-3 opacity-50'>
            <div className='footer-bg-gradient h-[1.24px] w-full'></div>
            <div className='footer-bg-gradient h-[2.47px] w-full'></div>
            <div className='footer-bg-gradient h-[3.71px] w-full'></div>
            <div className='footer-bg-gradient h-[4.99px] w-full'></div>
            <div className='footer-bg-gradient h-[6.19px] w-full'></div>
            <div className='footer-bg-gradient h-[7.42px] w-full'></div>
            <div className='footer-bg-gradient h-[8.66px] w-full'></div>
            <div className='footer-bg-gradient h-[9.90px] w-full'></div>
            <div className='footer-bg-gradient h-[13px] w-full'></div>
          </div>
          <div className='from-dark/0 to-dark absolute bottom-0 left-0 -z-1 h-24 w-full bg-linear-to-b'></div>
        </>
      )}

      <div className='px-4 text-center'>
        <h1 className='text-heading-2 mb-5.5 font-extrabold text-white'>
          {pageTitle}
        </h1>
        <ul className='flex items-center justify-center gap-2'>
          <li className='font-medium'>
            <Link href='/'>Home</Link>
          </li>
          <li className='font-medium'>/ {pageTitle}</li>
        </ul>
      </div>
    </section>
  );
};

export default Breadcrumb;
