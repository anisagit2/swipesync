const fs = require('fs');
const path = require('path');

function convertToJSX(html) {
    // Extract everything inside <body>
    let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return '<div />';
    let body = bodyMatch[1];

    let jsx = body
        // Convert class to className
        .replace(/class=/g, 'className=')
        // Convert SVG properties
        .replace(/stroke-width=/g, 'strokeWidth=')
        .replace(/stroke-dasharray=/g, 'strokeDasharray=')
        .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
        .replace(/viewbox=/gi, 'viewBox=')
        // Convert HTML comments to JSX comments
        .replace(/<!--(.*?)-->/gs, '{/* $1 */}')
        // Ensure void elements are closed (like img, input, hr, br)
        // Some are already closed in the HTML, but let's make sure.
        // It's safer to just let the user see it, but we'll try a basic regex.
        // Actually, the HTML provided mostly has `<img ... />` already!
        // So we just need to fix style tags if any, but they are in <head>.
        // Replace style="font-variation-settings: 'FILL' 1;" with React style objects
        .replace(/style="([^"]*)"/g, (match, styleString) => {
            // Very hacky style converter for this specific template
            if (styleString.includes('font-variation-settings')) {
                return `style={{ fontVariationSettings: "'FILL' 1" }}`;
            }
            return match;
        });
        
    return jsx;
}

const pages = ['first', 'second', 'smart', 'collab'];
const names = ['FirstPage', 'SecondPage', 'ThirdPage', 'FourthPage'];

for (let i = 0; i < pages.length; i++) {
    const htmlPath = path.join(__dirname, '..', 'new_frontend', `${pages[i]}.html`);
    const jsxPath = path.join(__dirname, 'src', 'pages', `${names[i]}.jsx`);
    
    if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, 'utf8');
        let jsxBody = convertToJSX(html);
        
        // Link fixes
        if (i === 0) jsxBody = jsxBody.replace(/href="#"/g, 'href="/second"');
        if (i === 1) jsxBody = jsxBody.replace(/href="#"/g, 'href="/third"');
        
        let componentCode = `import React from 'react';
import { Link } from 'react-router-dom';

function ${names[i]}() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden dark min-h-screen">
      ${jsxBody}
    </div>
  );
}

export default ${names[i]};`;

        fs.writeFileSync(jsxPath, componentCode);
        console.log(`Converted ${pages[i]}.html to ${names[i]}.jsx`);
    }
}
