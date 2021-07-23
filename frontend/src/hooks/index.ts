import { useState } from 'react';

export const useAlert = () => {
  const [alert, setAlert] = useState(false);

  const dispatchAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return {
    alert,
    dispatchAlert,
  };
};
