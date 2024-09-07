export async function fetchData(apiUrl) {
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
