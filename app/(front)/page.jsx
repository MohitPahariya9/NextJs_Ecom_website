import ProductItem from "@/components/products/ProductItem";
import data from "@/lib/data";
export default function Home() {

  
    // // Log the data to debug
    // console.log(data);
  
    // // Check if data and data.product are defined
    // if (!data || !data.product) {
    //   return <div>Loading...</div>;
    // }
  return (
    <>
      <h2 className="text-2xl py-2">Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
