const funciones = require('../helpers/Funciones');
const { json } = require('express')



exports.FilesListController = async (req, res) => {
    try{
        const data_files_list = await funciones.get_files_list().then(res => {return res})
        if(data_files_list){
            res.send(JSON.stringify(data_files_list))
        }    
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'error 500' });
    }  




};