
const API_URL = process.env.API_URL || 'http://localhost:3000'

export const getBooks = async () => {
  const response = await fetch(`${API_URL}/books`)
  if (response.status === 200) {
    const data = await response.json()
    return data
  }
  throw Error(response)
}

export const saveBook = async (book, callback) => {
  console.log('save book')
  if (book?.id) {
    const response = await fetch(`${API_URL}/books/${book.id}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(book) })
    console.log('save resp:', response)
    callback()
    return await response.json()
  }
  const response = await fetch(`${API_URL}/books`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(book) })
  callback()
  return response.json()
}

export const deleteBook = async (bookId, callback) => {
  console.log('del book')
  const response = await fetch(`${API_URL}/books/${bookId}`, { method: 'DELETE' })
  callback()
  return response.ok
}
