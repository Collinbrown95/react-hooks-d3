import { hierarchy } from "d3";

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

export default treeData;