function editElement(ref, match, replacer) {
    const matcher = new RegExp(match, 'g')
    const newString = ref.textContent.replace(matcher, replacer);
    ref.textContent = newString;
}