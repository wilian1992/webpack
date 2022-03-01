import './styles.sass'


function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'hello world 2'
    elemH1.classList.add('title')
    return elemH1
}

document.body.appendChild(titleComponent())