const header = {
  tag: "div",
  children: [
    {
      tag: "div",
      children: [
        {
          tag: "a",
          content: "Show marks",
          attributes: {
            href: "marks",
            id: "marks",
          },
          style: {
            display: "inline-block",
            backgroundColor: "#333",
            height: "inherit",
            width: "100px",
            textDecoration: "none",
            textAlign: "center",
            alignContent: "center",
            color: "white",
            marginRight: "40px",
          },
        },
        {
          tag: "a",
          content: "Show total",
          attributes: {
            href: "total",
            id: "total",
          },
          style: {
            display: "inline-block",
            backgroundColor: "#333",
            height: "inherit",
            width: "100px",
            textDecoration: "none",
            textAlign: "center",
            alignContent: "center",
            color: "white",
          },
        },
      ],
      style: {
        backgroundColor: "black",
        height: "50px",
      },
    },
    {
      tag: "div",
      attributes: {
        id: "container1",
      },
    },
    {
      tag: "div",
      attributes: {
        id: "container2",
      },
    },
  ],
};

export default header;
