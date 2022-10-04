// const nums = [3,2,3];
// const target = [6]

function twoSum (nums, target) {

  const result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0 ; j < nums.length ; j++){
      const indexCondition = nums[i] + nums[j] === target
      if (indexCondition) {
        result.push(i, j)
      }
    }
  }
  return result
}

//console.log(twoSum(nums,target))
console.log(twoSum([2,7,11,15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3,3], 6)); // [0,1]
