function getRandomInteger() {
    let min = +$('#min').val(),
        max = +$('#max').val(),
        res = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(res);
}