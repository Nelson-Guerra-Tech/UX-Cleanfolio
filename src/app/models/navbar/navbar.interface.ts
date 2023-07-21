export interface Navbar {
  logo: string;
  links: Link;
}

export interface Link {
  url: {
    home: 'Home';
    about: 'About';
    contact: 'Contact';
  };
  label?: string;
}
