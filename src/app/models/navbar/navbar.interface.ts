export interface Navbar {
  logo: string;
  links: Link;
}

export interface Link {
  url: {
    home: string;
    about: string;
    contact: string;
  };
  label?: string;
}
