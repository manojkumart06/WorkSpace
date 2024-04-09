const studentNames = [
    {name : 'ajay', rollNo : 21,marks : 80},
    {name : 'vijay', rollNo : 21,marks : 80},
    {name : 'sujay', rollNo : 21,marks : 80},
    {name : 'bejay', rollNo : 21,marks : 80},
];


//const captialName = studentNames.map(stu => stu.name.toUpperCase());

const captialName = [];

for(i=0;i<studentNames.length;i++){
    captialName.push(studentNames[i].name.toUpperCase());
}

console.log(captialName);