# Argoa

A sandbox project which pretends to be a discussion web application.

The project is totally experimental.

## Aims

- Try a modular approach. **Why?**
  - Local reasoning
  - Good isolation
    - Encapsulate with package scopes!
  - Transfer types shared between frontend and backend
- Try a Next.js/Nestjs hybrid.
  - **Is it even feasible to have them both in one repo under appropriate subdirectories?**
    - We'll see.
  - Roots for the apps above should reside within `apps/` directory.
  - Module-specific code should reside within `apps/<SOME_MODULE>` directory.
    - Only the `types` and/or `entry points` should be exported.
  - Get use of the features of both frameworks
    - Static/server-side rendering with Next.js
      - ...but communicate to the Nestjs backend locally through HTTP (within `getServerSideProps` or `getStaticProps`)
    - ...
- By the way, learn something of the `paths` configuration with `package.json`
  - Kind of "inversion of control"? (Try to import/export different, "substituted" modules by configuring different paths for different enviornments/apps)

**It is probably a terrible idea, but why not have some fun with experimentation?**

### Assumptions

- Clean code > libraries > frameworks
  - Prefer isolating clean code that doesn't drag any dependencies unneccessarily from the rest of stuff
  - If it it not possible, prefer using library over a framework
  - If it it not possible, try to "bend" the framework as much as possible
    - That's why the NextJS app has been "dragged out" from the rest of code into the `apps/frontend-server` directory
    - This means that frameworks must subordinate to the general rules or override them
      - Example: global or local `eslintrc`/`prettierc` files

## Running apps

Frontend server:

```bash
npm run fes:dev
```

Api server:

```bash
npm run apis:dev
```

## Running unit tests

Normally, Wallaby can be used to keep all the tests being run in the editor (in the background).

This can be also done from the terminal:

```bash
npm t
```

Or, to run only the tests from a specific module (instead of `modules`, the prefix might be also `apps`, or `shared` modules - see the `workspaces` sections in the `package.json` file):

```bash
npm t -w modules/users
```

## TODO

This is test.

> [Danger Zone](./partials/danger-zone.md)

