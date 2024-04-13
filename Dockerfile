FROM nginx:1-alpine3.18
RUN apk update && apk add nodejs-current npm
ADD package*.json ./
RUN npm install
ADD . /usr/share/nginx/html
CMD [ "npm", "install", "-g", "npm@latest", "n@latest", "nodemon@latest", "typescript@latest", "yarn@latest"]
