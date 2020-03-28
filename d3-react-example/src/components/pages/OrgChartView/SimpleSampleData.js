import { hierarchy } from "d3";

import collapse from "../../utilities/d3-utilities.js";

var treeData = {
    "name": "Top Level",
    "parent": "null",
    "children": [
    {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
        {
            "name": "Son of A",
            "parent": "Level 2: A"
        },
        {
            "name": "Daughter of A",
            "parent": "Level 2: A"
        }
        ]
    },
    {
        "name": "Level 2: B",
        "parent": "Top Level"
    }
    ]
};

// d3 interacts with a Node prototype of the original data instead of interacting with the
// original data directly.
treeData = hierarchy(treeData);

// Collapse all child nodes of the tree
treeData.children.forEach(collapse);

export default treeData;