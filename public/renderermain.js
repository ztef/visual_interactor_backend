const setButton = document.getElementById('btn')
const usrInput = document.getElementById('usr')

setButton.addEventListener('click', () => {
  const usr = usrInput.value
  setUsr(usr);
  
})

function setUsr(usr) {
  
  window.electronAPI.setUsr(usr)
}