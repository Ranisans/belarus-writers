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
  page: string;
  language: string;
  fullName: string;
  birthDate: string;
  deathDate: string;
  placeOfBirth: string;
  image: string;
  gallery: Gallery[];
  timeline: TimeLine[];
  works: Works[];
  map: MapData[];
  video: VideoData[];
}

export interface Works {
  date: string;
  title: string;
}

export interface TimeLine {
  title: string;
  description: string;
  date: string;
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

export interface VideoProps {
  video: VideoData;
}

export interface VideoData {
  videoURL: string;
  title: string;
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

export interface WorklogModel {
  name: string;
  worklog: TaskModel[];
}

export interface TaskModel {
  title: string;
  hours: number;
}

export interface EvaluationModel {
  title: string;
  tasks: EvaluationTaskModel[];
}

export interface EvaluationTaskModel {
  title: string;
  score: number;
  done: boolean;
}

export interface TeamMemberModel {
  id: string;
  nickname: string;
  avatar: string;
  name: string;
  description: string;
}
