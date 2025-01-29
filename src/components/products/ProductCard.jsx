function ProductCard() {
  return (
    <div className="flex min-h-[200px] max-w-[250px] flex-col bg-pearl">
      <div className="h-[250px]">IMG</div>

      <div className="flex flex-col bg-zest/50">hello</div>

      <div className="flex w-full items-center justify-between bg-zest pl-2">
        <div className="flex h-full flex-col">
          <h2 className="font-bebas text-2xl tracking-widest">Title</h2>
          <h2 className="font-bebas text-lg tracking-widest">$120</h2>
        </div>
        <button className="font-base flex h-full w-[25%] items-center justify-center font-bebas text-6xl hover:bg-pearl/50">
          +
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
