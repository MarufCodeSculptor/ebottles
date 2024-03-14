import Botles from "./Botles";
import Navbar from "./Navbar";
import getStoredCart from "./utilities/localStorage";

function App() {
  console.log(getStoredCart());
  return (
    <>
      <Navbar></Navbar>
   {
    <div className="border-2 border-red-500">
         <Botles>
        
        </Botles>
    </div>
   }
    </>
  );
}

export default App;
