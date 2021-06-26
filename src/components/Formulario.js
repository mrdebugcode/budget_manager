import React, {useState} from 'react';
const Formulario = () => {
    return (
        <form>
            <h2>Agrega tu gastos aquí</h2>

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>

            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 8,000 USD"
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