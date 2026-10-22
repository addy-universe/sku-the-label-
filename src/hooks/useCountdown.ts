import { useState, useEffect } from "react";

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
  totalRemainingMs: number;
}

export function useCountdown(targetDateISO: string): CountdownState {
  // Ensure target timestamp is parsed correctly with its explicit timezone
  const targetTimestamp = new Date(targetDateISO).getTime();

  const calculateTimeRemaining = (): CountdownState => {
    const now = Date.now();
    const diff = targetTimestamp - now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isLive: true,
        totalRemainingMs: 0,
      };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds),
      isLive: false,
      totalRemainingMs: diff,
    };
  };

  const [state, setState] = useState<CountdownState>(calculateTimeRemaining);

  useEffect(() => {
    // Run immediately to ensure freshness
    setState(calculateTimeRemaining());

    const timer = setInterval(() => {
      const nextState = calculateTimeRemaining();
      setState(nextState);

      if (nextState.isLive) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO, targetTimestamp]);

  return state;
}
