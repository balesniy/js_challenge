function houseRobber(nums) {
  return nums.reduce(([prev, curr], i) => [curr, Math.max(prev + i, curr)], [0, 0])[1]
}
