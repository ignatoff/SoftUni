function attachEventsListeners() {
    const inputUnits = document.getElementById('inputUnits');
    const inputDist = document.getElementById('inputDistance');
    const outputUnits = document.getElementById('outputUnits');
    const outputDist = document.getElementById('outputDistance');

    document.getElementById('convert').addEventListener('click', convert);

    const units = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    };

    function convert(event) {
        event.preventDefault();
    
        const result = (inputDist.value * units[inputUnits.value]) / units[outputUnits.value];
        outputDist.value = result.toFixed(4);
    }
}