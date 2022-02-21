/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newbookList = [...numbers];
    return newbookList.length === 0
        ? []
        : [newbookList[0], newbookList[newbookList.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const stringToInteger = numbers.map((number: string): number =>
        parseInt(number, 10).toString() === number ? parseInt(number, 10) : 0
    );
    return stringToInteger;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollars = amounts.map((price: string): string =>
        price.substring(0, 1) === "$" ? price.substring(1) : price
    );
    const dollarss = dollars.map((price: string): number =>
        parseInt(price, 10).toString() === price ? parseInt(price, 10) : 0
    );
    return dollarss;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newmessages = messages.map((message: string): string =>
        message.substring(message.length - 1, message.length) === "!"
            ? message.toUpperCase()
            : message
    );
    const newnewmessages = newmessages.filter(
        (message: string): boolean =>
            message.substring(message.length - 1, message.length) !== "?"
    );
    return newnewmessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const ShortWords = words.filter((word: string): boolean => word.length < 4);
    return ShortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGB = colors.map((color: string): boolean =>
        color === "red" || color === "blue" || color === "green" ? true : false
    );
    const TF = RGB.reduce((judge: boolean, tf: boolean) => judge === tf, true);
    return TF;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const newaddends = [...addends];
    const newaddends2 = [...addends];
    const sum = newaddends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const thePrices = newaddends2.join("+");
    return addends.length === 0 ? "0=0" : sum + "=" + thePrices;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newvalue = [...values];
    const firstnegative = newvalue.findIndex((num: number): boolean => num < 0);
    const newvalues = [...values];
    firstnegative !== -1 ? newvalues.splice(firstnegative) : newvalues;
    const sum = newvalues.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    firstnegative !== -1
        ? newvalue.splice(firstnegative + 1, 0, sum)
        : newvalue.splice(values.length, 0, sum);
    return newvalue;
}
