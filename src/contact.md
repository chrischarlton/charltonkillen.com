---
layout: page.njk
title: Contact
description: Get in touch about technology consultancy, speaking opportunities, or to discuss ideas
---

# Get in touch

I'm interested in connecting with people who are thinking about technology, sustainability, and how to make change work in the real world.

## How I can help

<div class="services-grid">
  <div class="service-card">
    <h3>Technology Strategy</h3>
    <p>Invite me to assess your organisation's technology systems, plans, processes and people. Let's work together to make sure you have the right plan in place to support your goals and create positive impact.</p>
  </div>
  
  <div class="service-card">
    <h3>Agile project management</h3>
    <p>Are you or your team(s) struggling to get things done? Let's work together to see what agile methods we could implement or improve in order to find that productive flow.</p>
  </div>

  <div class="service-card">
    <h3>Speaking</h3>
    <p>Invite me to speak or present on any of the topics you've seen on this website. I'm particularly interested in ethical business, technology implementation, and learning from failure.</p>
  </div>
  
  <div class="service-card">
    <h3>Discussion</h3>
    <p>Reach out if you'd like to discuss anything you've read on my site in more detail. It's hard to convey every detail and there's always more to any story. I'm interested to hear your perspective, especially if it's different to mine.</p>
  </div>
</div>

## Contact form

<form class="contact-form" action="https://formspree.io/f/xyzjnpyv" method="POST">
  <div class="form-group">
    <label for="name" class="form-label">Name *</label>
    <input type="text" id="name" name="name" class="form-input" required aria-describedby="name-error">
    <div class="form-error" id="name-error"></div>
  </div>
  
  <div class="form-group">
    <label for="email" class="form-label">Email address *</label>
    <input type="email" id="email" name="email" class="form-input" required aria-describedby="email-error">
    <div class="form-error" id="email-error"></div>
  </div>
  
  <div class="form-group">
    <label for="phone" class="form-label">Phone number (optional)</label>
    <input type="tel" id="phone" name="phone" class="form-input">
  </div>
  
  <div class="form-group">
    <label for="message" class="form-label">Message *</label>
    <textarea id="message" name="message" rows="6" class="form-input form-textarea" required aria-describedby="message-error" placeholder="Comments, questions, ideas. What would you like to say?"></textarea>
    <div class="form-error" id="message-error"></div>
  </div>
  
  <!-- Honeypot field for spam prevention -->
  <div class="honeypot">
    <label for="website">Don't fill this out if you're human:</label>
    <input type="text" id="website" name="website" tabindex="-1">
  </div>
  
  <button type="submit" class="form-submit">Send message</button>
  
  <div class="form-status">
    <div class="form-success" id="form-success">Thank you! Your message has been sent. I'll get back to you soon.</div>
    <div class="form-error" id="form-error">There was a problem sending your message. Please try again.</div>
  </div>
</form>

---

<div class="highlight-box">
  <p><strong>Response time:</strong> I aim to respond to your messages within 2-3 working days, but if it takes longer please be patient.</p>
</div>
