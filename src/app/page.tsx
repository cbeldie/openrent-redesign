import Link from "next/link";
import Image from "next/image";

import { HydrateClient } from "~/trpc/server";

// UI Components
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Navigation } from "~/components/navigation";
import { Search } from "~/components/search";
import { Properties } from "./properties";

export default async function Home() {
  return (
    <HydrateClient>
      {/* Header */}
      <header className="flex w-full items-center justify-between px-4 py-2 shadow">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={128} height={128} />
        </Link>

        <Navigation />
      </header>

      {/* Main */}
      <main className="min-h-screen">
        <div>
          {/* Container for search bar + distance and number of bedrooms */}
          <div className="flex justify-between px-4 py-2">
            <Search />
            <div className="flex items-center gap-2">
              <Input placeholder="Distance" />
              <Input placeholder="Bedrooms" />
            </div>
          </div>
          <div className="flex min-h-screen flex-col gap-2 border bg-gray-100 px-4 py-2">
            <div className="flex items-center justify-between">
              <span className="flex gap-1 text-zinc-500">
                We have found
                <p className="font-bold text-black">100 properties </p>that
                match your criteria
              </span>
              <Button className="flex gap-2 bg-white text-black shadow hover:bg-white hover:shadow-lg">
                <Image src="/filter.svg" alt="Filter" width={16} height={16} />
                Advanced filtering
              </Button>
            </div>

            <Properties />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
