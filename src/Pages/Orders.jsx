import { useContext } from "react";
import Categories from "../Components/Categories/Categories";
import { OrdApi } from "../Context/OrdersApi";
import NoDataFetched from "../Components/ErrorMessage/NoDataFetched";

const Orders = () => {
  const { FetchedData: data } = useContext(OrdApi);
  if (data.length == 0)
    return <NoDataFetched/>
  return (
    <section>
      <Categories data={data} />
    </section>
  );
};

export default Orders;
