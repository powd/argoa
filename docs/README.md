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
