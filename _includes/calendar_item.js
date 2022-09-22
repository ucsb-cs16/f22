{
    "type" : "{{type}}",
    "url" :  "{{ item.url | relative_url  }}",	   
    {% if item.num %}"num" : "{{ item.num }}",{% endif %}
    {% if item.assigned %}"assigned" : "{{ item.assigned }}",{% endif %}
    {% if item.due %}"due" : "{{ item.due }}",{% endif %}    
    {% if item.ready %}"ready" : "{{ item.ready }}",{% endif %}
    {% if item.desc %}"desc" : "{{ item.desc | strip_newlines | strip }}",{% endif %}
    {% if item.exam_date %}
      "date" : "{{ item.exam_date }}",
    {% elsif item.lecture_date %}
      "date" : "{{ item.lecture_date }}",
    {% endif %}
}
