
// ex9.1
const calculateBmi = (heightCM: number, massKG: number): number => {
  const heightM: number = heightCM * 0.01
  console.log(heightM)
  return (massKG) / (heightM ** 2)
}

console.log(calculateBmi(180, 74))