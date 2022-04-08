const color = document.querySelector('#color')
const place = document.querySelector('#place')
const ritual = document.querySelector('#ritual')

color.addEventListener('click', () => {
    alert('Blue!')
})
place.addEventListener('click', () => {
    alert('Hobbiton!')
})
ritual.addEventListener('click', () => {
    alert('The Chocolate Ritual!')
})

//mouse event on COLOR
color.addEventListener('mouseover', () => {
    color.style.backgroundColor = 'rgb(185, 225, 240)'
    color.style.color = 'darkcyan'
})
color.addEventListener('mouseout', () => {
    color.style.backgroundColor = 'rgb(216, 216, 126)'
    color.style.color = 'rgb(215, 113, 203)'
})

//mouse event on PLACE
place.addEventListener('mouseover', () => {
    place.style.backgroundColor = 'purple'
    place.style.color = 'darkcyan'
})
place.addEventListener('mouseout', () => {
    place.style.backgroundColor = 'rgb(216, 216, 126)'
    place.style.color = 'rgb(215, 113, 203)'

})

//mouse event on RITUAL
ritual.addEventListener('mouseover', () => {
    ritual.style.backgroundColor = 'white'
    ritual.style.color = 'darkcyan'

})
ritual.addEventListener('mouseout', () => {
    ritual.style.backgroundColor = 'rgb(216, 216, 126)'
    ritual.style.color = 'rgb(215, 113, 203)'

})
