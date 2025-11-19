import { slugify } from '@/shared/utils/slugidy';
import { ProductsPages } from '@/widgets';
import { PRODUCTMENUDATA__SERVERCABINETS } from '@/widgets/ProductsMenu/productMenus.const';

export async function generateStaticParams() {
  return PRODUCTMENUDATA__SERVERCABINETS.map((item) => ({
    alias: slugify(item.model),
  }));
}

export default function ServerCabinetsPages() {
  return <ProductsPages />;
}
