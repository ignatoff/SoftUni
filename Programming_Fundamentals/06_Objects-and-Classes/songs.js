function songs(array) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let numberSongs = array.shift();
    let command = array.pop();

    for (const info of array) {
        let [typeListSong, nameSong, timeSong] = info.split('_');
        let mySong = new Song(typeListSong, nameSong, timeSong);

        if (command == typeListSong) {
            console.log(nameSong);
        } else if (command == "all") {
            console.log(nameSong);
        }
    }
}

songs(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']


);