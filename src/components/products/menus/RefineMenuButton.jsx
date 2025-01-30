import Button from "../../ui/buttons/Button";

function RefineMenuButton({ children, isOpen, onClick = () => {} }) {
  return (
    <Button
      type="filter"
      className={
        isOpen ? "border-transparent bg-zest text-offblack" : "text-pearl"
      }
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default RefineMenuButton;
