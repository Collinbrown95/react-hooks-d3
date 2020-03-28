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

export function spaceNodesEvenly(d) {
    console.log(d)
    // Ignoring the special case where the parent is the root
    if (d.parent && d.id) {
      // Get the number of siblings that need to be presented
      const numberSiblings = d.parent.children.length;
      // If there is a single sibling, return because we do not need to manipulate its position
      if (numberSiblings == 1) {
          return;
      }
      // Get the IDs of the min/max child nodes
      const minSiblingID = d.parent.children[0].id;
      const maxSiblingID = d.parent.children.slice(-1)[0].id;
      // We know IDs are in sequential order, so mean and median will be equal
      const middleSiblingID = Math.floor((minSiblingID + maxSiblingID) / 2);
      // If id is less/equal to the median, stretch the element to the left
      if (d.id <= middleSiblingID) {
        const idShift = middleSiblingID - d.id;  // How far away the current node is from the median
        d.x = d.x - 5*idShift*(1 + numberSiblings/20)*d.height*d.depth;
      }
      // If id is greater than median, stretch the element to the right
      else {
        const idShift = d.id - middleSiblingID;
        d.x = d.x + 5*idShift*(1 + numberSiblings/20)*d.height*d.depth;
      }

    }
}

/**
 * Staggers the text labels so they are easier to read
 * @param {*} d 
 */
export function staggerText(d) {
    switch (d.id % 4) {
        case 0:
            return 30;
        case 1:
            return -15;
        case 2:
            return 15;
        case 3:
            return -30;
    }
}


export default collapse;