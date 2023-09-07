const setButton = document.getElementById('btn')
const urlInput = document.getElementById('url')

setButton.addEventListener('click', () => {
  const url = urlInput.value
  loadUrl(url);
  
})

function loadUrl(url) {
  
  window.electronAPI.loadUrl(url)
}