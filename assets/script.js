let modal = document.querySelector('.modal')
const filmForm = document.getElementById('filmForm')
const image = document.getElementById('image')
const filmName = document.getElementById('filmName')
const imdb = document.getElementById('imdb')
const category = document.getElementById('category')
const add = document.getElementById('add')
const rejisor = document.getElementById('rejisor')
const settings = document.getElementById('settings')
const tbody = document.querySelector('tbody')
const save = document.getElementById('save')
const edit = document.getElementById('edit')
let memoElmenet
add.addEventListener('click', () => {
    modal.classList.toggle('active')
})


save.addEventListener('click', (e) => {
    e.preventDefault()

    let tr = document.createElement('tr')
    let imgtd = document.createElement('td')
    let imgData = document.createElement('img')
    let adData = document.createElement('td')
    let imdbData = document.createElement('td')
    let categoryData = document.createElement('td')
    let rejisorData = document.createElement('td')
    let settingst = document.createElement('td')
    let deletebtn = document.createElement('span')
    let editbtn = document.createElement('span')

    if (image.value === "" || filmName.value === "" || imdb.value === "" || category.value === "" || rejisor.value === "") {
        return
    }


    editbtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
    deletebtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    imgData.src = image.value
    adData.textContent = filmName.value
    imdbData.textContent = imdb.value
    categoryData.textContent = category.value
    rejisorData.textContent = rejisor.value

    deletebtn.style.margin = "5px"
    editbtn.style.margin = "5px"
    imgData.style.width = "40px"
    imgData.style.height = "40px"

    settingst.append(editbtn, deletebtn)
    imgtd.append(imgData)
    tr.append(imgtd, adData, imdbData, categoryData, rejisorData, settingst)
    tbody.append(tr)

    deletebtn.addEventListener('click', () => {
        deletebtn.parentElement.parentElement.remove()
    })

    editbtn.addEventListener('click', (e) => {
        memoElmenet = tr
        image.value = imgData.src
        filmName.value = adData.textContent
        imdb.value = imdbData.textContent
        category.value = categoryData.textContent
        rejisor.value = rejisorData.textContent
        e.preventDefault()

    })

    filmForm.reset()
    edit.addEventListener('click', (e) => {

        memoElmenet.children[0].children[0].src = image.value
        memoElmenet.children[1].textContent = filmName.value
        memoElmenet.children[2].textContent = imdb.value
        memoElmenet.children[3].textContent = category.value
        memoElmenet.children[4].textContent = rejisor.value

    })
})

