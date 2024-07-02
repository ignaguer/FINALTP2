import Sonda from "../Models/sonda.js"

class SondaService{

    sondaModel = new Sonda();

    insertSondaService = async(id,temp) => {
        try{                      
            if(!/^\d+$/.test(id)||!/^\d+$/.test(temp)) throw error
            
            const idNum = parseInt(id);
            const tempNum = parseInt(temp);

            if(idNum < 0 || idNum > 5 || tempNum < -20 || tempNum > 100) throw error
            
            var date = new Date();
            var fecha = date.toTimeString();            
            const sonda = {id,temp,fecha}                        
            const data = await this.sondaModel.createSonda(sonda);
            return data
        }catch(error){
            throw error
        }
    }

    getSondasService = async() => {
        try{
            const data = await this.sondaModel.getSondas();
            return data
        }catch(error){
            throw error
        }
    }

    getSondasPorIdService = async(id) => {
        try{
            if(!/^\d+$/.test(id)) throw error

            const idNum = parseInt(id);
            if(idNum < 0 || idNum > 5) throw error

            const data = await this.sondaModel.getSondasPorId(id);
            return data
        }catch(error){
            throw error
        }
    }
}
export default SondaService