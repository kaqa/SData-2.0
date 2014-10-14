---
layout: search
title: Show search results for
---
<link rel="stylesheet" href="{{site.baseurl}}/css/search.css">
<script src="{{site.baseurl}}/js/jquery.tinysort.js"></script>
<script>
 $(document).ready(function() {
	//var q = window.location.search.substring(1).split('=')[1];
	//alert('qq');
	
	/*JekyllSearch.init({
		searchInput: window.location.search.substring(1).split('=')[1],
		jsonFile: "{{site.baseurl}}/search.json",
		searchResultsHeader: "<h1>Search results:</h1>",
		template: "<li><a class='search-result' href='{{site.baseurl}}{url}'>{title}</a></li>",
		searchResults : document.getElementById("search-results"),
		limit: '25',
		noResults: "<h2>No matches found.</h2>",
		fuzzy: true
	});*/
	$().sdataJekyllSearch({
		jsonFile: "{{site.baseurl}}/search.json",
		baseUrl: "{{site.baseurl}}",
		searchResultsTitle: "",	// without title
		template: "<a class='search-result' href='{{site.baseurl}}{url}'>{title}</a><br />",
		body: "content",	// show content
		bodyLen: 500,
		searchResults : "#search-results",
		limit: '25',
		noResults: "<h2>No matches found.</h2><br /><br /><br /><br /><br /><br /><br />"
	});
	
	$('#project_title_subp').html($('#project_title_subp').text() + " <span class='query'>" + window.location.search.substring(1).split('=')[1] + "</span>");
	
	/*$('#search-results').delegate( "a.sort", "click", function(){

		//liclass = $(this).parent().attr('class');
		
		var groups = {
			"sync" : {},
			"core" : {},
			"sdata-20" : {}
		};

		$('ul#search-results > li[class]').each(function(i, el){
			group = $(el).attr('class');
			count = $(el).attr('count');
			
			groups[group][count] = el;
		});

		ul = $('ul#search-results');
		for(var key in groups)
		{
			for(i in groups[key])
			{
				//console.log('['+key+']['+i+']' + ' (' + groups[key][i] + ')');
				ul.append(groups[key][i]);
			}
		}
		//console.log(ul.children().length);

	});*/
 });
</script>


<div id="results">
  <!--h1><script>document.write("<span class='query'>" + window.location.search.substring(1).split('=')[1] + "</span>");</script></h1-->

  <ul id="search-results">
    <!-- results lists -->
  </ul>
</div>