const anime = ["Anna","Nani","Shudey","Rasengan","Chidory"];

const input = document.getElementById('input');
const btn = document.getElementById('btn');


function Search (e){
    e.preventDefault()
    anime.forEach(element => {
        const regex = new RegExp(`${input.value}`, 'gi');
        const result = regex.test(anime)
        if (input.value === ''){
            console.log('Поле пустое')
            return result === false
        }
        else if (result === false){
            console.log('Совпадения не найдены')
        }
        else if (result ===  true){
            alert('Совпадения найдены')
        }
    });
}

btn.addEventListener('click', Search);


///************************************ */
const numbers = document.getElementById('numbers');
const btnNumbers = document.getElementById('btn_number');


function addNumberTag (){
    const regex = new RegExp(/\W/, 'g')
    const div = document.getElementById('div')
    const a = document.createElement('a')
    div.append(a)

    a.innerText = numbers.value.replace(regex, '')
    a.setAttribute('href', `tel:${numbers.value.replace(regex, '')}`)
};

btnNumbers.addEventListener('click', addNumberTag);



//***************************************** */
const works = {
    id: 1,
    name: 'sanjar',
    surname: 'Abdykulov',
}

const worksTwo = {
    id: 2,
    name: 'Erblo',
    surname: 'Moana',
    fulname: "mimi"
}

const jsonUser = JSON.stringify(works);
const jsonUsers = JSON.stringify(worksTwo);

localStorage.setItem('works', jsonUser)
localStorage.setItem('worksTwo', jsonUsers)

const data = localStorage.getItem('works');

console.log(JSON.parse(data));


const deleteBtn = document.getElementById('removed');
deleteBtn.addEventListener("click", function (){
    localStorage.removeItem('worksTwo')
});


const deleteBtnAll = document.getElementById('delete');
deleteBtnAll.addEventListener("click", function (){
    localStorage.clear()
});