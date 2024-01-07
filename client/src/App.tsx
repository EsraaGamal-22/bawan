import { RouterProvider } from "react-router-dom";
import { router } from "./routing/allRoutes";
import { AppContextProvider } from "./context-app";

function App() {
  return (
    <>
      <AppContextProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </AppContextProvider>
    </>
  );
}

export default App;
