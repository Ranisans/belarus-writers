import { GatsbyImageProps, FluidObject } from 'gatsby-image';

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
  language: string;
  fullName: string;
  birthDate: string;
  deathDate: string;
  placeOfBirth: string;
  image: string;
  gallery: Gallery[];
  timeline: TimeLine[];
  works: Work[];
}

export interface Work {
  date: string;
  title: string;
}

export interface TimeLine {
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
}

export interface Gallery {
  alt: string;
  image: string;
}

export interface MapData {
  lat: number;
  lon: number;
  title: string;
  description: string;
}
export interface GatsbyImage extends GatsbyImageProps {
  id: string;
  fluid: Fluid;
}

export interface Fluid extends FluidObject {
  originalName: string;
}

export interface ImgNode {
  node: GatsbyImage;
}
