"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const navItems = {
  "#home": {
    name: "home",
  },
  "#projects": {
    name: "works",
  },
  "#contributions": {
    name: "blog",
  },
  "#about": {
    name: "about",
  },
};

export function MorphicNavbar() {
  const [activePath, setActivePath] = useState("#home");

  const isActiveLink = (path: string) => {
    if (path === "#home") {
      return activePath === "#home";
    }
    return activePath.startsWith(path);
  };

  return (
    <nav className="mx-auto max-w-4xl px-4 py-2">
      <div className="flex items-center justify-center">
        <div className="glass flex items-center justify-between overflow-hidden rounded-xl">
          {Object.entries(navItems).map(([path, { name }], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            const prevPath = index > 0 ? array[index - 1][0] : null;
            const nextPath =
              index < array.length - 1 ? array[index + 1][0] : null;

            return (
              <Link
                className={clsx(
                  "flex items-center justify-center bg-black p-1.5 px-4 text-lg text-white transition-all duration-300 dark:bg-white dark:text-black",
                  isActive
                    ? "mx-2 rounded-xl font-semibold text-lg"
                    : clsx(
                      (isActiveLink(prevPath || "") || isFirst) &&
                      "rounded-l-xl",
                      (isActiveLink(nextPath || "") || isLast) &&
                      "rounded-r-xl"
                    )
                )}
                href={path}
                key={path}
                onClick={(e) => {
                  setActivePath(path);
                  if (path.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(path);
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;
