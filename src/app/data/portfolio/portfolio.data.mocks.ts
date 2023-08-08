import { Portfolio } from "src/app/models/portfolio/portfolio.interface";

export const portfolioDataMocks: Portfolio[] = [
  {
    image: {
      src: "https://picsum.photos/id/209/900",
      alt: ""
    },
    info: {
      company: 'Apple',
      role: 'Lead UX Designer',
      title: "Designing Apple's Digital Brand",
      description: "I've worked on all things digital but my focus now is on charging and trip planning experiences within the mobile app.",
      link: {
        url: {
          path: ''
        },
        label: 'View case Study'
      }
    }
  },
    {
    image: {
      src: "https://picsum.photos/id/325/900",
      alt: ""
    },
    info: {
      company: 'Kore',
      role: 'Lead UX Designer',
      title: "Improving Workplace Communication",
      description: "In a super early-stage startup, I redesigned a desktop and mobile app to change the way people communicate.",
      link: {
        url: {
          path: ''
        },
        label: 'View case Study'
      }
    }
  },
      {
    image: {
      src: "https://picsum.photos/id/340/900",
      alt: ""
    },
    info: {
      company: 'Boosted',
      role: 'Lead UX Designer',
      title: "Branding An Electric Transportation Co.",
      description: "I lead the creative team at Boosted managing their brand, web design, photography, and filmmaking.",
      link: {
        url: {
          path: ''
        },
        label: 'View case Study'
      }
    }
  }
]
