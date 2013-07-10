Personal Control Panel
===

The [Personal Control Panel](http://wiki.gpii.net/index.php/Personal_Control_Panel) is a control panel that is adapted to the user's
needs and preferences. It lets the user edit his preferences, see the effects, and eventually overwrite his old settings.

---
### A note about installation
The Personal Control Panel requires node-webkit. Since it is too big to be included in this repository, it should be downloaded
separately. Here is a link to the [node-webkit repository](https://github.com/rogerwang/node-webkit).

1. Download the prebuilt binary according to your operating system.
2. Extract the content of the zip file in `universal/node_modules`.
3. Rename the folder to `node-webkit`.

Now you should have the `nw` executable in `universal/node_modules/node-webkit`.

---
### How to use
1. Start GPII and log in with a user of your choice.
2. A Personal Control Panel window should appear with some basic preferences displayed.
3. Modify the settings and press Update.

These new preferences will be merged into your preferences set and applied to the system, so you can see their effect.
However, they are not stored permanently - they are only a preview.

---
### Rendering Engine
Currently the Personal Control Panel is rendered using [node-webkit](https://github.com/rogerwang/node-webkit). Another tested option
is [appjs](http://appjs.org/). Basically any web browser can be used for the task. The migration is as simple as modifying the
`gpii.personalControlPanel.launch` function in `universal/gpii/node_modules/personalControlPanel/src/personalControlPanel.js`.

---
### Displayed Preferences
The default displayed preferences are "Font Size", "Foreground Color" and "High Contrast". This set can be easily substituted by
providing a list (json) of preferences to be displayed to the `start` function of the PCP.

### Displayed Preferences JSON Format
The displayed preferences list is a javascript array of preference objects. Each preference object should contain at least three of
the following fields:

* id
* preferenceName
* preferenceDescription
* valueSpace
* value

#### id (Mandatory)
The registry entry for the preference.

#### preferenceName (Mandatory, Unique)
The human-readable name for the preference. This one will be presented to the user.

#### preferenceDescription (Optional)
A short description of what this preference modifies.

#### valueSpace (Mandatory)
This defines the possible values that the preference may have. There are three types of value spaces:

* boolean - represented by a checkbox. The valueSpace should be set to "boolean".
* enumerated - represented by a drop-down list. The valueSpace should be an array containing the possible values.
* range - represented by a slider. The valueSpace should be an object of the type: `{start: <number>, end: <number>, step: <number>}`

#### value (Optional)
The value, that will be initially selected. This can be used by the matchmaker for highlighting recommended settings. The default
values depending on the valueSpace are:

* boolean - false
* enumerated - the first value (the first element of the array)
* range - the first value (the value of the `start` field)

### Displayed Preferences JSON Example
This is the default setup used by the PCP:

    [ { id: "http://registry.gpii.org/common/fontSize",
        preferenceName: "Font Size",
        preferenceDescription: "Make letters bigger or smaller.",
        valueSpace: {start: 8, end: 24, step: 1},
        value: 12 },

      { id: "http://registry.gpii.org/common/foregroundColor",
        preferenceName: "Foreground Color",
        preferenceDescription: "Change the color of letters.",
        valueSpace: ["Black", "White", "Green", "Blue", "Yellow"],
        value: "Black" },

      { id: "http://registry.gpii.org/common/highContrast",
        preferenceName: "High Contrast",
        preferenceDescription: "",
        valueSpace: "boolean",
        value: false } ]
