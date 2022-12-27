import React from 'react';
import Link from 'next/link';

function Navigation({ title = 'Andres' }: { title: string }) {
  return (
    <nav
      aria-label="Site Nav"
      className="mx-auto max-w-3xl flex items-center justify-between p-4"
    >
      <Link
        href="/"
        className="inline-flex h-10 w-fit px-4 items-center justify-center rounded-lg bg-gray-100"
      >
        <span className="sr-only">Logo</span>
        {title}
      </Link>

      <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
        <li className="hidden lg:block">
          <Link
            href="/apply"
            className="rounded-lg px-3 py-2"
          >Apply</Link>
        </li>
      </ul>
    </nav>

  );
}

export default Navigation;
