import * as d3 from "d3";
/**
 * Collapses child nodes of a tree
 */
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

/**
 * Generates an array specifying node size based on the screen width
 * @param {number} width
 * @param {number} height
 * 
 * @returns {Array} An array containing two dimensions: [width, height]
 */
export function generateNodeSize(width, height) {
    switch(true) {
        case (width <= 400):
            return [width/5, height/5];
        case (width > 400 && width <= 600):
            return [width/7, height/7];
        case (width > 600 && width <= 800):
            return [width/8, height/8];
        case (width > 800 && width <= 1000):
            return [width/9, height/9];
        case (width > 1000 && width <= 1200):
            return [width/11, height/11];
        case (width > 1200):
            return [width/13, height/13];
        default:
            return [width/13, height/13];
    }
}

/**
 * Wraps a string of text to a given width.
 * @param {*} text 
 * @param {*} width 
 */
export function wrap(text, width) {
    /** Wraps text of the nodes so that they don't clutter the screen. */
    text.each(function() {
      var text = d3.select(this),
          words = text.text().split(/[\s,-]+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.2, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
  });
}

export function nodeSeparation(a, b) {
    return a.parent == b.parent ? 1:2;
}

/**
 * Staggers the text labels so they are easier to read
 * @param {*} d 
 */
export function staggerText(d) {
    switch (d.depth === 0) {
        case true:
            return -50;
        case false:
            return 35;
    }
}

/**
 * Makes the size of the text proportional to the depth of the node being displayed (the reason being
 * that deeper nodes are more cluttered, hence smaller text makes them more readable)
 * @param {} d 
 */
export function dynamicTextSize(d) {
    const fontSize = 18 - d.depth;
    return fontSize.toString() + "px";
}

export default collapse;