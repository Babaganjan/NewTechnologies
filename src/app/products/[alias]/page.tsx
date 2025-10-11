import { PRODUCTS_DATA } from '@/widgets/products/products.const';
export async function generateMetadata({ params }: { params: { alias: string } }) {
  const product = PRODUCTS_DATA.find((product) => product.alias === params.alias);

  return {
    title: product?.title,
    description: product?.title,
  };
}

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
