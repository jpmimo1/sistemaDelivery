const textToTitleFormat = (text) => {
  return text.replace(/(^|\s)(\w+)/g, (match, space, word) => {
    const uWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    return space + uWord;
  });
};

const sortRandomArray = (array) => {
  return array.sort(() => Math.random() * 3 - 1);
};

export { textToTitleFormat, sortRandomArray };
