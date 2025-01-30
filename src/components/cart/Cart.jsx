import ButtonTiny from "../ui/buttons/ButtonTiny";

function Cart() {
  return (
    <div className="grid h-full grid-cols-[2fr_1fr] p-4">
      {/* Product list */}
      <div className="flex h-full flex-col rounded-md bg-pearl p-3">
        {/* List item (Card) */}
        <div className="flex items-center gap-4 rounded-md shadow-sm shadow-offblack">
          <div className="h-full min-h-[7em] min-w-[7em] rounded-l-md bg-aura">
            Image
          </div>

          {/* Text & Action button wrapper */}
          <div className="flex justify-between">
            {/* Text */}
            <div className="bg-pearl font-bebas">
              <div className="flex gap-2">
                <h2 className="text-3xl">Product name</h2>
                <ButtonTiny>M</ButtonTiny>
              </div>
              <p className="text-2xl">$295.00</p>
            </div>

            {/* Actions */}
          </div>
        </div>
      </div>

      {/* Sidebar: Checkout */}
      <div className="m-4 rounded bg-pearl">Div 2</div>
    </div>
  );
}

export default Cart;
