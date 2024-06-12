# secure-hasher

A TypeScript library for generating unique hashes up to 16 characters long, using Node.js 20 or higher. Includes hyphen separators for readability.

## Installation

You can install this library using npm:

```sh
npm install secure-hasher

## Usage
Here is an example of how to use the library to generate a hash:

```typescript
import { generateHash } from 'unique-hash-gen-ts';

const hash = generateHash(16);
console.log(hash); // Example output: "1a2b-3c4d-5e6f-7g8h"
```

## Parameters

length (optional): The length of the generated hash. The default value is 16.
Tests

The library includes automated tests using Node.js 20's native node:test module.

## Gold Sponsorship

[Clinica Work - Plataforma de agendamento para médicos](https://clinica.work).

`