export type navbarItem = {
  name: string;
  navLink: string;
};
export type MenuStatus = {
  pageName?: string;
  isMenuShown: boolean;
  toggleMenuHandler?: () => void;
};
