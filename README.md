# Product Widgets

Product Widgets is an application that you can view, manage, and customize your widgets.

## Tech Stack

- TypeScript
- React
- Redux
- Vite
- Vitest
- Jest
- Tailwind CSS

## How It Works

1. Product Widgets lists existing widget on mount.

2. Each widget badge is customizable by clicking on colour options.

3. Only one widget can have the active state at a time.

4. There are 3 mutable states for each wdiget. Colour, active state, and public profile link option

5. Each widget state is store in the Redux store. State changes are on the client side after the inial fetch request.

6. Theme colors are stored in the tailwind configuration file and related classes are generated according to the project theme.

## Usage

1. Install the dependencies:

```bash
npm install
```

2. Run local development server

```bash
npm run dev
```

3. Build project

```bash
npm run build
```

4. Test project

```bash
npm run test
```
