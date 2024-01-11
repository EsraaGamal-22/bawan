export type ServiceDetailsProps = {
  id: number;
  attributes: {
    title: string;
    description: string;
    icon: {
      data: {
        id: number;
        attributes: {
          url: string;
        };
      };
    };
  };
};
