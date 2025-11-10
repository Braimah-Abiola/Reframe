"use client";

import { useCallback, useEffect, useState } from "react";

interface UsePreloaderOptions {
  duration?: number;
  autoStart?: boolean;
}

export const usePreloader = ({
  duration = 3000,
  autoStart = true,
}: UsePreloaderOptions = {}) => {
  const [isLoading, setIsLoading] = useState(autoStart);
  const [isExiting, setIsExiting] = useState(false);

  const startPreloader = useCallback(() => {
    setIsLoading(true);
    setIsExiting(false);
  }, []);

  const completePreloader = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsExiting(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (!autoStart || !isLoading || isExiting) return;

    const timer = setTimeout(() => {
      completePreloader();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, autoStart, isLoading, isExiting, completePreloader]);

  return {
    isLoading,
    isExiting,
    startPreloader,
    completePreloader,
  };
};
