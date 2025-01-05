const obj = {
  tag: "form",
  children: [
    {
      tag: "fieldset",
      children: [
        {
          tag: "div",
          children: [
            {
              tag: "label",
              content: "Username",
              attribute: {
                for: "user-name",
              },
            },
            {
              tag: "input",
              attribute: {
                type: "text",
                placeHolder: "Harry Potter",
                id: "user-name",
                name: "user-name",
                required: true,
              },
              style: {
                width: "inherit",
                height: "40px",
                marginTop: "10px",
              },
            },
          ],
          style: {
            width: "98.5%",
          },
        },
        {
          tag: "div",
          children: [
            {
              tag: "label",
              content: "Phone Number",
              attribute: {
                for: "phone",
              },
            },
            {
              tag: "input",
              attribute: {
                type: "tel",
                placeHolder: "9876543210",
                id: "phone",
                name: "phone",
                required: true,
              },
              style: {
                width: "inherit",
                height: "40px",
                marginTop: "10px",
              },
            },
          ],
          style: {
            width: "98.5%",
          },
        },
        {
          tag: "div",
          children: [
            {
              tag: "label",
              content: "Email",
              attribute: {
                for: "mail",
              },
            },
            {
              tag: "input",
              attribute: {
                type: "email",
                placeHolder: "xyz@gmail.com",
                id: "mail",
                name: "mail",
              },
              style: {
                width: "inherit",
                height: "40px",
                marginTop: "10px",
              },
            },
          ],
          style: {
            width: "98.5%",
          },
        },
        {
          tag: "div",
          children: [
            {
              tag: "label",
              content: "Address",
              attribute: {
                for: "address",
              },
            },
            {
              tag: "input",
              attribute: {
                placeHolder: "Door No, Street Name, City, District - pincode",
                id: "address",
                name: "address",
              },
              style: {
                width: "inherit",
                height: "40px",
                marginTop: "10px",
              },
            },
          ],
          style: {
            width: "98.5%",
          },
        },
        {
          tag: "div",
          children: [
            {
              tag: "label",
              content: "Gender",
              attribute: {
                for: "gender",
              },
              style: {
                display: "block",
                marginBottom: "10px",
              },
            },
            {
              tag: "input",
              attribute: {
                type: "radio",
                name: "gender",
                value: "male",
              },
              style: {
                width: "20px",
                height: "20px",
                margin: "0 10px",
                verticalAlign: "middle",
                cursor: "pointer",
              },
            },
            {
              tag: "label",
              content: "Male",
              attribute: {
                for: "male",
              },
              style: {
                verticalAlign: "middle",
              },
            },
            {
              tag: "input",
              attribute: {
                type: "radio",
                name: "gender",
                value: "female",
              },
              style: {
                width: "20px",
                height: "20px",
                margin: "0 10px",
                verticalAlign: "middle",
                cursor: "pointer",
              },
            },
            {
              tag: "label",
              content: "Female",
              attribute: {
                for: "female",
              },
              style: {
                verticalAlign: "middle",
              },
            },
          ],
          style: {
            width: "98.5%",
          },
        },
        {
          tag: "div",
          children: [
            {
              tag: "label",
              content: "Expert At",
              attribute: {
                for: "language",
              },
            },
            {
              tag: "select",
              attribute: {
                id: "language",
              },
              children: [
                {
                  tag: "option",
                  attribute: {
                    value: "",
                    selected: true,
                    disabled: true,
                  },
                  content: "Choose the Programming Language",
                },
                {
                  tag: "option",
                  attribute: {
                    value: "C",
                  },
                  content: "C",
                },
                {
                  tag: "option",
                  attribute: {
                    value: "Java",
                  },
                  content: "Java",
                },
                {
                  tag: "option",
                  attribute: {
                    value: "Python",
                  },
                  content: "Python",
                },
                {
                  tag: "option",
                  attribute: {
                    value: "Go",
                  },
                  content: "Go",
                },
              ],
              style: {
                width: "inherit",
                height: "40px",
                marginTop: "10px",
                cursor: "pointer",
              },
            },
          ],
          style: {
            width: "98.5%",
          },
        },
        {
          tag: "div",
          children: [
            {
              tag: "input",
              attribute: {
                type: "submit",
                id: "submit",
                name: "submit",
                value: "Submit",
              },
              style: {
                width: "30%",
                height: "40px",
                marginTop: "10px",
                backgroundColor: "#a4ffbe",
                border: "none",
                color: "green",
                borderRadius: "6px",
                fontSize: "large",
                cursor: "pointer",
              },
            },
            {
              tag: "input",
              attribute: {
                type: "reset",
                id: "reset",
                name: "reset",
                value: "Clear",
              },
              style: {
                width: "30%",
                height: "40px",
                margin: "10px 0 0 30px",
                backgroundColor: "rgb(253, 165, 165)",
                border: "none",
                color: "#c90000",
                borderRadius: "6px",
                fontSize: "large",
                cursor: "pointer",
              },
            },
          ],
          style: {
            width: "98.5%",
          },
        },
      ],
      style: {
        margin: "0",
        padding: "20px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        boxSizing: "border-box",
      },
    },
  ],
  style: {
    width: "70%",
    justifySelf: "center",
  },
};

function createElement(tag) {
  const element = document.createElement(tag);
  // console.log(element);
  return element;
}

function start(obj) {
  const keys = Object.keys(obj);
  //   console.log(keys);
  let element;
  for (const c of keys) {
    if (c === "tag") {
      element = createElement(obj.tag);
    } else if (c === "children") {
      for (const object of obj.children) {
        element.appendChild(start(object));
        // console.log(object);
      }
    } else if (c === "content") {
      element.appendChild(document.createTextNode(obj.content));
    } else if (c === "style") {
      for (const s of Object.keys(obj.style)) {
        element.style[s] = obj.style[s];
        // console.log(s);
      }
    } else if (c === "attribute") {
      for (const s of Object.keys(obj.attribute)) {
        element.setAttribute(s, obj.attribute[s]);
        // console.log(s);
      }
    }
  }
  return element;
}

const final = start(obj);
console.log(document.body);
document.body.appendChild(final);

const userName = document.getElementById("user-name");
