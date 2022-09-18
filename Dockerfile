FROM mcr.microsoft.com/playwright:v1.25.0-focal

WORKDIR /usr/src/app

COPY . .

RUN apt-get install nodejs -y

RUN npm install -y

EXPOSE 3000

CMD ["npm", "run", "start"]
