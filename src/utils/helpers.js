export const makeStringFistUp = (receivedString) => {
  return `${receivedString.at(0).toUpperCase()}${receivedString.slice(1)}`;
};
