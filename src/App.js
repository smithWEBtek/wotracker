import "./App.css";
import Workout from "./Workout/Workout";
import { Button, TextField } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div>
        <h3>
          <a
            href="https://www.artofmanliness.com/health-fitness/fitness/the-ultimate-glossary-of-strength-and-conditioning-terms/
"
          >
            Glossary of workout terms
          </a>
        </h3>
        <div className="info">
          <p>Each muscle area has activity options for working it.</p>
          <p>Each set is counted by relevant metrics.</p>
          <h3>Do 3 sets on the chosen muscle group.</h3>
          <p>1st set gets you going</p>
          <p>If you can barely do 12 reps, lower the weight.</p>
          <p>2nd set challenges you</p>
          <p>If you can do 25 easily, increase the weight.</p>
          <p>3rd set fails the muscle by the end.</p>
          <p>Push your self to the failure point by 12-15 reps.</p>
          <p>Save each set as you finish.</p>
        </div>
        <div>
          <TextField id="name" label="Name" variant="outlined" />
        </div>
        <Button color="primary" variant="contained">
          {" "}
          Press me{" "}
        </Button>
        <Workout />
      </div>
    </div>
  );
}

export default App;
