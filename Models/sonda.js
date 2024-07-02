class Sonda{

    sondas = []

    createSonda = async(sonda) => {
        this.sondas.push(sonda);     
        return this.sondas[this.sondas.length-1]   
    }
    
    getSondas = async() => {
        return this.sondas
    }

    getSondasPorId = async(id) => {
        const sondasFiltrada = this.sondas.filter(obj => obj.id == id);       
        return sondasFiltrada
    }

}
export default Sonda