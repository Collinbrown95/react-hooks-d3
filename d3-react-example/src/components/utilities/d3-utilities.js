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
            return [width/9, height/9];
        case (width > 800 && width <= 1000):
            return [width/11, height/11];
        case (width > 1000 && width <= 1200):
            return [width/13, height/13];
        case (width > 1200):
            return [width/15, height/15];
        default:
            return [width/15, height/15];
    }
}

/**
 * Generates a font based on the window dimensions given by resizeObserver
 * @param {number} width 
 */
export function generateTextSize(width) {

}

export function nodeSeparation(a, b) {
    return a.parent == b.parent ? 1:2;
}

/**
 * Staggers the text labels so they are easier to read
 * @param {*} d 
 */
export function staggerText(d) {
    switch (d.id % 2) {
        case 0:
            return 25;
        case 1:
            return -25;
    }
}


export default collapse;