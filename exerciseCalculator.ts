

interface calculateExercisesReturn {
  numberOfDays: number
  numberOfTrainingDays: number
  originalTargetValue: number
  calculatedAverageTime: number
  targetReachedBool: boolean
  rating1to3: number
  ratingStr: string
}

const calculateExercises = (dailyExerciseHours: Array<number>, target: number): calculateExercisesReturn => {
  const dailyExerciseHoursAvg: number = dailyExerciseHours.reduce((acc, each) => acc + each) / dailyExerciseHours.filter(e => e !== 0).length

  const numberOfDays: number = dailyExerciseHours.length
  const numberOfTrainingDays: number = dailyExerciseHours.filter(e => e !== 0).length
  const originalTargetValue: number = target
  const calculatedAverageTime: number = dailyExerciseHoursAvg
  const targetReachedBool: boolean = dailyExerciseHoursAvg >= target
  const rating1to3: number = 1
  const ratingStr: string = "kek"

  return {
    numberOfDays: numberOfDays,
    numberOfTrainingDays,
    originalTargetValue,
    calculatedAverageTime,
    targetReachedBool,
    rating1to3,
    ratingStr,
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))