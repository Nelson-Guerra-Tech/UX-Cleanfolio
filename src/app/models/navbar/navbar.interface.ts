export interface Navbar {
  logo: string;
  links: Link;
}

export interface Link {
  url: {
    home?: 'Home' | 'Work';
    about?: 'About';
    contact?: 'Contact';
    readMore?: 'Read More'
    path?: string;
  };
  label?: string;
}
