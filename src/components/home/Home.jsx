import { useNavigate } from "react-router";
import CategoryCard from "./CategoryCard";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex size-full flex-col gap-1 px-1 pb-4 md:flex-row">
      <CategoryCard
        color="bg-ember"
        // hoverColor="hover:bg-aura/60"
        hoverClass="md:rounded-none rounded-r-xl rounded-b-none"
        title="her"
        className="rounded-t-xl md:rounded-xl md:rounded-r-none"
        onClick={() => navigate("/her")}
      />

      <CategoryCard
        color="bg-aura"
        // hoverColor="hover:bg-ember/60"
        title="him"
        className=""
        onClick={() => navigate("/him")}
      />

      <CategoryCard
        color="bg-zest"
        hoverColor="hover:bg-pearl/60"
        title="uni"
        className=""
        onClick={() => navigate("/unisex")}
      />

      <CategoryCard
        color="bg-pearl"
        hoverColor="hover:bg-zest/60"
        hoverClass="md:rounded-none rounded-r-xl rounded-l-none rounded-t-none"
        title="new"
        className="rounded-b-xl md:rounded-xl md:rounded-l-none"
        onClick={() => navigate("/new")}
      />
    </div>
  );
}

export default Home;
