import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
type NavigationContext = {
  isMenuShown: boolean;
  setIsMenuShown: Dispatch<SetStateAction<boolean>>;
};
export const NavigationContext = createContext<NavigationContext>({
  isMenuShown: false,
  setIsMenuShown: () => {},
});

type NavigationContextProvider = {
  children: ReactNode;
};

export const NavigationContextProvider = ({
  children,
}: NavigationContextProvider) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <NavigationContext.Provider value={{ isMenuShown, setIsMenuShown }}>
      {children}
    </NavigationContext.Provider>
  );
};
