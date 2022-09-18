import { useState } from "react";

function useStateWithReset<T>(
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>, () => void] {
  const [state, setState] = useState<T>(initialValue);

  const reset = () => {
    setState(() => initialValue);
  };

  return [state, setState, reset];
}

export { useStateWithReset };
