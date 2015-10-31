# Desktop controller

This is a tiny client-server app written in express and angular to remote control a destkop computer.
It allows control the computer volume and power it off. Nevertheless it can be easily customized to 
add any desired feature.
 
I have developed and tested it on a Linux desktop computer but it should work also in OS X.  For Windows users volume 
control will not work as it is based on (node-loudness)[https://github.com/LinusU/node-loudness] package.

## Getting Started

#### Prerequisites

You must have node.js and its package manager (npm) installed.
You can get them from [http://nodejs.org/](http://nodejs.org/).

#### Set up

#### Install Dependencies

There are two kinds of dependencies in this project: server and frontend code.

* tools via `npm`, the [node package manager][npm].
* frontend dependencies via `bower`, a [client-side code package manager][bower].

`npm` is preconfigured to automatically run `bower` so you can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/public/bower_components` - contains the frontend dependencies

*Note that the `bower_components` folder would normally be installed in the root folder but
this project changes this location through the `.bowerrc` file.  Putting it in the public folder allows
express to serve the files.*

You can optionally generate app icons by doing:
```
grunt appIcons
```

### Starting the app

You can start the application by simply doing:

```
node bin/www
```

Now the app should be reachable from a browser by accessing to http://<your_ip>:4242/ 

### Starting the app as a service

You can use pm2 to have the controller running as a service.
To do so start by installing pm2 globally:

```
npm install pm2 -g
```

The start the application via pm2:

```
pm2 start bin/www
```

Save the process list:
```
pm2 save
```

And finally you can set pm2 to autostart with the computer by running the above command and following the instructions:
```
pm2 startup
```

## Directory Layout

```
app/                    --> all of the source files for the application
    public/             --> all frontend files
        assets/app.css  --> stylesheet
        src/            --> all frontend javascript files
    routes/             --> express routes
    views/              --> express views in ejs
    app.js              --> express base app
bin/
    www                 --> startup script  
```

## Updating

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the frontend dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.
