const Image = require("@11ty/eleventy-img");
const path = require("path");

// Image shortcode for responsive images
async function imageShortcode(src, alt, sizes = "100vw", loading = "lazy") {
  try {
    let metadata = await Image(src, {
      widths: [320, 640, 960, 1280, 1920],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/images/",
      urlPath: "/charltonkillen.com/images/",
      sharpOptions: {
        animated: false
      }
    });
    
    let imageAttributes = {
      alt,
      sizes,
      loading,
      decoding: "async",
    };
    
    return Image.generateHTML(metadata, imageAttributes);
  } catch (error) {
    console.warn(`Image processing failed for ${src}:`, error.message);
    return `<img src="${src}" alt="${alt}" loading="${loading}">`;
  }
}

// Gallery shortcode for multiple images  
async function galleryShortcode(images, alt = "Gallery image") {
  let galleryHTML = '<div class="gallery">';
  
  for (let src of images) {
    try {
      let metadata = await Image(src, {
        widths: [320, 640, 960],
        formats: ["avif", "webp", "jpeg"],
        outputDir: "./_site/images/",
        urlPath: "/charltonkillen.com/images/",
        sharpOptions: {
          animated: false
        }
      });
      
      let imageAttributes = {
        alt,
        sizes: "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
        loading: "lazy",
        decoding: "async",
      };
      
      galleryHTML += `<div class="gallery-item">${Image.generateHTML(metadata, imageAttributes)}</div>`;
    } catch (error) {
      console.warn(`Gallery image processing failed for ${src}:`, error.message);
      galleryHTML += `<div class="gallery-item"><img src="${src}" alt="${alt}" loading="lazy"></div>`;
    }
  }
  
  galleryHTML += '</div>';
  return galleryHTML;
}

module.exports = function(eleventyConfig) {
  // Set path prefix conditionally for GitHub Pages vs local development
  const isProduction = process.env.NODE_ENV === "production" || process.env.GITHUB_ACTIONS;
  eleventyConfig.addGlobalData("pathPrefix", isProduction ? "/charltonkillen.com" : "");
  
  // Add image shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addNunjucksAsyncShortcode("gallery", galleryShortcode);
  
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
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