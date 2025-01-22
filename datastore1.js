const data = {
  mark1: 70,
  mark2: 80,
  mark3: 60,
  mark4: 90,
  mark5: 50,
  marks: () => {
    return [data.mark1, data.mark2, data.mark3, data.mark4, data.mark5];
  },
  total: () => {
    return data.mark1 + data.mark2 + data.mark3 + data.mark4 + data.mark5;
  }
};

const obj = {
  tag: "div",
  children: [
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) => `Mark1 = ${object.mark1}`,
          dataKey: "mark1",
          uniqueId: '1',
          style: {
            display: "inline",
            marginRight: "20px",
          },
        },
        {
            tag: "input",
            attributes: {
              type: "checkbox",
              name: "subscribe",
              checked: true,
              value: true,
              'unique-id': '1',
            },
          },
      ],
    },
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) => `Mark2 = ${object.mark2}`,
          dataKey: "mark2",
          uniqueId: '2',
          style: {
            display: "inline",
            marginRight: "20px",
          },
        },
        {
            tag: "input",
            attributes: {
              type: "checkbox",
              checked: true,
              name: "subscribe",
              value: true,
              'unique-id': '2',
            },
          },
      ],
    },
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) => `Mark3 = ${object.mark3}`,
          dataKey: "mark3",
          uniqueId: '3',
          style: {
            display: "inline",
            marginRight: "20px",
          },
        },
        {
            tag: "input",
            attributes: {
              type: "checkbox",
              checked: true,
              name: "subscribe",
              value: true,
              'unique-id': '3',
            },
          },
      ],
    },
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) => `Mark4 = ${object.mark4}`,
          dataKey: "mark4",
          uniqueId: '4',
          style: {
            display: "inline",
            marginRight: "20px",
          },
        },
        {
          tag: "input",
          attributes: {
            type: "checkbox",
            checked: true,
            name: "subscribe",
            value: true,
            'unique-id': '4',
          },
        },
        
      ],
    },
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) => `Mark5 = ${object.mark5}`,
          dataKey: "mark5",
          uniqueId: '5',
          style: {
            display: "inline",
            marginRight: "20px",
          },
        },
        {
            tag: "input",
            attributes: {
              type: "checkbox",
              checked: true,
              name: "subscribe",
              value: true,
              'unique-id': '5',
            },
          },
      ],
    },
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) =>
            `Total = ${object.marks().reduce((sum, mark) => sum + mark, 0)}`,
          dataKeys: ["mark1", "mark2", "mark3", "mark4", "mark5"],
          uniqueId: '6',
          style: {
            display: "inline",
            marginRight: "20px",
          },
        },
        {
            tag: "input",
            attributes: {
              type: "checkbox",
              checked: true,
              name: "subscribe",
              value: true,
              'unique-id': '6',
            },
          },
      ],
    },
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) => `Avg = ${object.total() / 5}`,
          dataKey: "total",
          uniqueId: '7',
          style: {
            display: "inline",
            marginRight: "20px",
          },
        },
        {
            tag: "input",
            attributes: {
              type: "checkbox",
              checked: true,
              name: "subscribe",
              value: true,
              'unique-id': '7',
            },
          },
      ],
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
    

    if (obj.dataKey || obj.dataKeys) {
      updateContent(data);
      callbackMap.push({
        id: obj.uniqueId,
        callback: updateContent,
        subscribed: true,
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


const callbackMap = [];
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
        value = newValue;
        callback();
    }
},
});
}

for (const prop of ["mark1", "mark2", "mark3", "mark4", "mark5"]) {
    watchVariable(data, prop, () => {
        callbackMap.forEach(({ subscribed, callback}) => {
            if (subscribed) {
                callback(data);
            }
        });
    });
}

const handleUpdate = () => {
    const mark = document.getElementById("mark").value;
    const markValue = document.getElementById("mark-value").value;
    data[mark] = Number(markValue);
};

console.log(callbackMap);

const subscribedCheckboxes = document.getElementsByName("subscribe");
for (const checkbox of subscribedCheckboxes) {
  checkbox.addEventListener("click", () => {
    const key = checkbox.getAttribute("unique-id");
    const callbackItem = callbackMap.find((item) => item.id === key);
    if (callbackItem) {
      callbackItem.subscribed = checkbox.checked;
      if(checkbox.checked)
        callbackItem.callback(data);
    }
  });
}