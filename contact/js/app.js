const showAdminBtn = () => {
    const user = localStorage.getItem('user');
    if (user !== 'administrador') {
        document.querySelector('#adminBtn').classList.add('d-none');
    };
};

showAdminBtn();