import "./ProductList.css";
import Product from "../Product/Product";
import { products } from "../../data";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Doma</h1>
        <p className="pl-desc">
          Doma is a creative portfolio to show my projects.
          Beautiful design from Architecture to Web design, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
