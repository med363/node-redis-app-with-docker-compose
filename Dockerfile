FROM node
MAINTAINER Med Amine Blibech <blibechmedamine@gmai.com >
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY index.js /usr/src/app/
EXPOSE 8080
CMD [ "npm", "start" ]
