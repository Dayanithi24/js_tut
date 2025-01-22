const comp1 = {
  tag: "div",
  attributes: {
    id: "mark-container",
  },
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
  ],
};

export default comp1;
