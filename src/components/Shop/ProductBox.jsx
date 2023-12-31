import React, { useState } from "react";
import { bagSelector, setBagProducts } from "../../data/slices/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductBox = ({ title, desc, price, sizes, imageUrl, type, id }) => {
  const [activeSize, setActiveSize] = useState(0);
  const { bagProducts } = useSelector(bagSelector);
  const dispatch = useDispatch();

  let wholeItem = {
    id,
    title,
    desc,
    price,
    size: sizes[activeSize],
    imageUrl,
    type,
  };

  const addToBag = () => {
    dispatch(setBagProducts(wholeItem));
  };

  const handleSizeClick = (event, index) => {
    event.stopPropagation(); // Prevent event propagation to parent elements
    setActiveSize(index);
  };

  let shortDesc = desc.split(" ").splice(0, 15).join(" ");

  return (
    <div className="animate__animated animate__fadeInRight border my-2 border-white hover:border-yellow-400">
      <div className="product-box grid grid-cols-3 gap-4 p-2 bg-white">
        <div className="left">
          <div className="">
            <img src={imageUrl} alt="" width="250px" />
          </div>
        </div>

        <div className="middle flex flex-col justify-between">
          <div className="top">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="font-medium">{type}</p>
            <p className="hidden text-yellow-400 font-medium md:flex">
              {shortDesc}...
            </p>
          </div>

          <div className="bottom">
            <div className="price">
              <p className="font-bold">$ {price}</p>
            </div>
            <div className="size">
              <div className="size-wrapper flex">
                {sizes.map((size, i) => (
                  <p
                    className={
                      activeSize === i
                        ? "font-lg bg-stone-600 w-9 flex justify-center items-center text-white cursor-pointer"
                        : "font-lg bg-white w-9 flex justify-center cursor-pointer"
                    }
                    key={i}
                    onClick={(event) => handleSizeClick(event, i)}>
                    {size}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="right flex items-end justify-end">
          <div className="flex flex-col justify-between h-full items-end">
            <p
              className=" w-8 h-8 bg-yellow-400 text-white flex justify-center items-center font-bold cursor-pointer hover:bg-yellow-500"
              onClick={() => addToBag()}>
              +
            </p>
            <Link
              to={`/shop/product/${id}`}
              className="font-semibold text-white flex justify-center items-center h-8 w-24 bg-yellow-400 hover:bg-yellow-500">
              view more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
