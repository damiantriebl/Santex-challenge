import { useState, useEffect } from 'react';

function useStateWithStorage<T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const storedValue = localStorage.getItem(key);
  const initial: T = storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useStateWithStorage;
