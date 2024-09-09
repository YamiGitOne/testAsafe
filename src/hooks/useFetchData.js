export const fetchData = async (url, totalResults = 1000) => {
  const resultsPerPage = 10
  let results = []
  let page = 1

  while (results.length < totalResults) {
    const res = await fetch(`${url}?results=${resultsPerPage}&page=${page}`)
    if (!res.ok) throw new Error('Error fetching data from API')

    const data = await res.json()
    results = results.concat(data.results)

    if (data.results.length < resultsPerPage) break

    page++
  }

  return results.slice(0, totalResults)
}
