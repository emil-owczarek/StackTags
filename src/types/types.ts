export interface Tag {
  name: string;
  count: number;
}

export interface TagsApiResponse {
  items: Tag[];
}

export interface HeadCell {
  id: "name" | "popular";
  numeric: boolean;
  label: "Tag Name" | "Count";
}
