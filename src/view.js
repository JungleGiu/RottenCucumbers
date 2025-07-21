

const printDirectors = () => {
    let list = document.getElementById('list')
    let result = getAllDirectors(movies)
    result.forEach(director => {
        let p = document.createElement('p')
        p.classList.add('inline-block')
        p.classList.add('text-gray-700')
        p.classList.add('text-sm')
        p.classList.add('font-bold')
        p.classList.add('mb-2')
        p.classList.add('mr-6')
        p.classList.add('cursor-pointer')
        p.classList.add('bg-green-500')
        p.classList.add('hover:text-black')
        p.textContent = director
        list.appendChild(p)
    })
    
}

printDirectors()