const objwct = {
 "Vlad": "Vlad",
    "stie": "knows",
    "engleza": "English"
}
prop = "Vlad stie engleza"
const cuv=prop.split(" ")
let rezultat ="";

for(i=0;i<3;i++)
{
rezultat += " " +  objwct[cuv[i]]
}
console.log(rezultat)