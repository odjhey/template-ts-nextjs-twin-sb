# Component Library for The Guild

This setup demonstrates a TypeScript Next.js app (`packages/app`) importing a separate component library (`packages/shared-ui`) using either [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) or [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

## Get started

From inside the new folder, start the dev server with yarn:

```bash
yarn && yarn build && yarn dev
```

or npm:

```bash
npm install && npm run build && npm run dev
```

> npm@7+ is required to use the [workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) feature.<br/>Update to latest with: `npm install -g npm@latest`

To start Storybook:

```bash
cd packages/shared-ui
yarn storybook
```

## Features

- **Simple, speedy workflow**<br/>After starting the next app `yarn dev` you can work on the components in `packages/shared-ui` and receive HMR updates in your app
- **Simple multi-project configs**
  - Shared styles in `tailwind.config.js`
  - Shared babel settings in `babel.config.js`
  - Shared twin config in `package.json` and `types`
- **Automatic component type generation**<br/>
  Start live component type updates with `yarn types:watch`

## Resources

- [styled-components](https://styled-components.com/)
- [Twin](https://github.com/ben-rogerson/twin.macro)

Taken from: https://github.com/FrontWorkDotDev/guild-components
Based off of:
[https://github.com/ben-rogerson/twin.examples/tree/master/component-library-styled-components](https://github.com/ben-rogerson/twin.examples/tree/master/component-library-styled-components)
