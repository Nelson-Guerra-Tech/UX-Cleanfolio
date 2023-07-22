import { Link } from "../navbar/navbar.interface";

export interface Portfolio {
  image: Image
  description: {
    projectTitle: string;
    projectInfo: string;
    link: Link
  };

}

export interface Image {
  src: string;
  alt: string;
}
