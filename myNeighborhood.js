const randomRest = document.querySelector('#randomRes')

const randomNum = () => {
    let result = Math.floor(Math.random() * 3)
    return result
}


const restaurantSelector = () => {
    const num = randomNum()
    console.log(num)
    
    if(num === 0){
        alert('The Smoking Apple!')
    }else if(num === 1){
        alert("Wallaby's!")
    }else {
        alert("Thai Drift!")
    }
}
randomRest.addEventListener('click', restaurantSelector)