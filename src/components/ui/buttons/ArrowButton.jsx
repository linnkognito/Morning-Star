import Icon from "../../common/Icon";

function ArrowButton({ dir = "right" }) {
  return (
    <div>
      <Icon icon={dir === "right" ? "arrow_forward" : "arrow_back"} />
    </div>
  );
}

export default ArrowButton;
