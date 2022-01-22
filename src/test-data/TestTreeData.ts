import { NodeDict } from "@/datatypes/NodeData"
import TreeDefinition from "@/datatypes/TreeDefinition"

// simulate the response from an API
// TODO implement the API
const testData: NodeDict = {
  0: {
    focus: {
      id: 0,
      name: "The Path of Marxism-Leninism",
      daysToComplete: 35,
      mutuallyExclusiveIds: [100],
      preReqIds: []
    },
    directChildIds: [1, 2]
  },
  1: {
    focus: {
      id: 1,
      name: "The Centre",
      daysToComplete: 35,
      mutuallyExclusiveIds: [2],
      preReqIds: [0]
  },
    directChildIds: [5]
  },
  2: {
    focus:{
      id: 2,
      name: "The Left Opposition",
      daysToComplete: 35,
      mutuallyExclusiveIds: [1],
      preReqIds: [0]
    },
    directChildIds: [3]
  },
  3: {
    focus:{
      id: 3,
      name: "A test focus",
      daysToComplete: 35,
      mutuallyExclusiveIds: [],
      preReqIds: [2]
    },
    directChildIds: [4]
  },
  4: {
    focus:{
      id: 4,
      name: "Another test focus",
      daysToComplete: 35,
      mutuallyExclusiveIds: [],
      preReqIds: [3]
    },
    directChildIds: []
  },
  5: {
    focus:{
      id: 5,
      name: "Another test focus",
      daysToComplete: 35,
      mutuallyExclusiveIds: [],
      preReqIds: [1]
    },
    directChildIds: [6]
  },
  6: {
    focus:{
      id: 6,
      name: "Another test focus",
      daysToComplete: 35,
      mutuallyExclusiveIds: [],
      preReqIds: [5]
    },
    directChildIds: [7, 8]
  },
  7: {
    focus:{
      id: 7,
      name: "Child of 6",
      daysToComplete: 35,
      mutuallyExclusiveIds: [],
      preReqIds: [6]
    },
    directChildIds: []
  },
  8: {
    focus:{
      id: 8,
      name: "Child of 6",
      daysToComplete: 35,
      mutuallyExclusiveIds: [],
      preReqIds: [6]
    },
    directChildIds: []
  },
  100: {
    focus:{
      id: 100,
      name: "Beaten, But Not Defeated",
      daysToComplete: 35,
      mutuallyExclusiveIds: [0],
      preReqIds: [5]
    },
    directChildIds: []
  }
}

const testTreeDef: TreeDefinition = {
  rootNodeIds: [0, 100],
  nodes: testData
}

export default testTreeDef;