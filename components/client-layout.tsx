"use client";

import { LoadingScreen } from "@/components/loading-screen";
import { useLoading } from "@/hooks/use-loading";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const { isLoading, handleLoadingComplete } = useLoading();

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return <>{children}</>;
}
