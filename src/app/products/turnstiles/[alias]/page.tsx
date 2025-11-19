import { slugify } from '@/shared/utils/slugidy';
import { ProductsPages } from '@/widgets';
import { PRODUCTMENUDATA__TURNISTILES } from '@/widgets/ProductsMenu/productMenus.const';

export async function generateStaticParams() {
  return PRODUCTMENUDATA__TURNISTILES.map((item) => ({
    alias: slugify(item.model),
  }));
}

export default function TurnistilesPages() {
  return <ProductsPages />;
}
