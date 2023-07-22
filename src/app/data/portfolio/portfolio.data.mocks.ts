import { Portfolio } from "src/app/models/portfolio/portfolio.interface";

export const portfolioDataMocks: Portfolio[] = [
  {
    image: {
    src: 'https://placehold.jp/3d4070/ffffff/500x500.png',
    alt: 'img'
  },
  description: {
    projectTitle: "Helsinki Region Transport",
    projectInfo: "Web platform for 1.7 million public transport passengers",
    link: {
      url: {
        readMore: 'Read More',
      },
      label: 'Read More'
    }
    }
  }
]

export const portfolio2DataMocks: Portfolio[] = [
  {
    image: {
    src: 'https://placehold.jp/3d4070/ffffff/500x500.png',
    alt: 'img'
  },
  description: {
    projectTitle: "Helsinki Region Transport",
    projectInfo: "Web platform for 1.7 million public transport passengers",
    link: {
      url: {
        readMore: 'Read More'
      },
      label: 'Read More'
    }
    }
  }

]
