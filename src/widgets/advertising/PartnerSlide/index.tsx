import { memo } from 'react';

export const PartnerSlide = memo<{ id: number; component: React.FC; name: string }>(
  ({ component: PartnerComponent, name }) => (
    <div className="continuous-slide" role="listitem">
      <PartnerComponent aria-label={name} />
    </div>
  )
);

PartnerSlide.displayName = 'PartnerSlide';
