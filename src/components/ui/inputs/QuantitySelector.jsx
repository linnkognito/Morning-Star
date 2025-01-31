import ButtonTiny from "../buttons/ButtonTiny";

function QuantitySelector({ text = "", className = "" }) {
  return (
    <div
      className={`${className} text-md flex place-content-center gap-2 font-bebas md:text-xl`}
    >
      <p>{text}</p>
      <div className="flex gap-2">
        <ButtonTiny width="w-6" height="h-6">
          -
        </ButtonTiny>
        <span>1</span>
        <ButtonTiny width="w-6" height="h-6">
          +
        </ButtonTiny>
      </div>
    </div>
  );
}

export default QuantitySelector;
