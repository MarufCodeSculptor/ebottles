import Botles from "./Botles";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      {
        <div className="border-2 border-red-500">
          <Botles></Botles>
        </div>
      }
    </>
  );
}

export default App;
