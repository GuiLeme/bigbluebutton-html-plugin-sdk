import { useEffect, useRef } from 'react';

export const usePreviousValue = <T = unknown>(value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
