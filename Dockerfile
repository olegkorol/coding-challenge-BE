
# specify a base image
FROM node:16

# setup working directory
WORKDIR '/usr/src/app'

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD . /usr/src/app
RUN yarn install --silent

# start app
CMD ["yarn", "start"]