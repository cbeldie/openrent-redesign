import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// Mocked DB
interface Properties {
  title: string;
  rent: number;
  bedrooms: number;
  baths: number;
  furnished: boolean;
  distance: number;
  images: string[];
}

const properties: Properties[] = [
  {
    title: "Luxury Apartment, High Street, London",
    rent: 1500,
    bedrooms: 3,
    baths: 2,
    distance: 0.68,
    furnished: true,
    images: ["/apartment1-1.jpg", "/apartment1-2.jpg", "/apartment1-3.jpg"],
  },
  {
    title: "Cozy Studio, Main Road, Manchester",
    rent: 850,
    bedrooms: 1,
    baths: 1,
    distance: 1.2,
    furnished: false,
    images: ["/studio1-1.jpg", "/studio1-2.jpg", "/studio1-3.jpg"],
  },
  {
    title: "Spacious House, Baker Street, Birmingham",
    rent: 2200,
    bedrooms: 4,
    baths: 3,
    distance: 3,
    furnished: true,
    images: ["/house1-1.jpg", "/house1-2.jpg", "/house1-3.jpg"],
  },
  {
    title: "Modern Flat, Queensway, Leeds",
    rent: 1200,
    bedrooms: 2,
    baths: 1,
    distance: 5.78,
    furnished: false,
    images: ["/flat1-1.jpg", "/flat1-2.jpg", "/flat1-3.jpg"],
  },
  {
    title: "Stylish Loft, George Square, Glasgow",
    rent: 1800,
    bedrooms: 2,
    baths: 2,
    distance: 10,
    furnished: true,
    images: ["/loft1-1.jpg", "/loft1-2.jpg", "/loft1-3.jpg"],
  },
];

export const postRouter = createTRPCRouter({
  getProperties: publicProcedure.query(() => {
    return properties;
  }),
});
