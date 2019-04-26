# Typescript

> Typescript can be understood as a wrapper language around javascript which enables a lot of features which javascript is lacking currently. Example compilation time type checking , interfaces etc . This brings the power of a strongly typed language to javascript. Typescript files are compiled to javascript files (.ts -> .js)

**Example command: tsc app.ts -> app.js**

> To map a d.ts file to its javascript file you need to give the d.ts file the same name as the javascript file, keep them in the same folder, and point the code that needs it to the d.ts file.

eg: test.js and test.d.ts are in the testdir then you import it like this in a react component:

`import * as Test from "./testdir/test";`
The d.ts file was exported as a namespace like this:

```js
export as namespace Test;
export interface TestInterface1{}
export class TestClass1{}
```

## Tutorials followed:

- Scrimba typescript https://scrimba.com/g/gintrototypescript

## Useful links:

- Explaining d.ts file - https://stackoverflow.com/questions/21247278/about-d-ts-in-typescript
