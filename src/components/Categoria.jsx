import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {
    const {icono, id, nombre} = categoria
    const {handleClickCategoria, categoriaActual} = useQuiosco()
    const resaltarCategoria = () => categoriaActual.id === id ? "bg-amber-400" : "bg-white"
  return (
    <div className={`${resaltarCategoria()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
      <img 
        src={`/img/icono_${icono}.svg`} 
        alt="Imagen icono" 
        className="w-12"
        />
        <button 
          type="button" 
          onClick={() => handleClickCategoria(id)} 
          className="text-lg font-bold cursor-pointer truncate">
        {nombre}</button>
    </div>
  )
}
