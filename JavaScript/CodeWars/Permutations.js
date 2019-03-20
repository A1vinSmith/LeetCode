const permutations = (str) => (str.length <= 1) ? [str] :
  Array.from(new Set(
    str.split('')
      .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
      .reduce((r, x) => r.concat(x), [])
  ))


/*
 * first .map(char,i) separates first symbol of input
 * (fx, "abcd" to 'a' and 'bcd' part, then 'b' and 'acd' part( w/o selected char)
then it calls recursively permutations function and for each letter in 'bcd',
'acd' part calls .map(p => char + p) function
*/

