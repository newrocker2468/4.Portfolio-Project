// src/components/LazyIcon.tsx
import React, { Suspense, lazy } from "react";

interface LazyIconProps {
  iconName: string;
}

const LazyIcon: React.FC<LazyIconProps> = ({ iconName }) => {
  const IconComponent = lazy(() => import(`../icons/${iconName}.tsx`));

  return (
    <Suspense fallback={<div className='loader'>Loading...</div>}>
      <IconComponent />
    </Suspense>
  );
};

export default LazyIcon;
