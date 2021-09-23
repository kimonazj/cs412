const foo = (str, defun) => defun(str);

console.log(
  foo("supercalifragilisticexpialidocious", (str) => str.split(/(?=c)/g))
);

console.table(
  foo("supercalifragilisticexpialidocious", (str) => ({
    originalString: str,
    modifiedString: str.replace(/a/g, "A"),
    numberReplaced: (str.match(/a/gi) || []).length,
    length: str.length,
  }))
);
