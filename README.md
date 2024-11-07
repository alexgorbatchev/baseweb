<div style="display: flex; align-items: center;">
  <div style="display: flex; gap: 1em; align-items: center; background: white">
    <img width="250px" src="https://raw.githubusercontent.com/alexgorbatchev/baseweb/9203e53117b10dfd0f3745d30e9ae15d7fd25d0b/documentation-site/public/baseweb-logo.svg"/>
    <img width="100px" src="https://raw.githubusercontent.com/alexgorbatchev/baseweb/9203e53117b10dfd0f3745d30e9ae15d7fd25d0b/documentation-site/public/icons8-fork-100.png"/> 
  </div>
</div>

# Base Web React Components (fork)

**Base** is a design system comprised of modern, responsive, living components [originally created by Uber](https://github.com/uber/baseweb). Base Web is the React & TypeScript implementation of Base.

<img width="500px" src="https://raw.githubusercontent.com/alexgorbatchev/baseweb/6c0c6f507d7f3e7f85a08178feec52c27625f8d7/documentation-site/public/hero.png"/>

## Why fork

On December 19, 2023 [Uber has announced](https://baseweb.design/blog/open-source-engagement/) that they would no longer maintain Baseweb. It's not hard to imagine the reasons why given the tech climate in 2023.

On the same day, an aptly named PR "Big codebase and CI cleanup" ([#5323](https://github.com/uber/baseweb/pull/5323/commits/3d726253fa78425fbacf43b97fef8b3e709fe525)) deleted most of the test files, all of the visual regression snapshots, and all of the infrastructure and setup files, effectively kneecapping the repo.

In 2024 Uber dropped a number of new features and breaking changes, releasing two "major" versions under the new "Open Source Engagement" without any changelog or explanation. Somewhere along the way all documentation for previous versions was removed from the website.

In summary, given the current state of the original repository it is safe to say that it's not usable in any shape or form and may as well be archived.

## The fork

This fork begins from the last known stable release, which was [v13.0.0](https://github.com/uber/baseweb/releases/tag/v13.0.0). The following work has been performed:

- Unit tests are fully passing. Oddly enough even in v13 tests were not passing.
- Complete overhaul of the visual regression tests infrastructure. Besides many issues that prevented it from running, another aptly named PR "fix tsc" ([#5290](https://github.com/uber/baseweb/pull/5290/files)) deleted two VRT stories. The missing stories prevented VRT from passing. Curiously, this was done on June 9, 2023. 
- All dependencies upgraded to latest (as of November 2024), including migration to ESLint 9 with flat config.
- Fixed documentation site build, which also wasn't working.
- Cleaned up and migrated build scripts to [wireit](https://github.com/google/wireit).

I've put in almost a month of full-time work to get this repo to a stable point because we have almost 4,000 imports from `baseui` in our project, and migrating away isn't a viable option.

## Fork goals

The goals of this fork is to keep `baseweb@13` usable going forward. We will upgrading all dependencies at least twice a year and make sure everything works when React 19 ships.

## What's next?

- [ ] Publish the docs.
- [ ] Finalize release process.

<!--
## Usage

```bash
# using yarn
yarn add styletron-react styletron-engine-monolithic

# using npm
npm install styletron-react styletron-engine-monolithic
```

```javascript
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';
import { StatefulInput } from 'baseui/input';

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

export default function Hello () {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <StatefulInput />
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}
```

## Docs

To read the documentation, please visit ~~[baseweb.design](https://baseweb.design)~~ (coming soon).

## Contributing

~~[Contributing](CONTRIBUTING.md)~~

-->