//getElementById-select a single element
// const elementById=document.getElementById("myDiv")
// console.log(elementById.innerHTML)

//getElementByClassName-select mutiple elements that share the same class node
// const elements=document.getElementsByClassName("myClass");
// for(let i=0; i<elements.length; i++)
// {
//     console.log(elements[i].textContent)
// }

const elementsTag=document.getElementsByTagName("div");
for(let i=0; i<elementsTag.length; i++)
{
    console.log(elementsTag[i].textContent)
}