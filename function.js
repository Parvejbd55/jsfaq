function evenify_all(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num, ': is even number');
        }
        else{
            console.log(num, ': is odd number');
        }
    }
}

nums = [5, 12, 89, 18, 35, 8];
evenify_all(nums);


friends_age = [13, 17, 19, 20, 18];
evenify_all(friends_age);