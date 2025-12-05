'use client';
import { motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import { fadeInUp } from '@/shared/animations/scroll-animations';
import { Button } from '@/shared/ui';

import { DocumentItem } from '../DocumentItem';
import type { IDocumentsItems } from '../documents.const';

interface DocumentsListProps {
  documents: IDocumentsItems[];
}

const INITIAL_ITEMS_COUNT = 5;

export const DocumentsList = ({ documents }: DocumentsListProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_ITEMS_COUNT);
  const [isExpanding, setIsExpanding] = useState(false);

  const visibleDocuments = useMemo(
    () => documents.slice(0, visibleCount),
    [documents, visibleCount]
  );

  const hasMore = visibleCount < documents.length;

  const handleLoadMore = useCallback(() => {
    setIsExpanding(true);
    setVisibleCount(documents.length);
  }, [documents.length]);

  return (
    <>
      <motion.ul variants={fadeInUp} className="documents-list">
        {visibleDocuments.map((item, index) => (
          <DocumentItem
            key={item.id}
            item={item}
            index={index}
            isActive={activeIndex === index}
            hasActiveItem={activeIndex !== null}
            onActivate={setActiveIndex}
            onDeactivate={() => setActiveIndex(null)}
            isAnimated={index >= INITIAL_ITEMS_COUNT && isExpanding}
          />
        ))}
      </motion.ul>

      {hasMore && (
        <div className="documents__button">
          <Button
            variant="primary"
            aria-label="Загрузить еще документы"
            icon
            rotate
            onClick={handleLoadMore}
            scrambler
          >
            Загрузить еще
          </Button>
        </div>
      )}
    </>
  );
};
