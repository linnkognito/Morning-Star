import cartBgImage from "../../images/HER_buttonup_2.jpg";
import cartImage from "../../images/HER_escape.jpg";
import Icon from "../common/Icon";

import ActionButton from "../ui/buttons/ActionButton";
import CartItem from "./CartItem";

const testCart = [
  {
    id: "01",
    productName: "Test Product",
    image: cartImage,
    imageAlt: "Young woman wearing a white tanktop",
    quantity: 1,
    size: "M",
  },
  {
    id: "01",
    productName: "Test Product",
    image: cartImage,
    imageAlt: "Young woman wearing a white tanktop",
    quantity: 1,
    size: "M",
  },
  {
    id: "01",
    productName: "Test Product",
    image: cartImage,
    imageAlt: "Young woman wearing a white tanktop",
    quantity: 1,
    size: "M",
  },
];

function Cart() {
  const cart = testCart;

  return (
    <div
      className="mx-auto h-full origin-center bg-cover bg-center p-4 backdrop-blur-xl"
      style={{ backgroundImage: `url(${cartBgImage})` }}
    >
      {/* Product list */}
      <div className="mx-auto mt-4 grid max-w-[1024px] grid-cols-1 gap-4 rounded-md bg-pearl/60 p-6 shadow-sm shadow-offblack backdrop-blur-md md:grid-cols-[2fr_1fr]">
        <p className="w-full font-bebas text-xl tracking-wider md:col-span-2">
          {cart.length} items
        </p>
        <div className="flex flex-col gap-3">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              image={item.image}
              alt={item.imageAlt}
              quantity={item.quantity}
              size={item.size}
            />
          ))}
          <ActionButton color="bg-sea" width="w-full">
            <Icon name="arrow_back" />
            Continue shopping
          </ActionButton>
        </div>

        {/* Checkout */}
        <div className="flex h-full flex-col gap-1">
          {/* Small banner */}
          {/* <div className="mb-2 h-7 rounded bg-aura shadow-sm shadow-offblack"></div> */}

          <div className="flex flex-col justify-between rounded bg-aura/15 p-4 shadow-sm shadow-offblack backdrop-blur-md">
            {/* Promo code */}
            <div className="flex h-fit w-full flex-col">
              <label
                htmlFor=""
                className="h-8 pl-1 pt-1 font-bebas text-xl tracking-wide"
              >
                Promo code:
              </label>
              <input
                type="text"
                placeholder="123PROMO"
                className="h-7 max-w-[400px] rounded-md px-2 font-primary text-base tracking-wide shadow-sm shadow-offblack"
              />
            </div>

            {/* Total */}
            <h2 className="mt-4 pl-1 font-bebas text-4xl">Total: $120</h2>
          </div>

          <ActionButton
            color="bg-aura/80"
            width="w-full"
            className="place-self-end"
          >
            Go to checkout
          </ActionButton>
        </div>
      </div>
    </div>
  );
}

export default Cart;
