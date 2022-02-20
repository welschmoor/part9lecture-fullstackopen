
type Operation = 'multiply' | 'add' | 'divide';

interface CalculatorValuesInterface {
  a: number;
  b: number;
}


const calculatorValues = (args: Array<string>): CalculatorValuesInterface => {
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return { a: Number(args[2]), b: Number(args[3]) }
  } else {
    throw new Error("These were not numbers you have entered")
  }
}



type Result = number
const calculator = (a: number, b: number, operation: Operation): Result => {
  if (operation === 'add') {
    return a + b
  } else if (operation === 'multiply') {
    return a * b
  } else if (operation === 'divide') {
    if (b === 0) { throw new Error('ZeroDivisionError') }
    return a / b
  }
  throw new Error('Operation is wrong')
}

try {
  const { a, b } = calculatorValues(process.argv)
  console.log("args", process.argv)
  const result = calculator(a, b, 'add');
  console.log(result)
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ` Error: ` + error.message
  }
  console.log(errorMessage)
}

