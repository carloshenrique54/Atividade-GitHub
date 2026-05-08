function mudarCor(cor){

    document.documentElement.style
    .setProperty('--primary-color', cor);

    localStorage.setItem("corTema", cor);
}

window.onload = () => {

    const corSalva = localStorage.getItem("corTema");

    if(corSalva){

        document.documentElement.style
        .setProperty('--primary-color', corSalva);
    }
}