const data = {
    mark1: 70,
    mark2: 80,
    mark3: 60,
    mark4: 90,
    mark5: 50
}

const obj ={
    tag: "div",
    children: [
        {
            tag: "p",
            content: () => `Mark1 = ${data.mark1}`,
            dataKey: "mark1"
        },
        
        {
            tag: "p",
            content: () => `Mark2 = ${data.mark2}`,
            dataKey: "mark2"
        },
        
        {
            tag: "p",
            content: () => `Mark3 = ${data.mark3}`,
            dataKey: "mark3"
        },
        
        {
            tag: "p",
            content: () => `Mark4 = ${data.mark4}`,
            dataKey: "mark4"
        },
        
        {
            tag: "p",
            content: () => `Mark5 = ${data.mark5}`,
            dataKey: "mark5"
        },
        
        {
            tag: "p",
            content: () => `Total = ${data.mark1 + data.mark2 + data.mark3 + data.mark4 + data.mark5}`,
            dataKeys: ["mark1", "mark2", "mark3", "mark4", "mark5"]
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
                        id: "mark-value"
                    },
                    style: {
                        height: "35px",
                        width: "60px"
                      },
                },

                {
                    tag: "button",
                    content: "Update",
                    attributes: {
                        id: "update",
                        onclick: "handleUpdate()"
                    },
                    style: {
                        height: "40px",
                        cursor: "pointer",
                      },
                }
            ]
        }
    ],

}

function createElement(tag) {
    const element = document.createElement(tag);
    // console.log(element);
    return element;
  }
  
  function start(obj, updateMap) {
    const keys = Object.keys(obj);
    //   console.log(keys);
    let element;
    for (const c of keys) {
      if (c === "tag") {
        element = createElement(obj.tag);
      } else if (c === "children") {
        for (const object of obj.children) {
          element.appendChild(start(object, updateMap));
          // console.log(object);
        }
      } else if (c === "content") {const textNode = document.createTextNode("");
        const updateContent = () => {
          textNode.nodeValue = typeof obj.content === "function" ? obj.content() : obj.content;
        };
        updateContent();
        element.appendChild(textNode);
        if (obj.dataKey) {
            if (!updateMap[obj.dataKey]) updateMap[obj.dataKey] = [];
            updateMap[obj.dataKey].push(updateContent);
          }
      
          if (obj.dataKeys) {
            for (const key of obj.dataKeys) {
              if (!updateMap[key]) updateMap[key] = [];
              updateMap[key].push(updateContent);
            }
          }
      } else if (c === "style") {
        for (const s of Object.keys(obj.style)) {
          element.style[s] = obj.style[s];
          // console.log(s);
        }
      } else if (c === "attributes") {
        for (const s of Object.keys(obj.attributes)) {
          element.setAttribute(s, obj.attributes[s]);
          // console.log(s);
        }
      }
    }
    return element;
  }
  
  const updateMap = {};
  const final = start(obj, updateMap);
//   console.log(document.body);
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

for(const prop in data) {
    watchVariable(data, prop, (newValue, oldValue) => {
        console.log(`${prop} changed from ${oldValue} to ${newValue}`);
        obj.children.forEach((child) => {
            if (updateMap[prop]) {
                updateMap[prop].forEach((updateFn) => updateFn());
            }
        });
      });
}

const handleUpdate = () => {
    const mark = document.getElementById("mark").value;
    const markValue = document.getElementById("mark-value").value;
    data[mark] = Number(markValue);
    return true;
}
console.log(updateMap);