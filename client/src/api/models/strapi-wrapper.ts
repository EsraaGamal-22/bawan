import { StrapiMeta } from "./strapi-meta.model";

export type StrapiWrapper<T> = {
  data: T;
  meta: StrapiMeta;
};
