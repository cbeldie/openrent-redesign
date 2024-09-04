"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "~/components/ui/separator";
import {
  Card,
  CardFooter,
  CardDescription,
  CardImage,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { api } from "~/trpc/react";

export function Properties() {
  const [isLoading, setIsLoading] = useState(true);
  const [properties] = api.post.getProperties.useSuspenseQuery();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-80 items-center justify-center">
        <svg
          className="h-12 w-12 animate-spin text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-20"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <circle
            className="opacity-75"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray="80"
            strokeDashoffset="60"
            strokeLinecap="round"
          ></circle>
        </svg>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {properties.map((property, i) => (
        <Card key={i}>
          <CardImage distance={property.distance}>
            <Carousel>
              <CarouselContent>
                {property.images.map((image, i) => (
                  <CarouselItem key={i} className="relative h-64 w-full">
                    <Image
                      src={image}
                      alt="Property Image"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-tl-lg rounded-tr-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="absolute left-1 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 shadow-lg hover:bg-gray-200" />
              <CarouselNext className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 shadow-lg hover:bg-gray-200" />
            </Carousel>
          </CardImage>
          <CardHeader>
            <CardTitle>{property.title}</CardTitle>
            <CardDescription className="mt-2">
              <span className="flex items-center gap-1 text-lg font-semibold">
                £{property.rent}
                <p className="text-sm text-gray-400">per month</p>
              </span>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <div className="flex items-center justify-between">
              <div className="flex h-3 items-center space-x-2 text-sm">
                <div className="flex gap-1">
                  <Image
                    src="/bed.svg"
                    width={12}
                    height={12}
                    alt="Bed"
                    className="hidden lg:block"
                  />
                  <p className="text-zinc-500">{property.bedrooms} beds</p>
                </div>
                <Separator orientation="vertical" />
                <div className="flex gap-1">
                  <Image
                    src="/bath.svg"
                    width={14}
                    height={14}
                    alt="Bath"
                    className="hidden lg:block"
                  />
                  <p className="text-zinc-500">{property.baths} bath</p>
                </div>
                <Separator orientation="vertical" />
                <div className="flex gap-1">
                  <Image
                    src="/furniture.svg"
                    width={14}
                    height={14}
                    alt="Furniture"
                    className="hidden lg:block"
                  />
                  <p className="text-zinc-500">
                    {property.furnished ? "Furnished" : "Unfurnished"}
                  </p>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
