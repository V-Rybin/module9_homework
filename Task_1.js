const parser = new DOMParser();

const xmlString = `
  <person category="grown man">
    <name lang="en">Ivan</name>
    <second>Ivanov</second>
    <age>35</age>
    <prof>teacher</prof>
   </person>
  <person category="grown man">
    <name lang="ru">Петр</name>
    <second>Петров</second>
    <age>58</age>
    <prof>driver</prof>
  </person>

  `;


const xmlDOM = parser.parseFromString(xmlString, "text/xml");


const personNode = xmlDOM.querySelector("person");
const nameNode = personNode.querySelector("name");
const secondNode = personNode.querySelector("second");
const ageNode = personNode.querySelector("age");
const profNode = personNode.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');

const list = {

  name: nameNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr,
  
};
console.log('list', list);
