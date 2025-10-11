import { PRODUCTS_DATA } from '@/widgets/products/products.const';

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    alias: product.alias,
  }));
}

export default function ProductsPage({ params }: { params: { alias: string } }) {
  return (
    <div>
      <p>{params.alias}</p>
    </div>
  );
}
