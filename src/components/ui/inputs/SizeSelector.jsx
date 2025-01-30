import ButtonTiny from "../buttons/ButtonTiny";

const sizes = ["xs", "s", "m", "l", "xl", "xxl"];

function SizeSelector() {
  return (
    <div className="flex items-center justify-evenly gap-2">
      {sizes.map((size) => (
        <ButtonTiny key={size}>{size}</ButtonTiny>
      ))}
    </div>
  );
}

export default SizeSelector;
