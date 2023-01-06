function removeElement(array, item) {
    if(array.includes(item)) {
        array.splice(array.indexOf(item), 1);
    } else {
        console.log(`Array hasn't ${item}`);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 8);
console.log(array);