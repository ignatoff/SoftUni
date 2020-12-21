function gramophone(band, album, song) {

    let rotate = (album.length * band.length) * song.length / 2;
    let result = rotate / 2.5;
    console.log(`The plate was rotated ${Math.ceil(result)} times.`);   

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');