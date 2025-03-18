import { useSelector } from "react-redux";
import { YourCart, DessertsList } from "./components";

export default function App() {
  const { desserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );
  console.log(desserts, totalAmount, totalPrice);
  return (
    <main>
      <section className="container grid-container">
        <DessertsList desserts={desserts} />
        <YourCart />
      </section>
    </main>
  );
}
