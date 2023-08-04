import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSelector } from "../data/slices/bagSlice";
import { clearBag, setTotalPrice } from "../data/slices/bagSlice";
import BagTable from "../components/Bag/BagTable";
import BagProduct from "../components/Bag/BagProduct";
import BagBottom from "../components/Bag/BagBottom";

const Bag = () => {
  const { bagProducts } = useSelector(bagSelector);

  return (
    <div className="bag pt-12">
      <div className="bag-container w-4/5 mx-auto">
        {bagProducts.length > 0 ? (
          <div className="bag-wrapper">
            <BagTable />
            <BagProduct />
            <BagBottom />
          </div>
        ) : (
          <div className=" h-screen absolute top-0 left-2/4 -translate-x-2/4  flex justify-center items-center">
            <p className="text-lg font-semibold">No items in bag yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bag;
