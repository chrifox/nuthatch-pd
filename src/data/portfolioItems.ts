import p001 from "../assets/portfolio/painting/001.jpg";
import p002 from "../assets/portfolio/painting/002.jpg";
import p003 from "../assets/portfolio/painting/003.jpg";
import p004 from "../assets/portfolio/painting/004.jpg";
import p005 from "../assets/portfolio/painting/005.jpg";
import p006 from "../assets/portfolio/painting/006.jpg";
import p007 from "../assets/portfolio/painting/007.jpg";
import p008 from "../assets/portfolio/painting/008.png";
import t001 from "../assets/portfolio/tiling/001.jpg";
import t002 from "../assets/portfolio/tiling/002.jpg";
import t003 from "../assets/portfolio/tiling/003.jpg";

export interface PortfolioItem {
  image: string;
  instagramUrl: string;
}

// Painting (p) and tiling (t) images interleaved so they alternate throughout
export const portfolioItems: PortfolioItem[] = [
  {
    image: p001,
    instagramUrl: "https://www.instagram.com/p/DVLoAFOCBFk/?img_index=1",
  },
  {
    image: p002,
    instagramUrl: "https://www.instagram.com/p/DVLvjDAiPRU/?img_index=1",
  },
  {
    image: t001,
    instagramUrl: "https://www.instagram.com/p/DVLvREpCKP4/?img_index=1",
  },
  {
    image: p003,
    instagramUrl: "https://www.instagram.com/p/DVLwCbviIpW/?img_index=1",
  },
  {
    image: p004,
    instagramUrl: "https://www.instagram.com/p/DVLx5eDCIW3/?img_index=1",
  },
  {
    image: t002,
    instagramUrl: "https://www.instagram.com/p/DVLwTk-iDAg/?img_index=1",
  },
  {
    image: p005,
    instagramUrl: "https://www.instagram.com/p/DWOguPeCELQ/?img_index=1",
  },
  {
    image: p006,
    instagramUrl: "https://www.instagram.com/p/DWOyk60CIlR/?img_index=1",
  },
  {
    image: t003,
    instagramUrl: "https://www.instagram.com/p/DVLxZWoCGQ1/?img_index=1",
  },
  {
    image: p007,
    instagramUrl: "https://www.instagram.com/p/DWO061xCDYY/?img_index=1",
  },
  {
    image: p008,
    instagramUrl: "https://www.instagram.com/p/DWO2DC7iMuL/?img_index=1",
  },
];
