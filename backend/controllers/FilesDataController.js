const funciones = require('../helpers/Funciones');
const { json } = require('express')



exports.FilesDataController = async (req, res) => {
    try{
        const fileName = req.query.fileName;
        const data_files = await funciones.get_all_files('https://echo-serv.tbxnet.com/v1/secret/files').then(res => {return res})
        const files_array = JSON.parse(data_files).files        
        const json_files = []
        for (let i = 0; i < files_array.length; i++) {
            const file = files_array[i]
            const res_file = await funciones.get_file(`https://echo-serv.tbxnet.com/v1/secret/file/${String(file)}`).then(res => {return res})
            if (res_file !== undefined){
                if (funciones.check_csv(res_file)) {
                    for (let i = 0; i < JSON.parse(funciones.check_csv(res_file)).length; i++) {
                        json_files.push(JSON.parse(funciones.check_csv(res_file))[i])
                    } 
                }
            }
        }

        const data = (json_files)

        
        if(fileName){
            const new_date = data.filter((val) =>{
                return (val.file).indexOf(fileName) >= 0;
            });
            if(new_date.length > 0){
                res.send(JSON.stringify(new_date))
            }else{
                res.status(404).json({ message: 'error 404' });
            }
        }else{
            res.send(JSON.stringify(data))
        }
        
    }catch(err){
        console.log(err)
        res.status(500).json({ message: 'error 500' });
    }  




};