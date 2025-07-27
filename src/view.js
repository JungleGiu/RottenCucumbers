

const list = document.getElementById('list')


const printAllMovies = () => {
list.textContent = ""
let div = document.createElement('div')
div.classList.add('flex')
div.classList.add('justify-end')
let orderAlphabeticallyButton = document.createElement('button')
let orderByYearButton = document.createElement('button')
orderAlphabeticallyButton.textContent = 'Order alphabetically'
orderByYearButton.textContent = 'Order by year'
orderAlphabeticallyButton.classList.add('inline-block')
orderAlphabeticallyButton.classList.add('text-white')
orderAlphabeticallyButton.classList.add('text-lg')
orderAlphabeticallyButton.classList.add('rounded-lg')
orderAlphabeticallyButton.classList.add('bg-orange-500')
orderAlphabeticallyButton.classList.add('p-1')
orderAlphabeticallyButton.classList.add('m-4')
orderAlphabeticallyButton.classList.add('hover:text-black')
orderByYearButton.classList.add('p-1.5')
orderByYearButton.classList.add('inline-block')
orderByYearButton.classList.add('text-white')
orderByYearButton.classList.add('text-lg')
orderByYearButton.classList.add('bg-orange-500')
orderByYearButton.classList.add('rounded-lg')
orderByYearButton.classList.add('m-4')
orderByYearButton.classList.add('hover:text-black')
orderAlphabeticallyButton.addEventListener('click', () => {
   list.textContent = ""
    let movieTitles = orderAlphabetically(movies)
    movieTitles.forEach(movie => {
        let p = document.createElement('p')
        p.classList.add('inline-block')
        p.classList.add('text-gray-700')
        p.classList.add('text-sm')
        p.classList.add('font-bold')
        p.classList.add('mb-2')
        p.classList.add('bg-green-500')
        p.classList.add('mr-6')
        p.textContent = movie
        list.append(p)
    })
})
orderByYearButton.addEventListener('click', () => {
    list.textContent = ""
    let movieTitles = orderByYear(movies)
    movieTitles.forEach(movie => {
        let p = document.createElement('p')
        p.classList.add('inline-block')
        p.classList.add('text-gray-700')
        p.classList.add('text-sm')
        p.classList.add('font-bold')
        p.classList.add('mb-2')
        p.classList.add('bg-green-500')
        p.classList.add('mr-6')
        p.textContent = movie.title
        list.append(p)
    })
})
div.appendChild(orderAlphabeticallyButton)
div.appendChild(orderByYearButton)
list.appendChild(div)
let movieTitles = getAllMovies(movies)
movieTitles.forEach(movie => {
    let p = document.createElement('p')
    p.classList.add('inline-block')
    p.classList.add('text-gray-700')
    p.classList.add('text-sm')
    p.classList.add('font-bold')
    p.classList.add('mb-2')
    p.classList.add('bg-green-500')
    p.classList.add('mr-6')
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
   const printAllGenres = () =>{
    list.textContent = ""
    let result = orderByGenre(movies)
    result.forEach(genre => {
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
        p.textContent = genre
        p.addEventListener('click', () => {
            list.textContent = ""
            let average = moviesAverageByCategory(movies, genre)
            let result = moviesByGenre(movies, genre)
            let title = document.createElement('h1')
            let score = document.createElement('p')
            score.textContent = `⭐️ ${average}` 
            score.classList.add('text-xl')
            score.classList.add('font-bold')
            score.classList.add('mb-2')     
            score.classList.add('block')
            score.classList.add('mx-auto')
            title.textContent = genre
            title.classList.add('text-2xl')
            title.classList.add('font-bold')
            title.classList.add('mb-2')
            list.appendChild(title)
            list.appendChild(score)
            result.forEach(movie    => {
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

   const genresNav = document.getElementById('genres-nav')
   genresNav.addEventListener('click', () => {
    printAllGenres()
   })

   const yearsNav = document.getElementById('years-nav')
   yearsNav.addEventListener('click', () => {
    printAllYears()
   })

   const printAllYears = () => {
    list.textContent = ""
    let result = orderByYear(movies)
    result.forEach(year => {
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
        p.textContent = year.year
        p.addEventListener('click', () => {
            list.textContent = ""
            let result = moviesByYear(movies, year.year)
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
            let best = bestFilmOfYear(movies, year.year)
            let p = document.createElement('p')
            let title = document.createElement('h1')
            let score = document.createElement('p')
            p.textContent = "Best film of the year"
            score.textContent = `⭐️ ${best[0].score}` 
            score.classList.add('text-xl')
            score.classList.add('font-bold')
            score.classList.add('mb-2')     
            score.classList.add('block')
            score.classList.add('mx-auto')
            title.textContent = best[0].title
            title.classList.add('text-2xl')
            title.classList.add('font-bold')
            title.classList.add('mb-2')
            list.appendChild(p)
            list.appendChild(title)
            list.appendChild(score)
        })        
        list.appendChild(p)
    })
   }        
