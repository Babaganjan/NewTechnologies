// 'use client';
// import { usePathname } from 'next/navigation';

// import './_hero.scss';
// import { PAGE_TITLE } from './hero.const';

// export const Hero = () => {
//   const pathname = usePathname();
//   const currentPage = PAGE_TITLE.page.find((item) => pathname === item.href);

//   console.log(pathname);

//   return (
//     <section className="hero with-bottom-trapezoid">
//       <div className="container hero__container flex">
//         {currentPage && <h1 className="heading">{currentPage.headingSvg}</h1>}
//         <div className="hero__content flex">
//           <h2 className="hero__title title">Мы&nbsp;предлагаем</h2>
//           <p className="hero__prev">
//             системы видеонаблюдения, пожаротушения, охранно-пожарной сигнализации, скуд
//             и&nbsp;оповещения для частых лиц и&nbsp;бизнеса
//           </p>
//         </div>
//         <h3 className="hero__subtitle subtitle">Безопасность&nbsp;нового поколения</h3>
//       </div>
//     </section>
//   );
// };
'use client';
import { usePathname } from 'next/navigation';

import './_hero.scss';
import { PAGE_TITLE } from './hero.const';

export const Hero = () => {
  const pathname = usePathname();
  const currentPage = PAGE_TITLE.page.find((item) => pathname === item.href);

  console.log('Current pathname:', pathname);
  console.log(
    'Available paths:',
    PAGE_TITLE.page.map((item) => item.href)
  );
  console.log('Found page:', currentPage);

  return (
    <section className="hero with-bottom-trapezoid">
      <div className="container hero__container flex">
        {currentPage && <h1 className="heading">{currentPage.headingSvg}</h1>}
        <div className="hero__content flex">
          <h2 className="hero__title title">Мы&nbsp;предлагаем</h2>
          <p className="hero__prev">
            системы видеонаблюдения, пожаротушения, охранно-пожарной сигнализации, скуд
            и&nbsp;оповещения для частых лиц и&nbsp;бизнеса
          </p>
        </div>
        <h3 className="hero__subtitle subtitle">Безопасность&nbsp;нового поколения</h3>
      </div>
    </section>
  );
};
