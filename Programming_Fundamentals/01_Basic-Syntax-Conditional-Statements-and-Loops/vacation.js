function vacation(group, type, day) {

    let price = group;

    if (day == 'Friday'){

        switch (type){
            case 'Students': price *= 8.45;
                break;
            case 'Business': price *= 10.90;
                break;
            case 'Regular': price *= 15;
                break;
        }
    } else if (day == 'Saturday'){

        switch (type){
            case 'Students': price *= 9.80;
                break;
            case 'Business': price *= 15.60;
                break;
            case 'Regular': price *= 20;
                break;
        }
    } else if (day == 'Sunday'){

        switch (type){
            case 'Students': price *= 10.46;
                break;
            case 'Business': price *= 16;
                break;
            case 'Regular': price *= 22.50;
                break;
        }
    }

    if (group >= 30 && type == 'Students'){
        price = (price * 85) / 100;
    }

    if (group >= 100 && type == 'Business'){
        price /= group;
        group -= 10;
        price *= group; 
    }

    if ((group >= 10 && group <= 20) && type == 'Regular'){
        price = (price * 95) / 100;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
        
}

vacation(330, "Business", "Sunday");