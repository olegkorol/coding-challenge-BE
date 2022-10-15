
# specify a base image
FROM node:16

# setup working directory
WORKDIR '/usr/src/notification-service'

ENV PATH /usr/src/notification-service/node_modules/.bin:$PATH

# install and cache app dependencies
ADD . /usr/src/notification-service
RUN yarn install --silent
RUN yarn build

# start app
CMD ["yarn", "start"]