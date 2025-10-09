## How to setup typescript globally

- open gitbash in administator mode
- run command npm install -g typescript
- to check if it is installed or not tsc - v
- create a file with ts extension
- run the file with command tsc filename.ts -> to convert a typescript code into plain javascript

# Install TypeScript

npm install -g typescript    # global
npm install --save-dev typescript # per project


# Initialize TS config

npx tsc --init
This generates a tsconfig.json file.

# Compile TS to JS

npx tsc               # compiles all .ts files based on tsconfig.json
npx tsc index.ts      # compiles a single file


# Common tsconfig.json compiler options

"target" → JS version to output (e.g., "ES6", "ES2020").
"module" → Module system ("commonjs", "esnext").
"outDir" → Where compiled JS files go.
"rootDir" → Source folder for TS files.
"strict" → Enables strict type-checking rules.
"esModuleInterop" → Makes importing CommonJS modules easier.

👉 Example tsconfig.json:
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

# Difference between .ts and .tsx

.ts → Normal TypeScript file (no JSX allowed).
.tsx → TypeScript file with JSX support (used in React projects).