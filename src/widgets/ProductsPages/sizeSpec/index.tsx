// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
//
// import { fadeInUp } from '@/shared/animations/scroll-animations';
// import { H } from '@/shared/ui';
//
// import './sizeSpec.scss';
//
// interface SizeSpecProps {
//   images: string[];
// }
//
// export const SizeSpec = ({ images }: SizeSpecProps) => {
//   return (
//     <section className="sizeSpec">
//       <motion.div
//         className="container"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.15, delayChildren: 0.1 },
//           },
//         }}
//       >
//         <motion.div variants={fadeInUp} className="sizeSpec__title">
//           <H level="2" variant="light">
//             Размеры
//           </H>
//         </motion.div>
//         <motion.div variants={fadeInUp} className="sizeSpec__img-container">
//           {images.map((src, index) => (
//             <div key={index} className="sizeSpec__img">
//               <Image
//                 src={src}
//                 alt={`Размеры ${index + 1}`}
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };
