const comp2 = {
  tag: "div",
  attributes: {
    id: "container",
  },
  children: [
    {
      tag: "div",
      children: [
        {
          tag: "p",
          content: (object) =>
            `Total = ${object.marks().reduce((sum, mark) => sum + mark, 0)}`,
          dataKeys: ["mark1", "mark2", "mark3", "mark4", "mark5"],
          uniqueId: "6",
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
            "unique-id": "6",
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
          uniqueId: "7",
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
            "unique-id": "7",
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

export default comp2;
