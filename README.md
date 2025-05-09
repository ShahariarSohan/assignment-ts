## Blogs

### Enums

In a simple way enums define a set of named constants.In typescript we use enums to work with set of values in a typical manner that means type safe manner. Because in Typescript static typing is the main concept.So enums has created a convenient way to improve code readability and maintainability with set of values.

#### Enums can be either numeric or string-based. Here is the examples :

#### String Enum

- String enums require explicit string values for each member

#### Examples :

```
enum Color {\
Red = "RED",\
Green = "GREEN",\
Blue = "BLUE"\
Black="Black"\
}\
let myColor: Color = Color.Green;\
console.log(myColor); // Output: "GREEN"

```

#### Numeric Enum

- Numeric enums auto-increment numbers (but you can set starting values)

#### Examples :

```
enum Direction {\
Up, // 0\
Down, // 1\
Left, // 2\
Right // 3\
}\
let move: Direction = Direction.Up;\
console.log(move); // Output: 0

```

### Type Inference

Type inference is a built-in feature of typescript. It is a feature that helps compiler to determine type of variable without explicit type .That means when the type of a variable is implicit .The inference feature auto determine the of variable.Which makes the life easy for developers of this generation.This is one of reason that typescript becoming famous day by day.

#### Examples

const name="Jhankar Mahbub";\
const number =10;\
const isTrue =true;
const user={\
name:"Mir Hossain"\
contactNo:"Nai"\
}\
// here typescript can inferred type easily but for some complex cases typescript will not able to infer type.
