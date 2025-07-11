// intersection
// function

type Person = {
  name: string;
  age: number;
};

type Student = Person & {
  studentId: string;
};

function notReturn(info: string): void {
  console.log(info);
}

notReturn("This function is not returning anything");

function calcNum(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(calcNum(5, 6));
