import { slugify } from '@/shared/utils/slugidy';
import { ProductsPages } from '@/widgets';
import { PRODUCTMENUDATA__NVR } from '@/widgets/ProductsMenu/productMenus.const';

export async function generateStaticParams() {
  return PRODUCTMENUDATA__NVR.map((item) => ({
    alias: slugify(item.model),
  }));
}

export default function NvrPages() {
  return <ProductsPages />;
}
