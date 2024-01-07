import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
type AppContext = {
  isMenuShown: boolean;
  setIsMenuShown: Dispatch<SetStateAction<boolean>>;
};
export const AppContext = createContext<AppContext>({
  isMenuShown: false,
  setIsMenuShown: () => {},
});

type AppContextProvider = {
  children: ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProvider) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <AppContext.Provider value={{ isMenuShown, setIsMenuShown }}>
      {children}
    </AppContext.Provider>
  );
};
