

const list = document.getElementById('list')

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
        p.addEventListener('click', () => {
            list.textContent = ""
                let result = getMoviesFromDirector(movies, director)
                let title = document.createElement('h1')
                title.textContent = director
                title.classList.add('text-2xl')
                title.classList.add('font-bold')
                title.classList.add('mb-2')
                    list.appendChild(title)
                result.forEach(movie => {
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
        p.textContent = movie.title

                    list.appendChild(p)
                })

        })
        list.appendChild(p)
    })
    
