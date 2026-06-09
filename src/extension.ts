import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('HelloWorld', () => {
		vscode.window.showInformationMessage('Hello World from a!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
