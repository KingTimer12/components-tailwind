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
          {value: 5, label: "Lula"},
          {value: 6, label: "Faca"},
          {value: 7, label: "Magnus"},
          {value: 8, label: "Xadrez"},
        ]
        resolve(data);
      }, 1000);
    });

  return (
    <main className="flex flex-col justify-center items-center ">
      <form className="flex flex-col mt-2" onSubmit={handleSubmit((data) => console.log(data))}>
        <SearchSelect
          data={promiseOptions}
          placeholder="Pesquisar" {...register("abc")}
        />
        <button type="submit" className="p-2 bg-blue-500 text-white mt-2">Submit</button>
      </form>
    </main>
  )
}

export default App
