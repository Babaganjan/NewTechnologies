import { PRODUCTS_DATA } from '@/widgets/products/products.const';
export async function generateMetadata({ params }: { params: Promise<{ alias: string }> }) {
  const { alias } = await params;
  const product = PRODUCTS_DATA.find((product) => product.alias === alias);

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

export default async function ProductsPage({ params }: { params: Promise<{ alias: string }> }) {
  const { alias } = await params;

  return (
    <div>
      <p>{alias}</p>
    </div>
  );
}
