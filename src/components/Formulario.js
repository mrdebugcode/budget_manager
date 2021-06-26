import React, {useState} from 'react';
const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    return (
        <form
            onSubmit={agregarGasto}

            //Validar
            //construir el gasto
            //pasar el gasto al componente principal
            //resetear el form
        >
            <h2>Agrega tu gastos aquí</h2>

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 8,000 USD"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Presupuesto"
            />
        </form>
     );
}

export default Formulario;