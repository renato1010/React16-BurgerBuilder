export function capitalizeWord(str) {
  const capitalUpper = str.toLowerCase()[0].toUpperCase();
  const restOfTheWord = str.toLowerCase().slice(1);
  return capitalUpper + restOfTheWord;
}
