import Modal from "./components/modal"

function App() {
  return (
    <main className="flex flex-col justify-center items-center ">
      <Modal>
        <Modal.Trigger className="p-2 bg-blue-200 border border-blue-400 hover:bg-blue-300 transition-colors duration-200 mt-1">
          Abrir Modal
        </Modal.Trigger>
        <Modal.Panel className="bg-white h-[11rem] max-h-[85rem] w-[30rem] max-w-[450rem] rounded-md">
          <Modal.Content className="flex flex-col justify-center items-center pt-4 gap-3">
            <span className="select-none text-left text-2xl">Deseja prosseguir?</span>
            <p className="text-center">
              A função que deseja efetuar será irrevesível após a confirmação, tenha certeza do que está fazendo antes de finalizar.
            </p>
            <div className="flex flex-row justify-end items-center gap-2">
              <Modal.Cancel className="bg-red-200 border-red-500 border p-2 hover:bg-red-400 transition-colors duration-200">
                Cancelar
              </Modal.Cancel>
              <Modal.Submit className="bg-green-200 border-green-500 border p-2 hover:bg-green-400 transition-colors duration-200 data-disabled:bg-gray-400 data-disabled:border-gray-600 data-disabled:cursor-not-allowed">
                Confirmar
              </Modal.Submit>
            </div>
          </Modal.Content>
        </Modal.Panel>
      </Modal>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?


        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?


        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?


        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?


        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eius nemo dolores quaerat vel. Quo repellendus accusantium libero, nemo non facere tenetur enim autem optio. Eius officia quos explicabo recusandae?
      </div>
    </main>
  )
}

export default App
