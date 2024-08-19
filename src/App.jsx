import { useForm } from "react-hook-form";
import { SearchSelect } from 'simple-search-dropdown'

function App() {
  const { handleSubmit, register } = useForm()
  const promiseOptions = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          {value: 1, label: "Abacaxi"},
          {value: 2, label: "Banana"},
          {value: 3, label: "Avião"},
          {value: 4, label: "Bola"},
        ]
        resolve(data);
      }, 1000);
    });

  return (
    <main className="flex flex-col justify-center items-center ">
      <form className="flex flex-col mt-2" onSubmit={handleSubmit((data) => console.log(data))}>
        <SearchSelect
          className="px-4 py-2 min-w-[320px] h-[40px] border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer focus:cursor-text"
          data={promiseOptions}
          itemClassName="p-2 cursor-pointer hover:bg-gray-200"
          placeholder="Pesquisar" {...register("abc")}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white mt-2">Submit</button>
      </form>
    </main>
  )
}

export default App
