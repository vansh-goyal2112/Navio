export const mapData = {
  nodes: {
    // 🔴 START
    N0: { x: 420, y: 410, label: "Start" },

    // LEFT classrooms corridor
    N1: { x: 426, y: 388, label: "Left Hall 1" },
    N2: { x: 515, y: 388, label: "Left Hall 2" },
    N3: { x: 515, y: 307, label: "Left Hall 3"},
    N4: { x: 427, y: 307, label: "Left Hall 4"},
    CR1: { x: 508, y: 296, label: "MB 202" },

    // LEFT upper turn
    CR2: { x: 520, y: 435, label: "MB 207" },
    CR3: { x: 421, y: 295, label: "MB 208" }, 
    // N5: { x: 520, y: 300, label: "Upper Left Hall" },

    // // CENTER corridor (above red dot)
    // N6: { x: 640, y: 700, label: "Center Up" },
    // N7: { x: 640, y: 640, label: "Center Upper" },

    // // RIGHT corridor
    // N8: { x: 700, y: 760, label: "Right Hall 1" },
    // N9: { x: 760, y: 760, label: "Right Hall 2" },

    // // RIGHT upper
    // N10: { x: 760, y: 700, label: "Right Turn Up" },
    // N11: { x: 700, y: 700, label: "Right Upper Hall" },

    // // LOWER corridor (lecture halls)
    // N12: { x: 640, y: 820, label: "Down Hall 1" },
    // N13: { x: 700, y: 820, label: "Down Hall 2" },
    // N14: { x: 760, y: 820, label: "Down Hall 3" },

    // DESTINATIONS (rooms)
    // CR1: { x: 430, y: 700, label: "Classroom Left Wing" },
    // CR2: { x: 640, y: 600, label: "Central Classroom" },
    // CR3: { x: 800, y: 700, label: "Right Classroom" },
    // CR4: { x: 760, y: 880, label: "Lecture Hall" }
  },

  edges: [
    // FROM START
    ["N0", "N1"],
    ["N1","N4"],
    ["N1","N2"],
    ["N2","N3"],
    ["N3","N4"],
    ["N2","CR2"],
    ["N3","CR1"],
    ["N4","CR3"]
  ]
};