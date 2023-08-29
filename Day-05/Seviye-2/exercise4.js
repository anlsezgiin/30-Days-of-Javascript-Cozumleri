let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"];
if(countries.includes("Ethiopia")==true)
{
    console.log("ETHIOPIA");
}
else
{
    countries.push("Ethiopia");
}

///////////////////////////////////////////////////////////

let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
 if(webTechs.includes("Sass"))
 {
    console.log("Sass is a CSS preprocess");
 }
 else
 {
    webTechs.push("Sass");
    console.log(webTechs);
 }

 //////////////////////////////////////////////////////////

 
const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const  backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
