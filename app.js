const btn = document.querySelector('button')

btn.addEventListener('click', ()=> {
    const req = new XMLHttpRequest()
    req.open("GET", "people.json")
    req.setRequestHeader("Content-type", "application/json")
    req.send()
    req.addEventListener("load", ()=> {
        const date = JSON.parse(req.response)
        date.forEach(people => {
            const names = document.createElement('div')
            names.innerHTML = people.name
            document.body.append(names)
            const age = document.createElement('div')
            age.innerHTML = people.age
            document.body.append(age)
            document.querySelector('.name').innerHTML += people.name //2
            document.querySelector('.age').innerHTML += people.age
        })
    })
})