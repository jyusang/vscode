/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { tryInsertUriList } from './dropIntoEditor';

export function registerPasteProvider(selector: vscode.DocumentSelector) {
	return vscode.languages.registerDocumentPasteEditProvider(selector, new class implements vscode.DocumentPasteEditProvider {

		async provideDocumentPasteEdits(
			document: vscode.TextDocument,
			range: vscode.Range,
			dataTransfer: vscode.DataTransfer,
			token: vscode.CancellationToken,
		): Promise<vscode.WorkspaceEdit | undefined> {
			const enabled = vscode.workspace.getConfiguration('markdown', document).get('experimental.editor.pasteLinks.enabled', false);
			if (!enabled) {
				return;
			}

			const snippet = await tryInsertUriList(document, range, dataTransfer, token);
			if (!snippet) {
				return;
			}

			const edit = new vscode.WorkspaceEdit();
			edit.replace(document.uri, range, snippet.snippet.value);
			return edit;
		}
	});
}
