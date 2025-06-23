---
layout: page.njk
title: Thoughts
description: Writing on technology leadership, business transformation, and learning from failure
---

# Thoughts

Writing on technology leadership, real-world agile, business transformation, and the valuable lessons that come from failure.

<div class="thoughts-grid">
{% for thought in collections.thoughts %}
  <article class="thought-card" {% if thought.data.color %}style="--card-color: {{ thought.data.color }}"{% endif %}>
    {% if thought.data.image %}
      <div class="thought-image">
        {% image thought.data.image, thought.data.title, "320w, 640w", "(min-width: 768px) 50vw, 100vw" %}
      </div>
    {% elseif thought.data.color %}
      <div class="thought-color-block" style="background: {{ thought.data.color }}"></div>
    {% endif %}
    
    <div class="thought-content">
      <time class="thought-date" datetime="{{ thought.date | date: '%Y-%m-%d' }}">
        {{ thought.date | dateFormat }}
      </time>
      
      <h2 class="thought-title">
        <a href="{{ pathPrefix }}{{ thought.url }}">{{ thought.data.title }}</a>
      </h2>
      
      {% if thought.data.subtitle %}
        <p class="thought-subtitle">{{ thought.data.subtitle }}</p>
      {% endif %}
      
      <div class="thought-excerpt">
        {{ thought.templateContent | excerpt | safe }}
      </div>
      
      <a href="{{ pathPrefix }}{{ thought.url }}" class="read-more">Read full article →</a>
    </div>
  </article>
{% endfor %}
</div>

{% if collections.thoughts.length == 0 %}
<div class="no-thoughts">
  <p>No thoughts published yet. Check back soon for insights on technology leadership, business transformation, and learning from failure.</p>
</div>
{% endif %}
