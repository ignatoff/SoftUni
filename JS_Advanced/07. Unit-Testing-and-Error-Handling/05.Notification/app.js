function notify(message) {
  const input = document.getElementById('notification');
  input.textContent = message;
  input.style.display = 'block';    

  input.addEventListener('click', (e) => {
    input.style.display = 'none';    
  })
}