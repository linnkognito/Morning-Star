import Icon from "../common/Icon";
import cartImage from "../../images/HER_tanktop.jpg";
import cartBgImage from "../../images/HER_buttonup_2.jpg";
import QuantitySelector from "../ui/inputs/QuantitySelector";

function Cart() {
  return (
    <div
      className="grid h-full origin-center grid-cols-[2fr_1fr] bg-cover bg-center backdrop-blur-xl"
      style={{ backgroundImage: `url(${cartBgImage})` }}
    >
      {/* Product list */}
      <div className="flex h-full flex-col rounded-md bg-transparent p-3">
        {/*  */}
        {/*  */}
        {/*  */}
        {/* List item (Card) */}
        <div className="grid grid-cols-[auto_3fr_3fr_auto] gap-3 rounded-md bg-pearl/50 pr-1 shadow-sm shadow-offblack backdrop-blur-sm">
          {/* Image */}
          <div className="flex h-full max-h-[7em] min-h-[7em] min-w-[7em] max-w-[7em] rounded-l-md bg-aura">
            <img
              src={cartImage}
              alt="Young woman wearing a white tanktop"
              className="cursor-pointer rounded object-cover"
            />
          </div>

          {/* Product Name */}
          <div className="flex flex-col justify-center font-bebas">
            <h2 className="w-fit cursor-pointer text-3xl transition-all duration-200 ease-out hover:bg-zest/70 hover:underline">
              Product name
            </h2>

            {/* Product Price */}
            <p className="pl-1 text-2xl">$295.00</p>
          </div>

          {/* Actions */}
          <div className="mr-4 flex h-full flex-col justify-center gap-2 font-bebas">
            {/* Size */}
            <div className="flex w-full place-content-center rounded-xl bg-aura/80 p-1 text-xl tracking-wide">
              Size: M
            </div>
            <QuantitySelector
              text="Quantity"
              className="bg-mint/80 w-full rounded-xl p-1 tracking-wide"
            />
          </div>

          <Icon
            name="close"
            al="Close button"
            className="h-fit origin-center cursor-pointer rounded duration-100 ease-out will-change-transform hover:scale-105"
          />
        </div>
      </div>

      {/* Sidebar: Checkout */}
      <div className="m-2 rounded bg-pearl">Div 2</div>
    </div>
  );
}

export default Cart;
