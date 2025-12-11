//Given an array of elements, return the element that appears most frequently.
// There will always be a single most frequent element.

let array = ["b", "c", "c", "a", "d","d","d"];

function mostFrequent(array) {
    let arr = array;
    let maxCount = 0;
    let element;

    for (let i = 0; i < arr.length; i++) {
        count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }

        if (count > maxCount) {
            maxCount = count;
            element = arr[i];
        }
    }

    console.log("The Most Frequent is (" + element + ") and it is " + maxCount + " times");
}


mostFrequent(array);

