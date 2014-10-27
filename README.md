# prefsEditors #

GPII preferences editors, responsible for authoring user preference sets.

For more background about these tools, see

* [PCPs, PMTs, etc](http://wiki.gpii.net/index.php/PCPs,_PMTs,_etc) and
* [User Preferences UX](http://wiki.gpii.net/index.php/User_Preferences_UX), both on the GPII wiki.


## Installation ##

* Create a directory where you want to check out the preferences editors.
* Navigate to that directory.
* Run the following command

```
git clone https://github.com/GPII/prefsEditors
```


## Running the preferences editors ##

In the new subdirectory "prefsEditors" you will find this README.md file,
a few other files and a few directories.

Go to the prefsEditors directory and install its dependencies

```
# navigate to the prefsEditors directory
cd prefsEditors

# install dependencies
npm install

# start the webserver
node start.js
```

Access the Preferences Management Tool (PMT) at:
http://localhost:8888/demos/prefsEditor/index.html


## Development ##

### Dependencies ###

* [node.js](http://nodejs.org/)
* [grunt-cli](http://gruntjs.com/)

All other dependencies will be installed by running the following from the project root:

```
npm install
```


### Linting ###

```
# Lint all json and js files
grunt

# Lint only js files
grunt jshint

# Lint only json files
grunt jsonlint
```
