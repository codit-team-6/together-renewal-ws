'use client';

import {useEffect, useState} from 'react';

type ClientOnlyProps = {
  children: React.ReactNode;
};
export function ClientOnly({children}: ClientOnlyProps): React.ReactNode {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return children;
}
