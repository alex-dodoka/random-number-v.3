function getRandomInteger() {
    let min = parseInt($('#min').val()),
        max = parseInt($('#max').val()),
        res = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(res);
}