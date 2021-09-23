const parse_string = (str) => str.split(/(\*{2}|\*|\+|\/|\^|\-|\%)/);
const evaluate = (str) => {
  var arr = parse_string(str);

  switch (arr[1]) {
    case "*":
      return (mul = (left, right) => left * right);

    case "+":
      return (add = (left, right) => +left + +right);

    case "/":
      return (div = (left, right) => left / right);

    case "-":
      return (sub = (left, right) => left - right);

    case "^":
      return (sqr = (left, right) => left ** right);

    case "**":
      return (sqr = (left, right) => left ** right);

    case "%":
      return (mod = (left, right) => left % right);

    default:
      return "error";
  }
};

const expression = "8^3";
let operator = evaluate(expression);

console.log(
  `${expression} = ${operator(
    parse_string(expression)[0],
    parse_string(expression)[2]
  )}`
);
