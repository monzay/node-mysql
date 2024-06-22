import {pool} from "../conexionDB/conexion.js"

export const routerAdd  = async (req, res) => {
    
    const {nombre} = req.body
    
    try {
        const result = await pool.query('INSERT INTO usuarios (nombre) VALUES (?)', [nombre]);
        res.status(200).json({ message: 'Usuario agregado correctamente', insertId: result.insertId });
    } catch (error) {
        console.error('Error al insertar usuario:', error);
        res.status(500).json({ error: 'Error al insertar usuario' });
    }
 }
 export const routerGet =  async (req,res) => {
    const id = req.params.id
    try {
        const [result] = await pool.query("SELECT * FROM usuarios WHERE id = ?",[id])
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}
export const routerDelete = async (req, res) => {
    const id = req.params.id; // Obtén el valor del parámetro 'id' de la URL
    try {
        // Ejecutar la consulta DELETE en la base de datos
        const result = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        // Verificar si se eliminó alguna fila
        if (result.affectedRows > 0) {
            res.status(200).json({ message: `Usuario con ID ${id} eliminado correctamente` });
        } else {
            res.status(404).json({ error: `No se encontró ningún usuario con ID ${id}` });
        }
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ error: 'Error al eliminar usuario' });
    }
};
export const routerUpdate = async (req,res) => {
    const id = req.params.id
    const {nombre} = req.body 
    
    try {
        const result  = await pool.query("UPDATE usuarios SET nombre = ? WHERE id = ? ",[nombre,id])
        if(result.affectedRows > 0){
            res.status(200).json({ message: `actualizado` });  
        } else {
            res.status(404).json({ error: `No se encontró ningún usuario con ID ${id}` });
        }
    } catch (error) {
        console.log(error)
    }
}
export const  all = async (req,res) => {
    try {
        const [result] =  await pool.query("SELECT * FROM usuarios ")
        res.json(result)
    } catch (error) {
        console.log(error)
    }
}