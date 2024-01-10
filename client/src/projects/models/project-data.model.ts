export type ProjectData = {
  id: number;
  attributes: {
    title: string;
    description: string;
    thumbnail: {
      data: {
        id: number;
        attributes: {
          formats: {
            thumbnail: {
              url: string;
            };
          };
        };
      };
    };
    images: {
      data: [{ id: number; attributes: { url: string } }];
    };
  };
};
