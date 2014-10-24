prefsEditors
============

GPII preferences editors, responsible for authoring user preference sets.

For more background about these tools, see 

* [PCPs, PMTs, etc](http://wiki.gpii.net/index.php/PCPs,_PMTs,_etc) and
* [User Preferences UX](http://wiki.gpii.net/index.php/User_Preferences_UX), both on the GPII wiki.


Installation
------------

Create a directory where you want to check out the preferences editors.
Go to that directory.
Run the following command 

    git clone https://github.com/GPII/prefsEditors

Go to the prefsEditors directory and install its dependencies

	cd prefsEditors
	npm install


Running the preferences editors
-------------------------------

While still in the prefsEditors directory, run

	node start.js

and visit

	http://localhost:8888/demos/prefsEditor/index.html

for the Preferences Management Tool (PMT)
