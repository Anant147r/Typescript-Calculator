import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstString: string = question("Enter first number:\n");
  const operator: string = question("Enter the operator:\n");
  const secondStr: string = question("Enter the second number:\n");
  const isValid: boolean =
    isNumber(firstString) && isNumber(secondStr) && isOperator(operator);
  console.log(isValid);
  if (isValid) {
    const firstNum: number = parseInt(firstString);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
    main();
  } else {
    console.log("\nInvalid Input\n");
    main();
  }
}

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str);
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

function isOperator(str: string): boolean {
  switch (str) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

main();
