function movies(array) {

    let cinema = [];

    for (const info of array) {
        
        if (info.includes('addMovie')) {
            let movie = {};
            movie.name = info.split('addMovie ').join('');
            cinema.push(movie);
        } else if (info.includes('directedBy')) {
            let [nameOf, directorOf] = info.split(' directedBy ');
            let myMovie = cinema.find(x => x.name == nameOf);

            if (myMovie) {
                myMovie.director = directorOf;
            }
        } else if (info.includes('onDate')) {
            let [nameOf, dateOf] = info.split(' onDate ');
            let myMovie = cinema.find(x => x.name == nameOf);

            if (myMovie) {
                myMovie.date = dateOf;
            }
        }
    }
    cinema.forEach(obj => {
        if (obj.name && obj.date && obj.director) {
            console.log(JSON.stringify(obj));
        }
    });
}

function movies(array) {

    let movies = [];

    array.forEach(line => {
        let info = line.split(' ');
        let nameIndex = info.indexOf('addMovie');
        let directorIndex = info.indexOf('directedBy');
        let dateIndex = info.indexOf('onDate');

        if (nameIndex > -1) {
            movies.push({name: info.slice(nameIndex + 1).join(' ')});
        } else if (directorIndex > -1) {
            let name = info.slice(0, directorIndex).join(' ');
            let director = info.slice(directorIndex + 1).join(' ');
            
            movies.forEach(movie => {
                
                if (movie.name === name) movie.director = director;
            });
        } else if (dateIndex > -1) {
            let name = info.slice(0, dateIndex).join(' ');
            let date = info.slice(dateIndex + 1).join(' ');
            
            movies.forEach(movie => {
                
                if (movie.name === name) movie.date = date;
            });
        }        
    });
    movies.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));            
        }
    });
}

movies(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);