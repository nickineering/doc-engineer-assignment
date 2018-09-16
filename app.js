const search = instantsearch({
	appId: 'P1CNOY80LV',
	apiKey: '12a0e2f2e0c7c22ef8220bb905900d10',
	indexName: 'doc-test',
    urlSync: true
});

// initialize SearchBox
search.addWidget(
	instantsearch.widgets.searchBox({
		container: '#search-input',
		placeholder: 'Search the docs'
	})
);

const hitTemplate = '<a href="{{link}}#{{hash}}">{{{h1}}}</a><br/> ' +
    '{{{_highlightResult.h2.value}}} {{{_highlightResult.h3.value}}} {{{_highlightResult.h4.value}}} ' +
    '{{{_snippetResult.content.value}}}<br/><br/>'

search.addWidget(
	instantsearch.widgets.hits({
		container: '#hits',
		templates: {
			empty: "We didn't find any results for the search <em>\"{{query}}\"</em>",
			item: hitTemplate
		}
	})
);

search.start();
