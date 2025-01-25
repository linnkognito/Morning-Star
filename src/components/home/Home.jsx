import CategoryCard from "./CategoryCard";

function Home() {
  return (
    <div className="flex h-full w-full gap-1 px-1">
      <CategoryCard
        color="bg-ember"
        title="her"
        className="rounded-xl rounded-r-none"
      />
      <CategoryCard color="bg-aura" title="him" className="" />
      <CategoryCard color="bg-zest" title="uni" className="" />
      <CategoryCard
        color="bg-pearl"
        title="new"
        className="rounded-xl rounded-l-none"
      />
    </div>
  );
}

export default Home;
