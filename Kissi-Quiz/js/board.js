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

});