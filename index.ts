// http://localhost:3003/bmi?height=180&weight=72.

// ex9.4
import express from 'express';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

// ex9.5
app.get('/bmi', (req, res) => {
  const { weight, height } = req.query
  let bmi: number = 0
  if (!isNaN(Number(weight)) && !isNaN(Number(height))) {
    bmi = Number(weight) / (Number(height) * 0.01) ** 2;
    let bmiString: string = ''
    if (bmi > 30) {
      bmiString = `you're fat`
    } else {
      bmiString = `you're not yet`
    }
    res.send({
      weight: weight,
      height: height,
      bmi: bmiString,
    })
  } else {
    throw new Error("weight and height are not numbers")
  }
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});