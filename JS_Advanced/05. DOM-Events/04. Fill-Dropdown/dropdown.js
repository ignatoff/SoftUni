function addItem() {

    const textCnt = document.getElementById('newItemText');
    const valueCnt = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');
    const optionElement = document.createElement('option');

    if (textCnt.value != '' && valueCnt.value != '') {
        optionElement.setAttribute('value', valueCnt.value);
        optionElement.textContent = textCnt.value;
        selectElement.appendChild(optionElement);
        textCnt.value = '';
        valueCnt.value = '';
    }
}