'use client';
import React from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

export function ClientOnly({ children }: ClientOnlyProps) {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <>{children}</>;
}
