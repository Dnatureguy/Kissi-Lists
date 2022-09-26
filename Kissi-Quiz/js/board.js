document.addEventListener('DOMContentLoaded', () => {

    //By default, submit button is disabled.
    document.querySelector('.button').disabled = true;

    document.querySelector('#nickname').onkeyup = () => {

        if (document.querySelector('#nickname').value.length > 0) {
            document.querySelector('.button').disabled = false;
        } else {
            document.querySelector('.button').disabled = true;
        }
        
    }   

    //By default, we-move button is not displayed
    document.querySelector('.we-move').style.display = 'none';

    document.querySelector('.button').onclick = () => {
        document.querySelector('.we-move').style.display = 'block';
    }

});