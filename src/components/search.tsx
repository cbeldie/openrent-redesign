import * as React from "react";
import Image from "next/image";

import { Input } from "~/components/ui/input";

const Search: React.FC = () => {
  return (
    <div className="group flex rounded border border-zinc-100 px-3 shadow focus-within:ring-1 focus-within:ring-zinc-200 hover:border-zinc-200">
      <Image src="/search.svg" alt="Search" width={16} height={16} />
      <Input
        className="border-none shadow-none focus-visible:ring-transparent"
        type="search"
        placeholder="Search..."
      />
    </div>
  );
};

export { Search };
