prefsEditors
============

GPII preferences editors, responsible for authoring user preference sets.

For more background about these tools, see 

    http://wiki.gpii.net/index.php/PCPs,_PMTs,_etc

and 

    http://wiki.gpii.net/index.php/User_Preferences_UX


Installation
------------

Create a directory where you want to check out the preferences editors.
Go to that directory.
Run the following command 

    git clone https://github.com/GPII/prefsEditors

Then run the following command in your newly checked out prefsEditors repository. 
This will pull all dependencies that are required by the prefsEditors.

    npm install

Running the preferences editors
-------------------------------

In the new subdirectory "prefsEditors" you will find this README.md file, 
a few other files and a few directories. 

Copy the folders "demos", "src" and "tests" to a web server of your choice.

Identify the URL that would point to the file prefsEditors/demos/prefsEditor/index.html
on the web server and enter that URL in your browser to run the preferences editors.


More detailed instructions are available at

    http://wiki.gpii.net/index.php/Running_the_PMT_%26_PCP_on_Windows_and_Linux_with_a_local_web_server


