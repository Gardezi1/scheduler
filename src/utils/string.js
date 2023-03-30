/**
 * capitalize each word of a string
 * @param {string} str 
 * @returns 
 */
export function capitalizeEachWordInString (str){
    let formattedString = ''   
    if (str)
        formattedString = `${str}`.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return formattedString;
}