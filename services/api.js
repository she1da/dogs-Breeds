export async function fetchBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    console.log({ response })
    if (!response.ok) {
      throw new Error('Failed to fetch breeds')
    }
    const data = await response.json()
    return data.message
  } catch (error) {
    console.error('Error fetching breeds:', error)
    return null
  }
}
