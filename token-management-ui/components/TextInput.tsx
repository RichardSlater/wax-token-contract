const TextInput = ({label, placeholder} : {label:string, placeholder:string}) => {
  return (
    <main className="grid grid-cols-2 gap-4 p-2">
      <label className="flex-none p-2" htmlFor="TextInput">{label}</label>
      <input className="rounded-md border-none flex-grow p-2 bg-gradient-to-r from-blue-700 to-blue-900" id="TextInput" type="text" placeholder={placeholder} />
    </main>
  )
}

export default TextInput;