import { Outlet } from "react-router";
import Header from "./header/Header";
import PromotionBar from "./header/PromotionBar";

// import bgImage from "../../img/bg-home.jpg";

function AppLayout() {
  return (
    <div className="flex h-screen w-screen flex-col items-center overflow-x-hidden bg-offblack">
      <PromotionBar code="SPRING" />
      <Header />

      <main className="bg-cream h-full w-full">
        {/* <div className="relative h-full w-full"> */}
        <Outlet />
        {/* </div> */}
      </main>
    </div>
  );
}

export default AppLayout;
