function roadRadar(speed, area) {

    let result = '';
    
    switch (area) {
        case 'city':
            if (speed <= 50) result = `Driving ${speed} km/h in a 50 zone`;
            else if (speed > 50 && speed <= 70) result = `The speed is ${speed - 50} km/h faster than the allowed speed of 50 - speeding`;
            else if (speed > 70 && speed <= 90) result = `The speed is ${speed - 50} km/h faster than the allowed speed of 50 - excessive speeding`;
            else if (speed > 90) result = `The speed is ${speed - 50} km/h faster than the allowed speed of 50 - reckless driving`;
            break;
        case 'residential':
            if (speed <= 20) result = `Driving ${speed} km/h in a 20 zone`;
            else if (speed > 20 && speed <= 40) result = `The speed is ${speed - 20} km/h faster than the allowed speed of 20 - speeding`;
            else if (speed > 40 && speed <= 60) result = `The speed is ${speed - 20} km/h faster than the allowed speed of 20 - excessive speeding`;
            else if (speed > 60) result = `The speed is ${speed - 20} km/h faster than the allowed speed of 20 - reckless driving`;
            break;
        case 'interstate':
            if (speed <= 90) result = `Driving ${speed} km/h in a 90 zone`;
            else if (speed > 90 && speed <= 110) result = `The speed is ${speed - 90} km/h faster than the allowed speed of 90 - speeding`;
            else if (speed > 110 && speed <= 130) result = `The speed is ${speed - 90} km/h faster than the allowed speed of 90 - excessive speeding`;
            else if (speed > 130) result = `The speed is ${speed - 90} km/h faster than the allowed speed of 90 - reckless driving`;
            break;
        case 'motorway':
            if (speed <= 130) result = `Driving ${speed} km/h in a 130 zone`;
            else if (speed > 130 && speed <= 150) result = `The speed is ${speed - 130} km/h faster than the allowed speed of 130 - speeding`;
            else if (speed > 150 && speed <= 170) result = `The speed is ${speed - 130} km/h faster than the allowed speed of 130 - excessive speeding`;
            else if (speed > 170) result = `The speed is ${speed - 130} km/h faster than the allowed speed of 130 - reckless driving`;
            break;
    }

    return result;
}

console.log(roadRadar(40, 'city'));
console.log(roadRadar(21, 'residential'));
console.log(roadRadar(120, 'interstate'));
console.log(roadRadar(200, 'motorway'));