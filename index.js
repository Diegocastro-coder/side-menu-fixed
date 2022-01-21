const menuEl = document.getElementById('menu');
const LateralMenuEl = document.getElementById('lateral-menu');

menuEl.addEventListener('click', handleMenu);

function handleMenu() {
  const lateralMenuClasslist = Array.from(LateralMenuEl.classList);
  const isActive = lateralMenuClasslist.find(El => El === 'active');
  
  if(isActive){
      LateralMenuEl.classList.remove('active');
      return;
  }
  LateralMenuEl.classList.add('active')
}


