const list = document.getElementById('list')



const printAllMovies = () => {
list.textContent = ""
let movieTitles = getAllMovies(movies)
movieTitles.forEach(movie => {
    let p = document.createElement('p')
    p.classList.add('inline-block')
    p.classList.add('text-gray-700')
    p.classList.add('text-sm')
    p.classList.add('font-bold')
    p.classList.add('mb-2')
    p.classList.add('mr-6')
    p.classList.add('bg-green-500')
    p.textContent = movie
    list.append(p)
})
}
printAllMovies()

let moviesNav = document.getElementById('movies-nav')
moviesNav.addEventListener('click', () => {
    printAllMovies(movies)
})

let directors = document.getElementById('directors-nav')
directors.addEventListener('click', () => {
    printDirectors(movies)
})

const printDirectors = (movies) => {
    list.textContent = ""
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
                let average = moviesAverageOfDirector(movies, director)
                let title = document.createElement('h1')
                let score = document.createElement('p')
                score.textContent = `⭐️ ${average}` 
                score.classList.add('text-xl')
                score.classList.add('font-bold')
                score.classList.add('mb-2')     
                score.classList.add('block')
                score.classList.add('mx-auto')
                title.textContent = director
                title.classList.add('text-2xl')
                title.classList.add('font-bold')
                title.classList.add('mb-2')
                list.appendChild(title)
                list.appendChild(score)
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
}
    
