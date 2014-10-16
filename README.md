# prefsEditors #


GPII preferences editors, responsible for authoring user preference sets.

For more background about these tools, see

* [PCPs, PMTs, etc](http://wiki.gpii.net/index.php/PCPs,_PMTs,_etc) and
* [User Preferences UX](http://wiki.gpii.net/index.php/User_Preferences_UX), both on the GPII wiki.


## Installation ##


Create a directory where you want to check out the preferences editors.
Go to that directory.
Run the following command

```
git clone https://github.com/GPII/prefsEditors
```


## Running the preferences editors ##

In the new subdirectory "prefsEditors" you will find this README.md file,
a few other files and a few directories.

Copy the folders "demos", "src" and "tests" to a web server of your choice.

Identify the URL that would point to the file prefsEditors/demos/prefsEditor/index.html
on the web server and enter that URL in your browser to run the preferences editors.


More detailed instructions are available on the page [Running the PMT & PCP on ... a local web server](http://wiki.gpii.net/index.php/Running_the_PMT_%26_PCP_on_Windows_and_Linux_with_a_local_web_server).

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
