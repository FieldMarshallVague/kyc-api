# FROM node:10 AS build
FROM node:10 

WORKDIR /

COPY package.json package-lock.json tsconfig.json ./

RUN npm ci

RUN npm install -g typescript

COPY ./src ./src

RUN sh -c tsc


# only copy built files to prod...

# FROM node:10

# COPY --from=build /dist /dist/


#RUN npm run build --prod
CMD ["node", "dist/server.js"]

EXPOSE 5001 