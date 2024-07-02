import SondaService from "../Services/sondaService.js";

class SondaController{


    sondaService = new SondaService();
    
    insertSonda = async(req,res) => {
        try{            
            const {id, temperatura} = req.body;
            if(!id || !temperatura) throw error;
            const data = await this.sondaService.insertSondaService(id,temperatura);
            res.status(201).send({success: true, return: data, message: "Sonda creada"});
        }catch(error){
            res.status(400).send({success:false, errorMsg: "Datos no válidos"})
        }
    }

    getSondas = async(req,res) => {
        try{
            const data = await this.sondaService.getSondasService();            
            res.status(200).send({success: true, return: data, message: "Información obtenida"});
        }catch(error){
            res.status(400).send({success:false, errorMsg: "No se pudo obtener la información"})
        }
    }

    getSondasPorId = async(req,res) => {
        try{
            const {id} = req.params
            const data = await this.sondaService.getSondasPorIdService(id);
            res.status(200).send({success: true, return: data, message: "Información obtenida"});
        }catch(error){
            res.status(404).send({success:false, errorMsg: "Número de sonda incorrecto"})
        }
    }
}

export default SondaController