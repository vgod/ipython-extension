IPython Notebook Extension
==========================

git-button.js
-------------


git-button.js adds a "git commit" button in IPython notebook. This extension
provides a light-weight method to put your notebooks under version control
with git. 

Each time you clicks the "git commit" button, the notebook is saved and 
committed into git with the commit message you provide. The extension also
initialize an empty git repo automatically when you click the button first time.

To enable this extension in your IPython notebook, put this piece of code in your custom.js (which is usually at `~/.ipython/profile_default/static/custom/custom.js`).

```javascript
$([IPython.events]).on('app_initialized.NotebookApp', function(){
   $.getScript('http://rawgithub.com/vgod/ipython-extension/master/git-button.js');
});
```

See `sample-custom.js` for a complete sample file of custom.js.
