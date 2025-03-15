import { useSelector } from "react-redux";
import { YourCart, DessertsList } from "./components";

export default function App() {
  const { desserts, selectedDesserts, totalAmount, totalPrice } = useSelector(
    (store) => store.cart
  );
  console.log(selectedDesserts, totalAmount, totalPrice);
  return (
    <main>
      <section className="container grid-container">
        <DessertsList desserts={desserts} />
        <YourCart />
      </section>
    </main>
  );
}
