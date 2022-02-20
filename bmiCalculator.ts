


// ex9.1 9.3

interface inputsResult {
  heightCM: number
  weightKG: number
}

const getInputs = (args: Array<string>): inputsResult => {
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      heightCM: Number(args[2]),
      weightKG: Number(args[3]),
    }
  }
  throw new Error("Enter numbers!")
}

const calculateBmi = (heightCM: number, massKG: number): number => {
  const heightM: number = heightCM * 0.01
  return (massKG) / (heightM ** 2)
}

try {
  const { heightCM, weightKG } = getInputs(process.argv)
  console.log(calculateBmi(heightCM, weightKG))
} catch (error: unknown) {
  let errorMessage = "Error: "
  if (error instanceof Error) {
    errorMessage = error.message
  }
  console.log(errorMessage)
}