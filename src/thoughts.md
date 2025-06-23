---
layout: page.njk
title: Thoughts
description: Writing on technology leadership, business transformation, and learning from failure
---

# Thoughts

Writing on technology leadership, real-world agile, business transformation, and the valuable lessons that come from failure.

<div class="thoughts-list">
{% for thought in collections.thoughts %}
  <article class="thought-item">
    <time class="thought-meta" datetime="{{ thought.date | date: '%Y-%m-%d' }}">
      {{ thought.date | dateFormat }}
    </time>
    
    <h2 class="thought-title">
      <a href="{{ pathPrefix }}{{ thought.url }}">{{ thought.data.title }}</a>
    </h2>
    
    <div class="thought-excerpt">
      <p>{{ thought.data.description or "Read more about this topic..." }}</p>
    </div>
    
    <a href="{{ pathPrefix }}{{ thought.url }}" class="read-more">Read full article →</a>
  </article>
{% endfor %}
</div>

{% if collections.thoughts.length == 0 %}
<div class="no-thoughts">
  <p>No thoughts published yet. Check back soon for insights on technology leadership, business transformation, and learning from failure.</p>
</div>
{% endif %}
