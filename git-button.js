IPython.toolbar.add_buttons_group([
{
    label    : 'git commit',
    icon     : 'icon-github-alt',
    callback : function (){
        var nb_name = IPython.notebook.get_notebook_name();
        var nb_filename = '"' + nb_name + '.ipynb"';
        var commit_msg = prompt("Please enter your commit message:", "add this and fix that");
        if(commit_msg !== null){
            var kernel = IPython.notebook.kernel;
            IPython.notebook.save_notebook();
            kernel.execute('!git status || git init');
            kernel.execute('!git add ' + nb_filename);
            kernel.execute('!git commit -m "'+ commit_msg +'"');
        }
    }
}]);
