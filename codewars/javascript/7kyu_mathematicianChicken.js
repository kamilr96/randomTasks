/*


	Harry's local chicken shop - The Golden Chick - sells chicken pieces in 
	boxes of 3, 6 and 10.

	Write a function that takes the total number of chicken pieces Harry can 
	eat (n) and returns an array of the possible numbers of chicken pieces he can buy, 
	that are less than or equal to n.

	0 chicken pieces is a valid chicken option.

	For example:

	chickenOptions(9)
	should return [0,3,6,9], as Harry can buy no boxes, a box of 3, a box of 6, 
	or a box of 3 and a box of 6 (9 in total).

	For non-numeric input, the function should return [0].

	Don't forget to rate this kata!


*/


function chickenOptions(n) {
  if(parseInt(n) !== n){return [0]}
  let resArr = [0];
  getRes(resArr,n,0);
  return resArr.filter((val,index) => resArr.indexOf(val) == index).sort((a,b) => a-b);
}

function getRes(arr,n,val){
  if(val > n){return}
  arr.push(val);
  if(arr.indexOf(val+3) == -1){
    getRes(arr,n,val+3);
  }
  if(arr.indexOf(val+10) == -1){
    getRes(arr,n,val+10);
  }
  
}
