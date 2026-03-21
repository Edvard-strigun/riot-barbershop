declare global {
  interface Window {
    yWidget?: {
      setButtons: () => void;
    };
  }
}

export {};
