//Q2:
//Input: array of positive integer
//Output: find the first missing positive integer

//Ex:
//[4,2,1,7] -> 3
//[1,3,4,2] -> 5
//Time: O(n)
//Space: O(n)
//Hint: take out the max
//Don't need to worry about numbers less than min and also numbers that is the biggest or larger than the biggest.

function firstPositive (array) {
  let obj = {};
  for(let num of array){
    obj[num] = 1;
  }
  let min = Math.min(...array);
  let max = Math.max(...array);
  for(let i=min; i<array.length + max; i++) {
    if(!(i in obj)) {
      return i;
    }
  }
}

describe('firstPositive', function(){
  it('should return the first missing positive number', function(){
    expect(firstPositive([1,3,4,2])).toBe(5)
  })
})
