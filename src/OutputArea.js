import React from 'react';
const marked = require('marked');
const Highlight = require('react-highlight');

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
});

export function OutputArea(props) {
	
	const html = marked(props.outputText || '');

	return (
		<Highlight className="output-field" innerHTML={true}>{html}</Highlight>
	);
}