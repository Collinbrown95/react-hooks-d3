# react-hooks-d3
> Simple examples that illustrate the integration of d3.js into React with React hooks

## High Level Overview
Note: this is just one candidate setup to integrate React with d3.

- The functional component ```OrgChartView``` holds state hooks for the original hierarchical data and the d3 ```Node``` prototype of the same data that gets copied when calling ```d3.hierarchy(data)```. The reason for this is to preserve the original data, but also keep a copy of the prototype so that the state of the tree chart can be preserved when the visualization re-renders from resizing the screen.
- 

## D3 and React - general information
- General update pattern of d3 is to select elements, map and synchronize those elements to data, and define handlers for what should happen to the svgs when data are entered, updated, or exited.

## ResizeObserver

## D3 tree utilities
```
data = {
    "name": "Level 1",
    "children": [
        {
            "name": "Level 2 A",
            "children": [
                ...
            ]
        },
        {
            "name": "Level 2 B",
            "children": [
                ...
            ]
        },
        ...
    ]
}
```

- Given hierarchical data formatted as above, ```const root = hierarchy(data);``` maps the JSON to a tree data structure with many properties of the tree (e.g. descendents, height, depth, links between nodes, etc.)
- after calling ```hierarchy(data)```, we get ```root.descendents()``` which is a flat array containing all nodes of the tree, including the root. This is what D3 uses to draw the nodes of the tree.

- When we call ```root.links()```, it creates an array of all the links (edges) between nodes in the tree.

- ```const treeLayout = tree().size([height, width]); treeLayout(root)``` Given a height and width (see notes on resize observer above), enriches the nodes of roots with x and y coordinates that are calculated based on the width and height of ```treeLayout```.

- When nodes enter, they are given the class ```node```.

- ```d``` attribute for links is handled by the ```linkGenerator``` to draw the links between nodes
__Sources__

1. This [YouTube playlist](https://www.youtube.com/watch?v=Y-ThTzB-Zjk&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B&index=20)
2. [D3 zoom - the missing manual](https://www.freecodecamp.org/news/get-ready-to-zoom-and-pan-like-a-pro-after-reading-this-in-depth-tutorial-5d963b0a153e/)
3. https://www.d3indepth.com/enterexit/