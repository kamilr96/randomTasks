/*


John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

Unfortunately everything is mixed, things are not always in the same order, lines are cluttered with non-alpha-numeric characters.

Examples of John's phone book lines:

"/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

" 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

"<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

Could you help John with a program that, given the lines of his phone book and a phone number returns a string for this number : "Phone => num, Name => name, Address => adress"

Examples:

s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
It can happen that, for a few phone numbers, there are many people for a phone number -say nb- , then

return : "Error => Too many people: nb"

or it can happen that the number nb is not in the phone book, in that case

return: "Error => Not found: nb"

You can see other examples in the test cases.

JavaScript random tests completed by @matt c

Note
Codewars stdout doesn't print part of a string when between < and >


*/


function phone(strng, num) {

    //check for error cases
    if(strng.indexOf(num) == -1){
      return "Error => Not found: " + num;
    }else if(strng.indexOf(num) != strng.lastIndexOf(num)){
      return "Error => Too many people: " + num;
    }
    
    //then pull out our line from the whole string
    strng = strng.split("\n").filter((val,index,arr) => val.indexOf(num) != -1).join("");
    
    //then format line and return result in correct form
    return format(strng);
    
}

let format = (strng) => {

  strng = strng.split(/[\s$;/*?:,!_&%#@]+/).join(" ");//lets get rid of all not intresting characters ...
  
  //pull out name
  let name = strng.slice().slice(0,strng.indexOf(">"));
      name = name.slice(name.indexOf("<")+1);
  
  //pull out phone number
  let phone = strng.slice().slice(strng.indexOf("+")+1);
      phone = phone.slice(0,15).trim();
  
  //pull out address
  let address = strng.split("<" + name + ">").map(val => val.trim()).join(" ").trim();
      address = address.split("+" + phone).map(val => val.trim()).join(" ").trim();
      
  return `Phone => ${phone}, Name => ${name}, Address => ${address}`

}
