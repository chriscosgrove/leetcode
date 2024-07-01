export function firstUniqChar(s: string): number {
    
    interface LetterCount {
        letter: string;
        count: number;
        firstSeenIndex: number;
    }
    
    const alreadySeenLetters: LetterCount[] = [];
    
    s.split('').forEach((char: string, index: number) => {
        // Find the letter in the alreadySeenLetters array
        const foundLetter = alreadySeenLetters.find((letter) => letter.letter === char);
    
        if (foundLetter) {
            // If the letter is found, increment its count
            foundLetter.count++;
        } else {
            // If the letter is not found, add it to the array with count 1
            alreadySeenLetters.push({ letter: char, count: 1, firstSeenIndex: index });
        }    
    });

    const firstUniqueLetter = alreadySeenLetters.find((letter) => letter.count === 1);

    if(firstUniqueLetter === undefined)
        return -1

    return firstUniqueLetter.firstSeenIndex;
};