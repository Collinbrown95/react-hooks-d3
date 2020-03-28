# react-hooks-d3
> Simple examples that illustrate the integration of d3.js into React with React hooks

## TODO:
1. The ```hierarchy(data)``` method does not recognize the ```_children``` (i.e. hidden children) property by default. Need to find a way to parse the entire hierarchical data structure, and then apply the hidden label to those below the first level.

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
4. https://coderwall.com/p/psogia/simplest-way-to-add-zoom-pan-on-d3-js
5. https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102
6. [React effect hooks documentation](https://reactjs.org/docs/hooks-effect.html) and [post on multiple effect hooks](https://stackoverflow.com/questions/54002792/should-i-use-one-or-many-useeffect-in-component) https://reactjs.org/docs/hooks-rules.html
7. https://stackoverflow.com/questions/47392549/how-to-update-data-in-d3-version-4 <-- change in update pattern from v3 to v4
8. https://bost.ocks.org/mike/transition/ transitions documentation, https://bost.ocks.org/mike/selection/ selection documentation
9. https://www.tutorialspoint.com/d3js/d3js_svg_transformation.htm d3 tutorial on svg transformations
10. https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render/53254028#53254028 toggling useEffect hook on initial render vs. subsequent renders, https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render also related
11. https://www.d3indepth.com/enterexit/ enter update exit pattern in d3
12. 