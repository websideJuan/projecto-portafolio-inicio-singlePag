const btnAdd = document.querySelector('.btn__numeros') 
const btnRemove = document.querySelector('.remove')
const input = document.querySelector('.inputNum')
const inputNumText = document.querySelector('.inputNumText')


function calculadora (x, y) {
    const result = x + y
}

const newArr = []

btnAdd.addEventListener('click', (e) => {
    const inputTho = parseInt(e.target.dataset.num)
    
    if(newArr.indexOf() !== 0){
        
        newArr.push(inputTho)

    }

    pintarReslut(newArr)
    
    
})


btnRemove.addEventListener('click', (e) => {
    if(e.target.dataset.remove === "remove"){
        removeResult()
    };
})

const ulElement = document.createElement('ul')
ulElement.classList.add('ul__element')

const pintarReslut = (arr) => {
    const liElement = document.createElement('li')

    arr.forEach(number => {
        liElement.innerHTML = number
    });
    
    ulElement.appendChild(liElement)
}

inputNumText.appendChild(ulElement)

const removeResult = () => {
    newArr.pop()
}