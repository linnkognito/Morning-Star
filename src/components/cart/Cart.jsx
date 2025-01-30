import Icon from "../common/Icon";
import cartImage from "../../images/HER_tanktop.jpg";
import QuantitySelector from "../ui/inputs/QuantitySelector";

function Cart() {
  return (
    <div className="grid h-full grid-cols-[2fr_1fr] p-4">
      {/* Product list */}
      <div className="flex h-full flex-col rounded-md bg-pearl p-3">
        {/* List item (Card) */}
        <div className="flex items-center gap-4 rounded-md shadow-sm shadow-offblack">
          <div className="flex h-full max-h-[7em] min-h-[7em] min-w-[7em] max-w-[7em] justify-center rounded-l-md bg-aura">
            <img
              src={cartImage}
              alt="Young woman wearing a white tanktop"
              className="cursor-pointer rounded object-cover"
            />
          </div>

          {/* Text & Action button wrapper */}
          <div className="flex h-full w-full justify-between gap-2">
            {/* Text */}
            <div className="flex h-full w-full flex-col justify-center bg-pearl font-bebas">
              <h2 className="w-fit cursor-pointer text-3xl transition-all duration-200 ease-out hover:bg-zest/70 hover:underline">
                Product name
              </h2>

              <p className="pl-1 text-2xl">$295.00</p>
            </div>

            {/* Actions */}
            <div className="flex h-full flex-col items-end gap-2 border border-offblack font-bebas">
              <Icon
                name="close"
                al="Close button"
                className="justify-sef-end"
              />

              <div className="flex w-[80%] flex-col gap-3">
                {/* Size */}
                <div className="mr-10 w-full rounded-xl bg-zest/80 p-2 text-xl">
                  Size: M
                </div>
                <QuantitySelector
                  text="Quantity"
                  className="mr-10 w-full rounded-xl bg-zest/80 p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar: Checkout */}
      <div className="m-4 rounded bg-pearl">Div 2</div>
    </div>
  );
}

export default Cart;
