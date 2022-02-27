
function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'hello world'
    return elemH1
}

document.body.appendChild(titleComponent())