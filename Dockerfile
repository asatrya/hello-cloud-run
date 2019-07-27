FROM node:12.4

# This folder will all commands be run in, like the HOME folder
WORKDIR /app

# Add our sourcecode
ADD . /app

# Install dependency
RUN npm install

# The command to start our container
CMD node server.js