// const data = {
//   mark1: 70,
//   mark2: 80,
//   mark3: 60,
//   mark4: 90,
//   mark5: 50,
// };

// const obj = {
//   tag: "div",
//   children: [
//     {
//       tag: "p",
//       content: (mark1) => `Mark1 = ${mark1}`,
//       dataKey: "mark1",
//     },

//     {
//       tag: "p",
//       content: (mark2) => `Mark2 = ${mark2}`,
//       dataKey: "mark2",
//     },

//     {
//       tag: "p",
//       content: (mark3) => `Mark3 = ${mark3}`,
//       dataKey: "mark3",
//     },

//     {
//       tag: "p",
//       content: (mark4) => `Mark4 = ${mark4}`,
//       dataKey: "mark4",
//     },

//     {
//       tag: "p",
//       content: (mark5) => `Mark5 = ${mark5}`,
//       dataKey: "mark5",
//     },

//     {
//       tag: "p",
//       content: (marks) =>
//         `Total = ${marks.reduce((sum, mark) => sum + mark, 0)}`,
//       dataKeys: ["mark1", "mark2", "mark3", "mark4", "mark5"],
//     },

//     {
//       tag: "div",
//       children: [
//         {
//           tag: "select",
//           attributes: {
//             id: "mark",
//           },
//           children: [
//             {
//               tag: "option",
//               attributes: {
//                 value: "",
//                 selected: true,
//                 disabled: true,
//               },
//               content: "Choose mark",
//             },
//             {
//               tag: "option",
//               attributes: {
//                 value: "mark1",
//               },
//               content: "mark1",
//             },
//             {
//               tag: "option",
//               attributes: {
//                 value: "mark2",
//               },
//               content: "mark2",
//             },
//             {
//               tag: "option",
//               attributes: {
//                 value: "mark3",
//               },
//               content: "mark3",
//             },
//             {
//               tag: "option",
//               attributes: {
//                 value: "mark4",
//               },
//               content: "mark4",
//             },
//             {
//               tag: "option",
//               attributes: {
//                 value: "mark5",
//               },
//               content: "mark5",
//             },
//           ],
//           style: {
//             height: "40px",
//             cursor: "pointer",
//           },
//         },

//         {
//           tag: "input",
//           attributes: {
//             id: "mark-value",
//           },
//           style: {
//             height: "35px",
//             width: "60px",
//           },
//         },

//         {
//           tag: "button",
//           content: "Update",
//           attributes: {
//             id: "update",
//             onclick: "handleUpdate()",
//           },
//           style: {
//             height: "40px",
//             cursor: "pointer",
//           },
//         },
//       ],
//     },
//   ],
// };

// function createElement(tag) {
//   const element = document.createElement(tag);
//   // console.log(element);
//   return element;
// }

// function start(obj) {
//   const keys = Object.keys(obj);
//   //   console.log(keys);
//   let element;
//   for (const c of keys) {
//     if (c === "tag") {
//       element = createElement(obj.tag);
//     } else if (c === "children") {
//       for (const object of obj.children) {
//         element.appendChild(start(object));
//         // console.log(object);
//       }
//     } else if (c === "content") {
//       const textNode = document.createTextNode("");
//       const updateContent = (value) => {
//         textNode.nodeValue =
//           typeof obj.content === "function" ? obj.content(value) : obj.content;
//       };
//       if (keys.includes("dataKey")) {
//         updateContent(data[obj.dataKey]);
//       } else if (keys.includes("dataKeys")) {
//         const array = [];
//         obj.dataKeys.forEach((m) => array.push(data[m]));
//         updateContent(array);
//       } else {
//         updateContent();
//       }
//       element.appendChild(textNode);
//       obj._update = updateContent;
//     } else if (c === "style") {
//       for (const s of Object.keys(obj.style)) {
//         element.style[s] = obj.style[s];
//         // console.log(s);
//       }
//     } else if (c === "attributes") {
//       for (const s of Object.keys(obj.attributes)) {
//         element.setAttribute(s, obj.attributes[s]);
//         // console.log(s);
//       }
//     }
//   }
//   return element;
// }

// const final = start(obj);
// //   console.log(document.body);
// document.body.appendChild(final);

// function watchVariable(obj, propName, callback) {
//   let value = obj[propName];

//   Object.defineProperty(obj, propName, {
//     get() {
//       return value;
//     },
//     set(newValue) {
//       if (newValue !== value) {
//         const oldValue = value;
//         value = newValue;
//         callback(newValue, oldValue);
//       }
//     },
//   });
// }

// for (const prop in data) {
//   watchVariable(data, prop, (newValue, oldValue) => {
//     console.log(`${prop} changed from ${oldValue} to ${newValue}`);
//     obj.children.forEach((child) => {
//       if (child.dataKey === prop) {
//         child._update(data[prop]);
//       } else if (child.dataKeys && child.dataKeys.includes(prop)) {
//         const array = [];
//         child.dataKeys.forEach((m) => array.push(data[m]));
//         child._update(array);
//       }
//     });
//   });
// }

