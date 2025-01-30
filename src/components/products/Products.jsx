import RefineMenu from "./menus/RefineMenu";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="flex w-full flex-col gap-3">
      {/* Image */}
      <div className="h-[15vh] w-full bg-aura sm:h-[25vh]"></div>

      <div className="mx-auto flex w-full min-w-fit max-w-[1284px] flex-col space-y-3 border px-2">
        {/* Filter & Sort menu */}
        <RefineMenu />

        {/* Product cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default Products;
