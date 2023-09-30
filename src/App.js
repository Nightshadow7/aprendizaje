import logo from "./logo.svg";
import Header from "./components/Header";
import Lista from "./components/Lista";
import "./App.css";
import keyConceptsImage from "./assets/key-concepts.png";
import componentsImage from "./assets/components.png";
import stateImage from "./assets/state.png";
import eventsImage from "./assets/events.png";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  return (
    <div className="App">
      <Header logo={logo} keyConceptsImage={keyConceptsImage} />
      <ul id="concepts">
        <Lista 
        data={concepts[0]}
        />
        <Lista 
        data={concepts[1]}
        />
        <Lista 
        data={concepts[2]}
        />
      </ul>
    </div>
  );
}

export default App;
