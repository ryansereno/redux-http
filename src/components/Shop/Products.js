import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const TEST_PRODUCTS = [
  { id: "p1", price: 56, title: "product 1", description: "test 1" },
  { id: "p2", price: 23, title: "product 2", description: "test 2" },
  { id: "p3", price: 41, title: "product 3", description: "test 3" },
  { id: "p4", price: 87, title: "product 4", description: "test 4" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {TEST_PRODUCTS.map((product) => {
            return(

          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />

            )
        })}
      </ul>
    </section>
  );
};

export default Products;
