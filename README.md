Hello from Svelte!👋
========================

The "Hello from Svelte!👋" application is just a starter to show a minimalist Svelte.js app.

Requirements
------------

* [Node.js][1]
* [NPM][1], [PNPM][2] or [Yarn][3]

Installation
------------

Clone this repository:

```console
https://github.com/abdounikarim/poc-svelte
```

Go on the project root folder:

```console
cd poc-svelte/
```

Install JavaScript dependencies:

```console
pnpm install
```

_Or use the equivalent command with npm or yarn_

Usage
-----

There's no need to configure anything before running the application. There are
2 different ways of running this application depending on your needs:

**Option 1. Run the application in dev mode**

Run this command:

```bash
pnpm run dev
```

Then access the application in your browser at the given URL (<http://localhost:5173> by default).

**Option 2. Run the application in prod mode**

```bash
pnpm run build
```
You now have your fresh JavaScript files for production 🚀.
You can check everything is OK by opening the `index.html` file and navigate on your application.

Tests
-----

Execute this command to run tests:

```bash
pnpm exec playwright test
```

[1]: https://nodejs.org/en/download/package-manager
[2]: https://pnpm.io/installation
[3]: https://yarnpkg.com/getting-started/install
