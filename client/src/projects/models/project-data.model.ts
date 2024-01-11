export type Project = {
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
      // دي معناها انها اراي واحده فيها كذا مذا
      // data: [{ id: number; attributes: { url: string } }];
      // دي معناها اراي اوف كذا
      data: { id: number; attributes: { url: string } }[];
    };
  };
};
