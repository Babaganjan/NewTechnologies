'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ArrowBreadcrumbs } from '@/shared/icons';

import { BREADCRUMBSWORDS } from './Breadcrumbs.const';
import styles from './Breadcrumbs.module.scss';
import type { BreadcrumbWord } from './breadcrumbs.types';

import { PRODUCTS_MAP } from '@/shared/config/products.config';

interface BreadcrumbsProps {
  productName?: string;
}

export const Breadcrumbs = ({ productName }: BreadcrumbsProps = {}) => {
  const pathname = usePathname();
  const path = pathname.split('/').filter(Boolean);

  const validPath = path.filter((item): item is BreadcrumbWord => item in BREADCRUMBSWORDS);

  const hasProductSegment = path.length > validPath.length;
  const productSegment = hasProductSegment ? path[path.length - 1] : null;

  const displayName = productName || (productSegment ? PRODUCTS_MAP[productSegment] : null);

  return (
    <nav aria-label="Хлебные крошки">
      <ol className={`container ${styles.breadcrumbs}`}>
        {validPath.map((item, index) => {
          const isLast = index === validPath.length - 1 && !hasProductSegment;
          const itemColor = !isLast ? 'var(--text-deep-gray)' : undefined;

          return (
            <li key={item} className={styles.breadcrumbsItem} style={{ color: itemColor }}>
              <Link
                href={`/${path.slice(0, path.indexOf(item) + 1).join('/')}`}
                aria-current={isLast ? 'page' : undefined}
              >
                {BREADCRUMBSWORDS[item]}
              </Link>
              {(!isLast || hasProductSegment) && (
                <span aria-hidden="true">
                  <ArrowBreadcrumbs />
                </span>
              )}
            </li>
          );
        })}

        {/* Добавляем продукт, если он найден */}
        {hasProductSegment && displayName && (
          <li className={styles.breadcrumbsItem}>
            <Link href={pathname} aria-current="page">
              {displayName}
            </Link>
          </li>
        )}
      </ol>
    </nav>
  );
};