// const handleUpdate = () => {
//   const mark = document.getElementById("mark").value;
//   const markValue = document.getElementById("mark-value").value;
//   data[mark] = Number(markValue);
//   return true;
// };

const data = {
  mark1: 70,
  mark2: 80,
  mark3: 60,
  mark4: 90,
  mark5: 50,
};

const obj = {
  tag: "div",
  children: [
    {
      tag: "p",
      content: (mark1) => `Mark1 = ${mark1}`,
      dataKey: "mark1",
    },

    {
      tag: "p",
      content: (mark2) => `Mark2 = ${mark2}`,
      dataKey: "mark2",
    },

    {
      tag: "p",
      content: (mark3) => `Mark3 = ${mark3}`,
      dataKey: "mark3",
    },

    {
      tag: "p",
      content: (mark4) => `Mark4 = ${mark4}`,
      dataKey: "mark4",
    },

    {
      tag: "p",
      content: (mark5) => `Mark5 = ${mark5}`,
      dataKey: "mark5",
    },

    {
      tag: "p",
      content: (marks) => `Total = ${marks.reduce((sum, mark) => sum + mark, 0)}`,
      dataKeys: ["mark1", "mark2", "mark3", "mark4", "mark5"],
    },

    {
      tag: "div",
      children: [
        {
          tag: "select",
          attributes: {
            id: "mark",
          },
          children: [
            {
              tag: "option",
              attributes: {
                value: "",
                selected: true,
                disabled: true,
              },
              content: "Choose mark",
            },
            {
              tag: "option",
              attributes: {
                value: "mark1",
              },
              content: "mark1",
            },
            {
              tag: "option",
              attributes: {
                value: "mark2",
              },
              content: "mark2",
            },
            {
              tag: "option",
              attributes: {
                value: "mark3",
              },
              content: "mark3",
            },
            {
              tag: "option",
              attributes: {
                value: "mark4",
              },
              content: "mark4",
            },
            {
              tag: "option",
              attributes: {
                value: "mark5",
              },
              content: "mark5",
            },
          ],
          style: {
            height: "40px",
            cursor: "pointer",
          },
        },

        {
          tag: "input",
          attributes: {
            id: "mark-value",
          },
          style: {
            height: "35px",
            width: "60px",
          },
        },

        {
          tag: "button",
          content: "Update",
          attributes: {
            id: "update",
            onclick: "handleUpdate()",
          },
          style: {
            height: "40px",
            cursor: "pointer",
          },
        },
      ],
    },
  ],
};

function createElement(tag) {
  return document.createElement(tag);
}

function start(obj, callbackMap) {
  const element = createElement(obj.tag);

  if (obj.children) {
    for (const child of obj.children) {
      element.appendChild(start(child, callbackMap));
    }
  }

  if (obj.content) {
    const textNode = document.createTextNode("");
    const updateContent = (value) => {
      textNode.nodeValue =
        typeof obj.content === "function" ? obj.content(value) : obj.content;
    };

    if (obj.dataKey) {
      updateContent(data[obj.dataKey]);
      if (!callbackMap[obj.dataKey]) callbackMap[obj.dataKey] = [];
      callbackMap[obj.dataKey].push([updateContent, obj.dataKey]);
    }

    else if (obj.dataKeys) {
      const values = obj.dataKeys.map((key) => data[key]);
      updateContent(values);
      obj.dataKeys.forEach((key) => {
        if (!callbackMap[key]) callbackMap[key] = [];
        callbackMap[key].push([updateContent, obj.dataKeys]);
      });
    }

    else updateContent();

    element.appendChild(textNode);
  }

  if (obj.style) {
    for (const [key, value] of Object.entries(obj.style)) {
      element.style[key] = value;
    }
  }

  if (obj.attributes) {
    for (const [key, value] of Object.entries(obj.attributes)) {
      element.setAttribute(key, value);
    }
  }

  return element;
}

const callbackMap = {};
const final = start(obj, callbackMap);
document.body.appendChild(final);

function watchVariable(obj, propName, callback) {
  let value = obj[propName];
  Object.defineProperty(obj, propName, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        const oldValue = value;
        value = newValue;
        callback(newValue, oldValue);
      }
    },
  });
}

for (const prop in data) {
  watchVariable(data, prop, () => {
    if (callbackMap[prop]) {
      callbackMap[prop].forEach(([callback, value]) => {
        if(typeof(value) === 'string') callback(data[value]);
        else if(value instanceof Array) {
          const values = value.map((key) => data[key]);
           callback(values);
          }
      });
    }
  });
}

const handleUpdate = () => {
  const mark = document.getElementById("mark").value;
  const markValue = document.getElementById("mark-value").value;
  data[mark] = Number(markValue);
};
