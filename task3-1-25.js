const obj = {
  tag: "form",
  attribute: {
    autoComplete: "off",
  },
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
                minlength: "10",
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

userName.addEventListener("keydown", (ele) => {
  const pos = userName.selectionStart;
  let name = userName.value;
  // console.log(name);
  if (
    !(
      (ele.key >= "a" && ele.key <= "z") ||
      (ele.key >= "A" && ele.key <= "Z") ||
      ele.key === " "
    )
  ) {
    ele.preventDefault();
  } else if (ele.key === " ") {
    if (name === "" || name.at(pos - 1) === " " || name.at(pos) === " ")
      ele.preventDefault();
    else {
      if (typeof name.at(pos) === "string")
        userName.value = `${name.slice(0, pos)}${name
          .at(pos)
          .toUpperCase()}${name.slice(pos + 1)}`;
      userName.setSelectionRange(pos, pos);
    }
  }
  if (ele.key >= "a" && ele.key <= "z") {
    if (name === "" || name.at(pos - 1) === " ") {
      let end = name.slice(pos);
      if (end.at(0) >= "A" && end.at(0) <= "Z")
        end = end.at(0).toLowerCase() + end.slice(1);
      userName.value = `${name.slice(0, pos)}${ele.key.toUpperCase()}${end}`;
      ele.preventDefault();
    }
  }
  // console.log(ele);
});

userName.addEventListener("keyup", (ele) => {
  const pos = userName.selectionStart;
  if (ele.key === "Backspace") {
    let start = userName.value.slice(0, pos);
    let end = userName.value.slice(pos);
    if (start.at(-1) === " ") {
      end = end.at(0).toUpperCase() + end.slice(1);
    } else if (end.at(0) >= "A" && end.at(0) <= "Z") {
      end = end.at(0).toLowerCase() + end.slice(1);
    }
    userName.value = `${start}${end}`;
    userName.setSelectionRange(pos, pos);
  }
});

userName.addEventListener("paste", (e) => {
  e.preventDefault();
});

const phone = document.getElementById("phone");

phone.addEventListener("paste", (e) => {
  e.preventDefault();
});

phone.addEventListener("keydown", (e) => {
  if (!((e.key >= "0" && e.key <= "9") || e.key === "Backspace")) {
    e.preventDefault();
  }
  if (!(e.key === "Backspace") && phone.value.length >= 10) {
    e.preventDefault();
  }
  if (e.key >= "0" && e.key <= "5" && phone.value === "") {
    e.preventDefault();
  }
});

const mail = document.getElementById("mail");

mail.addEventListener("paste", (e) => {
  e.preventDefault();
});

function isAlphanum(s) {
  return (
    (s >= "a" && s <= "z") || (s >= "A" && s <= "Z") || (s >= "0" && s <= "9")
  );
}

let flag = false;
const specialCharacters = [
  "!",
  "#",
  "~",
  "$",
  "%",
  "&",
  `'`,
  ".",
  "/",
  "=",
  "^",
  "-",
  "_",
  "@",
];
mail.addEventListener("keydown", (e) => {
  if (!isAlphanum(e.key) && !specialCharacters.includes(e.key))
    e.preventDefault();
  if (e.key === "@" && mail.value !== "") {
    if (!flag) {
      flag = true;
    } else e.preventDefault();
    // console.log(flag);
  }
  if (e.key === "Backspace") {
    if (mail.value.at(-1) === "@") {
      flag = false;
    }
  } else if (!isAlphanum(e.key) && !isAlphanum(mail.value.at(-1))) {
    e.preventDefault();
  }
});

const submit = document.getElementById("submit");
submit.addEventListener("mouseover", () => {
  submit.style.backgroundColor = "green";
  submit.style.color = "white";
});
submit.addEventListener("mouseleave", () => {
  submit.style.backgroundColor = "#a4ffbe";
  submit.style.color = "black";
});
const reset = document.getElementById("reset");
reset.addEventListener("mouseenter", () => {
  reset.style.backgroundColor = "rgb(211, 0, 0)";
  reset.style.color = "white";
});
reset.addEventListener("mouseout", () => {
  reset.style.backgroundColor = "rgb(253, 165, 165)";
  reset.style.color = "black";
});
