import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const elapsedMilliseconds = now.getTime() - createdAt.getTime();

  const seconds = Math.floor(elapsedMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (seconds < 60) {
    return rtf.format(-seconds, 'second');
  } else if (minutes < 60) {
    return rtf.format(-minutes, 'minute');
  } else if (hours < 24) {
    return rtf.format(-hours, 'hour');
  } else if (days < 7) {
    return rtf.format(-days, 'day');
  } else if (weeks < 4) {
    return rtf.format(-weeks, 'week');
  } else if (months < 12) {
    return rtf.format(-months, 'month');
  } else {
    return rtf.format(-years, 'year');
  }
};

export const formatAndDividNumber = (number: number): string => {
  let result: string;
  let factor: number;

  if (Math.abs(number) >= 1e6) {
    result = (number / 1e6).toFixed(2);
    factor = 1e6;
  } else if (Math.abs(number) >= 1e3) {
    result = (number / 1e3).toFixed(2);
    factor = 1e3;
  } else {
    result = number.toFixed(2);
    factor = 1;
  }

  if (result.endsWith('.00')) {
    result = result.slice(0, -3); // Remove trailing '.00'
  }

  return `${result}${factor === 1 ? '' : factor === 1e3 ? 'K' : 'M'}`;
};



