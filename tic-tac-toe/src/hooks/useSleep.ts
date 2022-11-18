export const useSleep = () => {
  const sleep = async (interval: number) => {
    return new Promise((resolve) => setTimeout(resolve, interval));
  };
  return [sleep];
};
