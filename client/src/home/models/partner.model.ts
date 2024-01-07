export type PartnerData = {
  id: number;
  attributes: {
    name: string;
    logo: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
};
