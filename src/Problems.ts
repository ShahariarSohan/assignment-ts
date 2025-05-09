function formatString(input: string, booleanValue?: boolean): string {
  if (booleanValue === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

//
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((item) => item.rating >= 4);
  return result;
}

//

//
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    console.log(`Make : ${this.make} , Year: ${this.year}`);
  }
}
class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    console.log(`Model : ${this.model}`);
  }
}
//
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
//
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    const result1 = products?.sort(
      (product1, product2) => product2.price - product1.price
    );
    const result2 = result1?.find((product) => product);
    return result2;
  }
}
const products = [
  { name: "Pen", price: 100 },
  { name: "Notebook", price: 2500 },
  { name: "Bag", price: 5 },
  { name: "Bag", price: 400 },
  { name: "Bag", price: 5 },
];
console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 })
//
async function squareAsync(value: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (value >= 0) {
      setTimeout(() => {
        resolve(value * value);
      }, 1000);
    } else {
      reject("Negative number not allowed");
    }
  });
}
enum Day {
  Monday = "Weekday",
  Tuesday = "Weekday",
  Wednesday = "Weekday",
  Thursday = "Weekday",
  Friday = "Weekday",
  Saturday = "Weekday",
  Sunday = "Weekend",
}

function getDayType(day: Day): string {
  return day;
}
