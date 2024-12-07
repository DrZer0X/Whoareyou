const locker = document.querySelector('.locker');



      


let chave;
if (locker.id === "01") {
    chave = 'prisioneiro';
} else if (locker.id === "02") {
    chave = 'presa';
} else if (locker.id === "03") {
    chave = 'tormenta';
}

if (!chave) {
    console.error('Locker ID is not set or does not match predefined cases.');
}

locker.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        const inputValue = locker.value.toLowerCase();

        if (inputValue === chave) {
            locker.style.borderColor = 'lime';
            locker.style.color = 'lime';
            entrar();
        } else if (inputValue === 'queda inevitavel em portas vazias') {
            const link = document.createElement("a");
            link.href = "https://drive.google.com/file/d/17Zi1QUF-FFIJnmA_ifbFAAUFr8_-un7F/view?usp=sharing";
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link); // Clean up
        } else {
            locker.classList.add("shake");
            setTimeout(() => locker.classList.remove("shake"), 700);
        }
        
        function entrar() {
            switch (chave) {
                case 'prisioneiro':
                    document.location.href = 'bunny.html';
                    break;
                case 'presa':
                    document.location.href = 'destiny.html';
                    break;
                case 'tormenta':
                    document.location.href = 'darkTruth.html';
                    break;
                default:
                    console.error('Unknown chave value');
                }
      }
      setTimeout(() => locker.style.borderColor = '',
              locker.style.color = '', 
              locker.value = '', 500);
    }  
});




