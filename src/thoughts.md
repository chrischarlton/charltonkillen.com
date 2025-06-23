---
layout: page.njk
title: Thoughts
description: Writing on technology leadership, business transformation, and learning from failure
---

# Thoughts

Writing on technology leadership, real-world agile, business transformation, and the valuable lessons that come from failure.

<div class="thoughts-grid">
{% for thought in collections.thoughts %}
  <article class="thought-card"{% if thought.data.color %} style="--card-color: {{ thought.data.color }}"{% endif %}>
    {% if thought.data.color %}
      <div class="thought-color-block" style="background: {{ thought.data.color }}"></div>
    {% endif %}
    
    <div class="thought-content">
      <time class="thought-date">{{ thought.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) }}</time>      
      <h2 class="thought-title">
        <a href="{{ pathPrefix }}{{ thought.url }}">{{ thought.data.title }}</a>
      </h2>
      
      <div class="thought-excerpt">
        <p>{{ thought.data.description or "Read more..." }}</p>
      </div>
      
      <a href="{{ pathPrefix }}{{ thought.url }}" class="read-more">Read full article →</a>
    </div>
  </article>
{% endfor %}
</div>

{% if collections.thoughts.length == 0 %}
<div class="no-thoughts">
  <p>No thoughts published yet. Check back soon!</p>
</div>
{% endif %}
