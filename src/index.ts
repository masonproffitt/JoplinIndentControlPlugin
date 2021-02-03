import joplin from 'api';
import { ContentScriptType } from 'api/types';

joplin.plugins.register({
	onStart: async function() {
		await joplin.plugins.registerContentScript(
			ContentScriptType.CodeMirrorPlugin,
			'IndentationControl',
			'./IndentationControl.js'
		);
	},
});
