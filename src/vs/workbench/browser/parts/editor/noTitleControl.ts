/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IEditorPartOptions } from 'vs/workbench/common/editor';
import { EditorInput } from 'vs/workbench/common/editor/editorInput';
import { TitleControl, IToolbarActions, ITitleControlDimensions } from 'vs/workbench/browser/parts/editor/titleControl';
import { Dimension } from 'vs/base/browser/dom';
import { IEditorGroupTitleHeight } from 'vs/workbench/browser/parts/editor/editor';

export class NoTitleControl extends TitleControl {
	protected create(parent: HTMLElement): void { }
	protected handleBreadcrumbsEnablementChange(): void { }
	protected prepareEditorActions(editorActions: IToolbarActions): IToolbarActions {
		return editorActions;
	}

	getHeight(): IEditorGroupTitleHeight {
		return { total: 0, offset: 0 };
	}

	layout(dimensions: ITitleControlDimensions): Dimension {
		return Dimension.None;
	}

	closeEditor(editor: EditorInput, index: number | undefined): void { }
	closeEditors(editors: EditorInput[]): void { }
	openEditor(editor: EditorInput): void { }
	openEditors(editors: EditorInput[]): void { }
	moveEditor(editor: EditorInput, fromIndex: number, targetIndex: number): void { }
	pinEditor(editor: EditorInput): void { }
	stickEditor(editor: EditorInput): void { }
	unstickEditor(editor: EditorInput): void { }
	setActive(isActive: boolean): void { }
	updateEditorLabel(editor: EditorInput): void { }
	updateEditorDirty(editor: EditorInput): void { }
	updateOptions(oldOptions: IEditorPartOptions, newOptions: IEditorPartOptions): void { }
}
