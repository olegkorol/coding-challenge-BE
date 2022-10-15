
# specify a base image
FROM node:16

# setup working directory
WORKDIR '/usr/src/react-app'

# add `/usr/src/react-app/node_modules/.bin` to $PATH
ENV PATH /usr/src/react-app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD . /usr/src/react-app
RUN yarn install --silent

# start app
CMD ["yarn", "start"]