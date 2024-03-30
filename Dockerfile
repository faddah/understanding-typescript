FROM nginx:1-alpine3.18
#RUN wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | sh
#RUN nvm install 20.11.0
RUN apk update && apk add nodejs-current npm
ADD package*.json ./
RUN npm install
ADD . /usr/share/nginx/html
