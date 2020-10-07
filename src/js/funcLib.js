//necessary functions library

function setStartPoint(arr, startClass) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].classList.contains(startClass)) {
            i = j + 1;
        }
    }
}

function setActive(arr, activeClass, currentIteration) {
    for (let arrItem of arr) {
        arr[currentIteration].classList.add(activeClass);
        if (arrItem !== arr[currentIteration]) {
            arrItem.classList.remove(activeClass);
        }
    }
}