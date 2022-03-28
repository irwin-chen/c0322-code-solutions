/* exported truncate */
function truncate(length, string) {
  var trunc = '';
  trunc += string.slice(0, length) + '...';
  return trunc;
}

// truncate(length, string)
// cuts off a piece of argument string from the beginning to argument length, then adds ellipses at the end of the string. returns shortened string with ellipses
// - create new string
//   - slice original string starting from the beginning of the string to designated length, adds ellipses, all equal to new string
// - return new string
