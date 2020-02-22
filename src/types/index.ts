export interface Data {
  allMarkdownRemark: AllMarkdownRemark;
}

export interface AllMarkdownRemark {
  edges: Array<Edge>;
}

export interface Edge {
  node: Node;
}

export interface Node {
  frontmatter: Frontmatter;
}

export interface Frontmatter {
  id: number;
  fullName: string;
  birthData: string;
  deathDate: string;
  placeOfBirth: string;
  image: string;
  gallery: Gallery[];
}

export interface Gallery {
  alt: string;
  image: string;
}
