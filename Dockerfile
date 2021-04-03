FROM node:current-alpine

RUN ["apk" , "add", "--update" ,"python" ,"make" , "g++"]

COPY ./package.json ./

RUN [ "yarn", "install"]

COPY . .

RUN [ "npm", "run", "build" ]

CMD [ "npm", "run", "express" ]