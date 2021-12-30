import React from 'react'

export const Paginacion = (props) => {

    const getPaginas = () => {
        const resultado = [];
        for (var i = 0; i < props.total; i++) {
            let pagina = i + 1;
            resultado.push( <a onClick={() => props.onChange(pagina)} className={props.pagina === pagina ? "active" : ""} >{pagina}</a>)
            }
            
            return resultado
    }
    

    return (
        <>
            	<div className="topbar-filter">
					<label>Movies per page:</label>
				    	<select>
						<option value="range">5 Movies</option>
						<option value="saab">10 Movies</option>
					</select>
					<div className="pagination2">
						<span>Page {props.pagina} of {props.total}:</span>

                    {getPaginas()}
					</div>
				</div>
        </>
    )
}

export default Paginacion
