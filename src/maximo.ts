let conIngresos: boolean = false;
let num: number = Number(prompt("Ingrese un número"));
let maxNum: number = num;
while (num !== 0) {
  conIngresos = true;
  if (num > maxNum) {
    maxNum = num;
  }
   num = Number(prompt("Ingrese un número"));
}
if (conIngresos) {
  console.log("El máximo es ", maxNum);
}
