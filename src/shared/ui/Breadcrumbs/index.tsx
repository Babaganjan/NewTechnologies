'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PRODUCTS_MAP } from '@/shared/config/products.config';
import { ArrowBreadcrumbs } from '@/shared/icons';

import { BREADCRUMBSWORDS } from './Breadcrumbs.const';
import styles from './Breadcrumbs.module.scss';
import type { BreadcrumbWord } from './breadcrumbs.types';

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

  const nameParts = displayName ? displayName.split(' ') : [];
  const lastWord = nameParts.pop()?.toUpperCase();
  const mainPart = nameParts.join(' ');
  const finalDisplayName = lastWord ? `${mainPart} ${lastWord}`.trim() : displayName;

  const defaultArrowColor = 'var(--text-deep-gray)';
  const lastArrowColor = 'var(--bg-white)';

  return (
    <nav className={styles.nav_breadcrumbs} aria-label="Хлебные крошки">
      <ol className={styles.breadcrumbs}>
        {validPath.map((item, index) => {
          const isLastInList = index === validPath.length - 1;
          const isCurrentPage = isLastInList && !hasProductSegment;
          const textColor = !isCurrentPage ? 'var(--text-deep-gray)' : undefined;
          const isLastArrow = isLastInList && hasProductSegment;

          const arrowColor = isLastArrow ? lastArrowColor : defaultArrowColor;

          return (
            <li key={item} className={styles.breadcrumbsItem} style={{ color: textColor }}>
              <Link
                href={`/${path.slice(0, path.indexOf(item) + 1).join('/')}`}
                aria-current={isCurrentPage ? 'page' : undefined}
              >
                {BREADCRUMBSWORDS[item]}
              </Link>

              {(!isCurrentPage || hasProductSegment) && (
                <span aria-hidden="true">
                  <ArrowBreadcrumbs color={arrowColor} />
                </span>
              )}
            </li>
          );
        })}

        {hasProductSegment && displayName && (
          <li className={`${styles.breadcrumbsItem}`}>
            <Link href={pathname} aria-current="page">
              {finalDisplayName}
            </Link>
          </li>
        )}
      </ol>
    </nav>
  );
};
