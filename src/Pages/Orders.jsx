import React, { useContext } from "react";
import Categories from "../Components/Categories/Categories";
import { OrdApi } from "../Context/OrdersApi";

const Orders = () => {
  const { FetchedData: data } = useContext(OrdApi);
  if (data.length == 0) return <h1 className="text-center text-2x font-semibold">Scan The Qr Code On The Table To Display The Menu</h1>;
  return (
    <section>
      <Categories data={data} />
    </section>
  );
};

export default Orders;
