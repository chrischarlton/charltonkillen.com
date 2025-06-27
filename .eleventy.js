module.exports = function(eleventyConfig) {
  // Set path prefix conditionally for GitHub Pages vs local development
  const isProduction = process.env.NODE_ENV === "production" || process.env.GITHUB_ACTIONS;
  eleventyConfig.addGlobalData("pathPrefix", isProduction ? "/charltonkillen.com" : "");
  
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/css/");
  
  // Markdown configuration
  const markdownIt = require("markdown-it");
  const markdownItAnchor = require("markdown-it-anchor");
  
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  
  eleventyConfig.setLibrary("md", markdownLibrary);
  
  // Collections
  eleventyConfig.addCollection("thoughts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/thoughts/*.md").reverse();
  });
  
  // Filters
  eleventyConfig.addFilter("dateFormat", function(date) {
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    }).format(new Date(date));
  });
  
  eleventyConfig.addFilter("excerpt", function(content) {
    const excerpt = content.split("<!--more-->")[0];
    return excerpt;
  });
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};