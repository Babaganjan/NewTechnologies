import type { FC } from 'react';

export interface HeadingComponentProps {
  className?: string;
}

export type HeadingComponent = FC<HeadingComponentProps>;

export type AppPath = '/' | '/services/' | '/products/' | '/contacts/';

export type HeadingComponentsMap = Record<AppPath, HeadingComponent>;
