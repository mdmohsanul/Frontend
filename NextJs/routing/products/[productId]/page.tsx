


export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params; 

  return (
    <div>
      <h1>Product Details Page</h1>
      <p>Product Id: {productId}</p>
    </div>
  );
}


/* 
so basically this is a server compoment, In server component only we can make component async.
params is Promise that resolve an object

*/