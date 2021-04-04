import "./App.css";
import CardsList from "./components/CardsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="container-fluid text-light">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <CardsList />
        </div>
      </div>
    </div>
  );
}

export default App;
