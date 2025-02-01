import Icon from "../../common/Icon";

function ArrowButton({ dir = "right", className = "" }) {
  return (
    <Icon
      name={dir === "right" ? "arrow_forward" : "arrow_back"}
      al={`${dir} arrow`}
      className={`${className} text-9xl`}
    />
  );
}

export default ArrowButton;
