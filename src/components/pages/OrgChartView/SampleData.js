import { hierarchy } from "d3";

import collapse from "../../utilities/d3-utilities.js";

var initialData = {
    "name": "😐",
    "children": [
      {
        "name": "🙂",
        "children": [
          {
            "name": "😀",
            "children": [
                {
                    "name": "level 3",
                    "children": [
                        {
                            "name": "level 4",
                            "children": [
                                {
                                    "name": "level 5",
                                    "children": [
                                        {
                                            "name": "level 6"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
          },
          {
            "name": "😁"
          },
          {
            "name": "🤣",
            "children": [
                {
                    "name": "level 3",
                    "children": [
                        {
                            "name": "level 4"
                        }
                    ]
                }
            ]
          }
        ]
      },
      {
        "name": "😔",
        "children": [
            {
                "name": "level 3",
                "children": [
                    {
                        "name": "level 4"
                    }
                ]
            }
        ]
      }
    ]
  };

initialData = hierarchy(initialData)

initialData.children.forEach(collapse)

export default initialData;