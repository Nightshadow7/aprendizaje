import logo from './logo.svg';
import './App.css';
import keyConceptsImage from './assets/key-concepts.png';
import componentsImage from './assets/components.png';
import stateImage from './assets/state.png';
import eventsImage from './assets/events.png';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="images-container">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={keyConceptsImage}  alt="Medal badge with a star" />
        </div>
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <img src={concepts[0].image} alt={concepts[0].image} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[1].image} alt={concepts[1].image} />
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[2].image} alt={concepts[2].image} />
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
        </li>
      </ul>
    </div>
  );
};

export default App;
