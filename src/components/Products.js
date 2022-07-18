import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook Air M1",
    imgURL: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg",
    price: 980,
  },
  {
    id: 2,
    name: "Microsoft Surface Pro 8",
    imgURL:
      "https://www.cnet.com/a/img/resize/f9aec9f155cee0de93d6a599b0e8e6e9a082c3d5/2021/10/03/5c27a4a2-9365-4182-9738-0cab4ca42cc0/img-5704.jpg?auto=webp&fit=crop&height=362&width=644",
    price: 840,
  },
  {
    id: 3,
    name: "Dell XPS 13",
    imgURL: "https://www.notebookcheck.net/uploads/tx_nbc2/xps.jpg",
    price: 850,
  },
  {
    id: 4,
    name: "Razer Blade 14",
    imgURL:
      "https://www.cnet.com/a/img/resize/1cece75ba4d61c1ea6286905e44d56b8e590b220/2021/07/23/f48b66b3-f96a-4c9d-aa44-8d28824276ba/razer-blade-14-cnet-2021-review-14.jpg?auto=webp&fit=crop&height=362&width=644",
    price: 2650,
  },
  {
    id: 5,
    name: "Samsung Galaxy Book 2 Pro 360",
    imgURL:
      "https://www.cnet.com/a/img/resize/3745640481e400824c5993b893fb5859ae036106/2022/04/26/0a286fff-7903-48be-b0cb-fa7e29826c53/samsung-galaxy-book-2-pro-360-01.jpg?auto=webp&fit=crop&height=362&width=644",
    price: 1250,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
