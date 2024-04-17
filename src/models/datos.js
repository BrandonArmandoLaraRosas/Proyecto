import mongoose from 'mongoose';

const datosSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    descripcion: { type: String, required: true }
});

const Datos = mongoose.model('Datos', datosSchema );

export default Datos;
