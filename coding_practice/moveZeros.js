

function moveZeros(nums){

    let pos = 0;

    for(i=0;i<nums.length;i++){
        if(nums[i] == 0){
            tmp = nums[i];
            nums[i] = nums[pos];
            nums[pos] = tmp;
            pos++;
            // nums[i],nums[pos] = nums[pos],nums[i];   //python way
            // pos += 1;
        }
    }
    return nums;
}

nums = [0,1,2,0,3,0,7,8,9,0];

console.log(moveZeros(nums));

