// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');
var fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has  been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.getWPLog', function() {
		// The code you place here will be executed every time your command is executed
		handleLogFileDisplay();
	});

	var store = {
		panel: false,
		contents: false,
		currentPath: vscode.workspace.rootPath,
		logFile: vscode.workspace.rootPath + '/wp-content/debug.log'
	};

	var helpers = {
		renderWebView: function(content) {
			return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>WP Debug.log Panel</title>
            </head>
            <body>
                <style>
                </style>
                <div id="log-container">
                    <pre><xmp>${content}</xmp></pre>
                </div>
                <script>
                    window.scrollTo(0,document.body.scrollHeight);
                </script>
            </body>
            </html>`;
		},

		updateLogPanel: function() {
			fs.readFile(store.logFile, 'utf8', (error, contents) => {
				store.contents = helpers.renderWebView(contents);
				store.panel.webview.html = store.contents;
			});
		}
	};

	function handleLogFileDisplay() {
		// Display a message box to the user

		if (fs.existsSync(store.logFile)) {
			store.panel = vscode.window.createWebviewPanel(
				'wpDebugLogWebview', // Identifies the type of the webview. Used internally
				'WP Debug.log Panel', // Title of the panel displayed to the user
				vscode.ViewColumn.One, // Editor column to show the new webview panel in.
				{
					enableScripts: true
				} // Webview options. More on these later.
			);

			vscode.window.showInformationMessage('Listening for changes to WordPress debug.log file');

			helpers.updateLogPanel();

			fs.watchFile(store.logFile, (curr, prev) => {
				helpers.updateLogPanel();
				vscode.window.showInformationMessage('WordPress debug.log file changed.');
			});
		} else {
			vscode.window.showInformationMessage('No WordPress debug.log file found.');
		}
	}

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
};
