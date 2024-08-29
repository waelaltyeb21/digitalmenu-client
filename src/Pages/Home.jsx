import { useParams } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpinner";
import useFetch from "../Hooks/useFetch";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import GreetingsMessage from "../Components/GreetingsMessage/GreetingsMessage";

const Home = () => {
  const { restaurant, table } = useParams();
  const SERVER_URL = import.meta.env.VITE_REACT_SERVER_URL;
  console.log(SERVER_URL);
  const { data, isLoading, error, errorDetails } = useFetch(
    `${SERVER_URL}restaurants/restaurant/${restaurant}/${table}`
  );
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={errorDetails} />;
  return (
    <section className="Home flex flex-col text-center">
      <GreetingsMessage data={data} />
    </section>
  );
};

export default Home;
