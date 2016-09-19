---
layout: simple
title: Talks
permalink: /talks/
---

<h1>talks<b>.</b></h1>

<ul class="posts">
{% for post in site.posts %}
  <li>
    <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
      <div class="bg" style="background-image: url({{ post.cover }})"></div>
      <div class="post-details">
        <h2>{{ post.title }}</h2>
        <div class="post-summary">{{ post.summary }}</div>
      </div>
    </a>
  </li>
{% endfor %}
</ul>

