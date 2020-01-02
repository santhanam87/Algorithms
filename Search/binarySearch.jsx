(function(){
    let binarySearch = (inputArray=[], searchValue) => {
        let startI = 0;
        let endI = inputArray.length - 1;
        while(startI <= endI){
            let middleI = startI + Math.floor((endI - startI)/2)
            if(inputArray[middleI] == searchValue){
                return middleI;
            }
            if(inputArray[middleI] < searchValue){
                startI = middleI + 1;
            }else{
                endI = middleI - 1;
            }
        }
    }
    let inputData = [1,2,3,4,5,6,7,8,9,10];
    console.info(binarySearch(inputData, 4));
})()