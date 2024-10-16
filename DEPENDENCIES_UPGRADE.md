# Dependencies Upgrade

## Notes

- `playwright` version has to match `FROM mcr.microsoft.com/playwright:...` in the `Dockerfile`
- `react-map-gl` can't be upgraded due to license changes ([source](https://github.com/visgl/react-map-gl/blob/v6.0.0/docs/get-started/mapbox-tokens.md)). This package is only used in tests.
