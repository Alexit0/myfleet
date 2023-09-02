import LoadingForm from "./components/LoadingForm";
import UnloadingForm from "./components/UnloadingForm";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.main}>
      MY FLEET
      <LoadingForm />
      <UnloadingForm />
    </div>
  );
}

export default App;
