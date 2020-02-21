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
  birthDate: string;
  deathDate: string;
  placeOfBirth: string;
  image: string;
}
