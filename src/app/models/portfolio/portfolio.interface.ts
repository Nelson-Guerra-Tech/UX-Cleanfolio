import { Link } from "../navbar/navbar.interface";

export interface Portfolio {
  image: Image
  info: {
    company: string;
    role: string;
    title: string;
    description: string;
    link: Link
  }
}

export interface Image {
  src: string;
  alt: string;
}
