import type { NavListModalProps } from '../header/navItemModal/nav-Item.types';

interface ServiceItemProps  {
    name: string;
    image?: string;
    href: string;
    desc?: string;
}

export interface ServicesProps extends Omit<NavListModalProps, 'list'> {
    list: ServiceItemProps[];
}



// export interface ServicesProps {
//     onItemEnter: (id: number) => void;
//     onItemLeave: ()=> void;
// }