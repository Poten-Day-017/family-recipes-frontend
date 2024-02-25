import { useCallback, useEffect, useRef } from "react";

type useSetTimeOutType = (
  fn: () => void,
  delay: number,
  star?: boolean,
) => {
  reset: () => void;
  clear: () => void;
};

const useTimeout: useSetTimeOutType = (fn, delay, start = true) => {
  const callbackRef = useRef(fn);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(fn, delay);
  }, [fn, delay]);

  const clear = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  useEffect(() => {
    if (start) {
      set();
    }
    return clear; // 와 clear 은 같은 것?
  }, [delay, set, clear, start]);

  return { reset, clear };
};

export default useTimeout;
