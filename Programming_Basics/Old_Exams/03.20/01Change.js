function change(bitcoins, uan, commission) {

    bitcoins = Number(bitcoins);
    uan = Number(uan);
    commission = Number(commission);

    let levsBitcoin = bitcoins * 1168;
    let dollarUan = uan * 0.15;
    let levUan = dollarUan * 1.76;
    let euro = (levUan + levsBitcoin) / 1.95;

    euro -= (euro * (commission / 100));

    console.log(euro.toFixed(2));
}

change("20", "5678", "2.4");