import data from './data.js'

export default function loadModule(obj, callBackMap) {
    const element = document.createElement(obj.tag);
  
    if (obj.children) {
      for (const child of obj.children) {
        element.appendChild(loadModule(child, callBackMap));
      }
    }
  
    if (obj.content) {
      const textNode = document.createTextNode("");
      const updateContent = (value) => {
        textNode.nodeValue =
          typeof obj.content === "function" ? obj.content(value) : obj.content;
      };
      updateContent(data)
      if(obj.dataKey || obj.dataKeys){
        callBackMap.push({
          id: obj.uniqueId,
          callback: updateContent,
          subscribed: true,
        });
      }
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