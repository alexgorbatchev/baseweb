FROM mcr.microsoft.com/playwright:v1.48.0-noble

WORKDIR /baseui

# Copy manifests and install dependencies.
# Doing this before a build step can more effectively leverage Docker caching.
COPY package.json yarn.lock /baseui/
RUN yarn

COPY . .
RUN yarn build
RUN yarn e2e:build
