function encodeAndDecodeMessages() {
    
    document.getElementById('main').addEventListener('click', function (e) {
        const input = document.getElementsByTagName('textarea')[0];
        const output = document.getElementsByTagName('textarea')[1];
        const encodeBtn = document.getElementsByTagName('button')[0];
        const decodeBtn = document.getElementsByTagName('button')[1];
        let message = [];

        if (e.target === encodeBtn) {
            message = input.value.split('').map(x => x.charCodeAt(0) + 1);
            const encoded = message.map(x => String.fromCharCode(x)).join('');
            output.value = encoded;
            input.value = '';
            
        } else if (e.target === decodeBtn) {
            const decoded = output.value.split('').map(x => x.charCodeAt(0) - 1);
            output.value = decoded.map(x => String.fromCharCode(x)).join('');
            
        }
    })
}