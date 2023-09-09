import LoadingForm from "./components/LoadingForm";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.main}>
      MY FLEET
      <LoadingForm />
    </div>
  );
}

export default App;
