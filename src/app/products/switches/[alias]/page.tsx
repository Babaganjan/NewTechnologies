import { slugify } from '@/shared/utils/slugidy';
import { ProductsPages } from '@/widgets';
import { PRODUCTMENUDATA__SWITCHES } from '@/widgets/ProductsMenu/productMenus.const';

export async function generateStaticParams() {
  return PRODUCTMENUDATA__SWITCHES.map((item) => ({
    alias: slugify(item.model),
  }));
}

export default function SwitchesPages() {
  return <ProductsPages />;
}
