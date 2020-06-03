FROM node:12-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# add app
COPY . /app
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent


# start app
CMD ["npm", "start"]