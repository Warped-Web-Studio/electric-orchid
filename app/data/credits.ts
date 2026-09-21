/**
 * Stock photo credits, rendered on /credits. Every photo is from Pexels
 * (free to use under the Pexels License; credited anyway). Names and profile
 * links were checked against each photo's Pexels page in September 2026.
 */

export type Credit = {
  file: string;
  /** where the photo appears on the site, in plain words */
  usedFor: string;
  photographer: string;
  photographerUrl: string;
  source: string;
  sourceUrl: string;
};

export const credits: Credit[] = [
  {
    file: "hero-back.jpg",
    usedFor: "Hero backdrop",
    photographer: "Ana Bregantin",
    photographerUrl: "https://www.pexels.com/@ana-bregantin-892791/",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/person-touching-own-bac-1929938/",
  },
  {
    file: "studio-antlers.jpg",
    usedFor: "The room — main photo",
    photographer: "Cedé Joey",
    photographerUrl: "https://www.pexels.com/@cede-joey-2050570/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/chic-tattoo-studio-interior-with-antlers-decor-28991522/",
  },
  {
    file: "studio-room.jpg",
    usedFor: "The room — studio floor",
    photographer: "Cedé Joey",
    photographerUrl: "https://www.pexels.com/@cede-joey-2050570/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/elegant-tattoo-studio-interior-with-chandelier-28991529/",
  },
  {
    file: "process-mono.jpg",
    usedFor: "The room — artist mid-session",
    photographer: "Hirsh Philippe",
    photographerUrl: "https://www.pexels.com/@hirsh-philippe-2816636/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/monochrome-photo-of-a-tattoo-artist-13346118/",
  },
  {
    file: "neon-devil.jpg",
    usedFor: "Neon sign band",
    photographer: "Amber Kipp",
    photographerUrl: "https://www.pexels.com/@kipp/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/tattoo-and-piercing-neon-sign-at-night-8405874/",
  },
  {
    file: "artist-mara.jpg",
    usedFor: "Artist portrait",
    photographer: "Lany-Jade Mondou",
    photographerUrl: "https://www.pexels.com/@lany/",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/grayscale-photo-of-a-woman-11369381/",
  },
  {
    file: "artist-silas.jpg",
    usedFor: "Artist portrait",
    photographer: "Eric Moura",
    photographerUrl: "https://www.pexels.com/@eric-moura-859101902/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/moody-portrait-of-muscular-tattooed-man-30461950/",
  },
  {
    file: "artist-june.jpg",
    usedFor: "Artist portrait",
    photographer: "Sandro Tavares",
    photographerUrl: "https://www.pexels.com/@sandro-tavares-260503371/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/a-tattooed-woman-in-black-tank-top-looking-over-shoulder-12685342/",
  },
  {
    file: "artist-koa.jpg",
    usedFor: "Artist portrait",
    photographer: "Fabrizio Velez",
    photographerUrl: "https://www.pexels.com/@fabriziovelez/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/shirtless-man-with-a-tattoo-of-a-woman-on-his-back-19083764/",
  },
  {
    file: "work-script-neck.jpg",
    usedFor: "Gallery",
    photographer: "Amin mlk",
    photographerUrl: "https://www.pexels.com/@amin-mlk-152148114/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/black-and-white-photo-of-woman-with-tattoo-on-her-back-10581618/",
  },
  {
    file: "work-fineline-arm.jpg",
    usedFor: "Gallery",
    photographer: "cottonbro studio",
    photographerUrl: "https://www.pexels.com/@cottonbro/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/close-up-shot-of-tattoo-on-person-s-arm-5088459/",
  },
  {
    file: "work-floral-hand.jpg",
    usedFor: "Gallery",
    photographer: "Marina Ryazantseva",
    photographerUrl: "https://www.pexels.com/@marina-ryazantseva-78161760/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/close-up-view-of-arm-with-tattoo-10141587/",
  },
  {
    file: "work-web-chest.jpg",
    usedFor: "Gallery",
    photographer: "Antoni Shkraba",
    photographerUrl: "https://www.pexels.com/@shkrabaanthony/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/tattoo-machine-on-a-client-s-shoulder-7005670/",
  },
  {
    file: "work-linework.jpg",
    usedFor: "Gallery",
    photographer: "Sergey Meshkov",
    photographerUrl: "https://www.pexels.com/@19x14/",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/close-up-of-tattooing-9676078/",
  },
  {
    file: "work-neck-blue.jpg",
    usedFor: "Gallery",
    photographer: "Dan Prado",
    photographerUrl: "https://www.pexels.com/@dan-prado-141463/",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/man-tattooing-person-on-arm-428105/",
  },
  {
    file: "process-artist.jpg",
    usedFor: "Word of mouth",
    photographer: "Janusz Mitura",
    photographerUrl: "https://www.pexels.com/@mitura1952photo/",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/woman-making-tattoo-to-man-15591579/",
  },
  {
    file: "process-hand.jpg",
    usedFor: "Booking",
    photographer: "cottonbro studio",
    photographerUrl: "https://www.pexels.com/@cottonbro/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/person-in-black-pants-with-black-leather-shoes-4125612/",
  },
  {
    file: "storefront.jpg",
    usedFor: "Footer band",
    photographer: "Brett Sayles",
    photographerUrl: "https://www.pexels.com/@brett-sayles/",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/grayscale-photo-of-tattoo-neon-signage-2087995/",
  },
];
