// import Image from 'next/image';
//
// import type { ImageItem } from '@/shared/types/products.types';
//
// export const SpecImages = ({ data }: { data: ImageItem[] }) => {
//   return (
//     <ul className="specImages__list">
//       {data.map((item, index) => (
//         <li key={item.id} className="specImages__item">
//           <div className="specImages__imgWrap">
//             <Image
//               src={item.images}
//               alt={item.title}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               style={{ objectFit: 'contain' }}
//               loading={index === 0 ? 'eager' : 'lazy'}
//               priority={index === 0}
//             />
//           </div>
//           <p className="specImages__text">{item.title}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };
