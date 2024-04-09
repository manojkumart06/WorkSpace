function autocomplete(input, words, limit = 2) {
    // Filter words that start with the input characters
    const matchedWords = words.filter(word => word.startsWith(input));
    
    // Limit the number of suggestions
    const suggestions = matchedWords.slice(0, limit);
    
    return suggestions;
}

// Example usage:
const wordList = ['apple', 'banana', 'orange', 'apricot', 'pear', 'avocado', 'grape', 'pineapple', 'blueberry'];
const userInput = 'a';

const suggestedWords = autocomplete(userInput, wordList);
console.log(suggestedWords); // Output: ['apple', 'apricot']
