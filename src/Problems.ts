function formatString(input: string, booleanValue?: boolean): string {
  if (booleanValue === false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const result = items.filter((item) => item.rating >= 4);
  return result;
}
function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combinedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return combinedArray;
}

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

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    const sorted = products?.sort(
      (product1, product2) => product2.price - product1.price
    );
    return sorted[0];
  }
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
