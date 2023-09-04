# Debounce

Node-typescript App project with 2 interfaces: cli & react, and tested with jest
The main function delay the number of calls to the destination function. It only does the call when it was spend some time. It reduces the calls.

## Installation 

```
cd sprint2/debounce
npm i
cd src/front
npm i
```

## Usage React Interface
```
cd sprint2/debounce/src/front
npm run dev
```

## Usage Cli Interface
```
cd sprint2/debounce/src
npx tsc
```
```bash
node ../dist/cli.js "your debounce text"
```

## Testing
```
cd cli
npx jest
``` 

# Throttle

Node-typescript App project with 2 interfaces: cli & react, and tested with jest
The main function don't repeat the call to destination function any times that the user calls. The number of repeated calls to the destination function only does 1 time in some time. It reduces the calls too.

## Installation 

```
cd sprint2/throttle
npm i
cd src/front
npm i
```

## Usage React Interface
```
cd sprint2/throttle/src/front
npm run dev
```

## Usage Cli Interface
```
cd sprint2/throttle/src
npx tsc --jsx "react-jsx"
```
```bash
node ../dist/cli.js "your throttle text"
```

## Testing
```
cd cli
npx jest
``` 


# Memoize

Node-typescript App project with 2 interfaces: cli & react, and tested with jest
The main function when is called, saves the result of the arguments that receives. When is called again, the main function check if the argument was received, and if is true, that function load the previous result. If the argument is new, the function call to the destiny function, that could be a expensive time and memory function.

## Installation 

```
cd sprint2/memoize
npm i
cd front
npm i
```

## Usage React Interface
```
cd sprint2/memoize/front
npm run dev
```

## Usage Cli Interface
```
cd sprint2/memoize
npx tsc

```
```bash
node dist/cli.js <number>
```

## Testing
```
cd cli
npx jest
``` 