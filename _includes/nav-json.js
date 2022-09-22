{
    {% if site.data.navigation.offerings %}
    "offerings": {
	"title" : "{{ site.data.navigation.offerings.title }}",
	"url" : "{{ site.data.navigation.offerings.url }}",
	"baseurl" : "{{ site.data.navigation.offerings.baseurl }}",
	"items" : [
	    {% for item in site.data.navigation.offerings.items %}
	    {
		"title" : "{{ item.title }}",
		"url" : "{{ item.url }}",
		"baseurl" : "{{ item.baseurl }}",
	    },
	    {% endfor %}
	],
    },
    {% endif %}
    {% if site.data.navigation.offering_links %}
    "offering_links": [
	{% for item in site.data.navigation.offering_links %}
		{
		    "title": "{{item.title}}",		    
		    {% if item.url %} "url": "{{item.url}}", {% endif %}		    
		    {% if item.description %} "description": "{{item.description}}", {% endif %}
		    {% if item.dropdown %}
		    "dropdown" : [
			{% for ditem in item.dropdown %}
			{
			    "title": "{{ditem.title}}",		    
			    "url": "{{ditem.url}}", 
			    {% if ditem.description %} "description": "{{ditem.description}}", {% endif %}
			},
			{% endfor %}
		    ]
		    {% endif %}		    
		},
	{% endfor %}
     
    ],
    {% endif %}
    {% if site.data.navigation.offering_menus %}
    "offering_menus" : [
	{% for term in site.data.navigation.offering_menus %}
	{
	    "term": "{{term.term}}",
	    "baseurl": "{{term.baseurl}}",
	    "items": [
		{% for item in term.items %}
		{
		    "title": "{{ item.title }}",		    
		    {% if item.url %} "url": "{{item.url}}", {% endif %}		    
		    {% if item.description %} "description": "{{item.description}}", {% endif %}
		    {% if item.dropdown %}
		    "dropdown" : [
			{% for ditem in item.dropdown %}
			{
			    "title": "{{ditem.title}}",		    
			    "url": "{{ditem.url}}", 
			    {% if ditem.description %} "description": "{{ditem.description}}", {% endif %}
			},
			{% endfor %}
		    ]
		    {% endif %}		    
		},
		{% endfor %}
	    ],
	},
	{% endfor %}
    ],
    {% endif %}    
}
