import Icon from "../../common/Icon";

function ArrowButton({ dir = "right" }) {
  return (
    <Icon
      name={dir === "right" ? "arrow_forward" : "arrow_back"}
      al={`${dir} arrow`}
      className="text-[11vw]"
    />
  );
}

export default ArrowButton;
