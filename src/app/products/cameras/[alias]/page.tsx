import { slugify } from '@/shared/utils/slugidy';
import { ProductsPages } from '@/widgets';
import { PRODUCTMENUDATA__CAMERAS } from '@/widgets/ProductsMenu/productMenus.const';

export async function generateStaticParams() {
  return PRODUCTMENUDATA__CAMERAS.map((item) => ({
    alias: slugify(item.model),
  }));
}

export default async function CamerasPages({ params }: { params: Promise<{ alias: string }> }) {
  const f = await params;

  console.log(f);

  return <ProductsPages />;
}
