import OrderForm from "./components/OrderForm";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.main}>
      MY FLEET
      <OrderForm />
    </div>
  );
}

export default App;
