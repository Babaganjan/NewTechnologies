import type { FC } from 'react';

export interface HeadingComponentProps {
  className?: string;
}

export type HeadingComponent = FC<HeadingComponentProps>;

export type AppPath = '/' | '/services/' | '/production/' | '/contacts/';

export type HeadingComponentsMap = Record<AppPath, HeadingComponent>;