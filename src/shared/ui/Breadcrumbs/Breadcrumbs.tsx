'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ArrowBreadcrumbs } from '@/shared/icons';

import { BREADCRUMBSWORDS } from './Breadcrumbs.const';
import styles from './Breadcrumbs.module.scss';
import type { BreadcrumbWord } from './breadcrumbs.types';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const path = pathname.split('/').filter(Boolean);

  const validPath = path.filter((item): item is BreadcrumbWord => item in BREADCRUMBSWORDS);

  return (
    <ol className={`container ${styles.breadcrumbs}`}>
      {validPath.map((item, index) => {
        const lastIndex = index !== validPath.length - 1;
        const itemColor = lastIndex ? 'var(--text-deep-gray)' : undefined;

        return (
          <li key={item} className={styles.breadcrumbsItem} style={{ color: itemColor }}>
            <Link href={`/${path.slice(0, path.indexOf(item) + 1).join('/')}`}>
              {BREADCRUMBSWORDS[item]}
            </Link>
            {lastIndex && (
              <span>
                <ArrowBreadcrumbs />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
};
