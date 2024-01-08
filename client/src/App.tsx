import { RouterProvider } from "react-router-dom";
import { router } from "./routing/allRoutes";
import { NavigationContextProvider } from "./shared/components/navbar/store/context-navigation";

function App() {
  return (
    <>
      <NavigationContextProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
      </NavigationContextProvider>
    </>
  );
}

export default App;
