import { useNavigate, useRouteError } from "react-router";
import Button from "./buttons/Button";
import Header from "./header/Header";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <>
      <Header />

      <div className="bg-pearl mx-auto mt-6 flex h-full w-4/5 flex-col items-center px-0 pb-0 pt-10">
        <h2 className="mb-2 font-bebas text-3xl">Something went wrong</h2>
        <p className="text-md mb-4 font-semibold">
          {error.data || error.message}
        </p>

        <Button type="error" onClick={() => navigate(-1)}>
          Go back
        </Button>
      </div>
    </>
  );
}

export default Error;
