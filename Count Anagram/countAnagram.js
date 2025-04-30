function countAnagrams(dictionary, query) {
  const freqMap = new Map();

  // Preprocess the dictionary: count frequencies of each sorted string
  for (const word of dictionary) {
    const key = [...word].sort().join("");
    freqMap.set(key, (freqMap.get(key) || 0) + 1);
  }

  const result = [];
  // Process each query: count anagrams using the preprocessed map
  for (const word of query) {
    const key = [...word].sort().join("");
    result.push(freqMap.get(key) || 0);
  }

  return result;
}
