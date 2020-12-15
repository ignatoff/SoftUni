function metricConverter(num, inMetric, outMetric){
    
    num = Number(num);

    if (inMetric === "mm"){

        if ( outMetric === "cm"){
            num /= 10;
            console.log(num.toFixed(3));            
        } else if (outMetric === "m"){
            num /= 1000;
            console.log(num.toFixed(3));
        }
    }

    if (inMetric === "cm"){

        if (outMetric === "mm"){
            num *= 10;
            console.log(num.toFixed(3));
        } else if (outMetric === "m"){
            num /= 100;
            console.log(num.toFixed(3));
        }
    }

    if (inMetric === "m"){

        if (outMetric === "mm"){
            num *= 1000;
            console.log(num.toFixed(3));
        } else if (outMetric === "cm"){
            num *= 100;
            console.log(num.toFixed(3));
        }
    }    
}

metricConverter("12", "mm", "m");