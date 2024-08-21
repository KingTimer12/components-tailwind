import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SearchSelect } from "simple-search-dropdown";

function App() {
  const [bookId, setBookId] = useState('')
  const { handleSubmit, register } = useForm()
  const promiseOptions = async (query) => {
    const { data } = await axios.get(`https://ola-scrapper-to-precisando-de-gente-bora.slimeread.com:8443/book_search`, { params: { query } })
    return data.slice(0, 20).map((item) => ({ label: item.book_name_original, value: item.book_id }))
  }

  return (
    <main className="flex flex-col justify-center items-center ">
      <form className="flex flex-col mt-2" onSubmit={handleSubmit((data) => setBookId(data.book))}>
        <SearchSelect
          data={promiseOptions}
          placeholder="Pesquisar" {...register("book")}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white mt-2">Submit</button>
      </form>
      <h1>Id do Livro: {bookId}</h1>
    </main>
  )
}

export default App
