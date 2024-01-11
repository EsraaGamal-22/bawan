import { ContactLinksProps } from "../shared/components/footer/footer.module";
import { ContactDetailsProps } from "./contact-info/contact-info";

export const contactPage = {
  title: " مجتمع عمراني",
  txt: "متكامل في فضاء التميز و الابداع",
  imgSection: "/assets/contactpage.png",
};
export const contactDetails: ContactDetailsProps[] = [
  {
    txt: "المملكه العربيه السعوديه , الرياض , حي الملقا 108",
    imgSrc: "/assets/mapcontact.png",
    link: "#",
  },
  {
    txt: "0550175111",
    imgSrc: "/assets/phonecontact.png",
    link: "tel:0550175111",
  },
  {
    txt: "info@bawanalrehab.com",
    imgSrc: "/assets/emailcontact.png",
    link: "#",
  },
];
export const contactLinks: ContactLinksProps[] = [
  {
    iconSrc: "assets/pinContact.png",
    info: "#",
    backgroundColor: "bg-primary-900",
  },
  {
    iconSrc: "assets/linkContact.png",
    info: "#",
    backgroundColor: "bg-primary-900",
  },
  {
    iconSrc: "assets/twitterContact.png",
    info: "#",
    backgroundColor: "bg-primary-900",
  },
  {
    iconSrc: "assets/whatContact.png",
    info: "https://wa.me/920019936",
    backgroundColor: "bg-primary-900",
  },
  {
    iconSrc: "assets/faceContact.png",
    info: "#",
    backgroundColor: "bg-primary-900",
  },
];
