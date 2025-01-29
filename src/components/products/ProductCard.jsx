// import ProductOptionsMenu from "./ProductOptionsMenu";

function ProductCard() {
  return (
    <div className="flex min-h-[200px] max-w-[250px] flex-col bg-pearl">
      <div className="h-[250px]">IMG</div>

      {/* <div className="flex flex-col">
        <ProductOptionsMenu
          showAddToCartButton={true}
          // showCounter={false}
          // showActionButtons={false}
        />
      </div> */}

      <div className="flex w-full items-center justify-between overflow-hidden bg-aura pl-2">
        <div className="flex h-full flex-col pt-2">
          <h2 className="font-bebas text-2xl tracking-widest">Title</h2>
          <h2 className="font-bebas text-lg tracking-widest">$120</h2>
        </div>
        <button className="font-base flex h-full w-[25%] items-center justify-center font-bebas text-6xl transition-transform duration-300 ease-out will-change-transform hover:scale-110 hover:bg-pearl/50">
          <span>+</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
