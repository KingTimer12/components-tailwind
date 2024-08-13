import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";

const DropdownSearch = ({items}) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState({label: '', value: ''})
  const [search, setSearch] = useState('')
  
  const inputRef = useRef(null)
  const divRef = useRef(null)

  const handleClickOutside = (event) => {
    if ((inputRef.current && !inputRef.current.contains(event.target)) && (divRef.current && !divRef.current.contains(event.target))) {
      setOpen(false)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-1">
      <input
        ref={inputRef}
        onFocus={() => setOpen(true)}
        className="p-2 bg-gray-200 cursor-pointer focus:cursor-text"
        type="text"
        placeholder="Pesquisa..."
        value={selected.label}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase())
          setSelected(e.target.value)
        }}
      />
      <input
        disabled
        className="hidden"
        type="text"
        value={String(selected.value)}
      />
      {open && (
        <RemoveScroll>
          <div ref={divRef} className="fixed flex flex-col bg-white shadow-lg w-[12%] mt-1 max-h-[20%] overflow-y-auto">
            {items.filter(f => String(f.label).toLowerCase().indexOf(search) > -1).map((item, idx) => (<p onClick={() => {
              setSelected(item)
              setOpen(false)
              setSearch('')
            }} key={idx} className="p-2 cursor-pointer hover:bg-gray-200">{item.label}</p>))}
          </div>
        </RemoveScroll>
      )}
    </div>
  );
}

export { DropdownSearch }
export default DropdownSearch;
