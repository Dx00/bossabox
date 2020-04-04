const connection = require('../database/connection');

module.exports = {

    // cria repositorios
    async create(req, res){
        const { tool, tool_link, description_tool, tag  } = req.body;
        
        await connection('users').insert({
            tool,
            tool_link,
            description_tool,
            tag
        });
    
        return res.status(200).send('Cadastrado com sucesso!');
    },

    // Mostrar os repositorios cadastrados
    async index(req, res){

        let { page = 1} = req.query;
        let { name = '' } = req.query;
        let { tag = '' } = req.query;


        if(tag != [] || tag != ''){
            const data = await connection('users')
            .offset((page - 1) * 5)
            .where('tag', tag)
            .select('*');
            

            return res.json(data);
        }

        if( name != [] || name != '' ){
            const data = await connection('users')
            .offset((page - 1) * 5)
            .where('tag', name)
            .orWhere('tool', name)
            .orWhere('tool_link', name)
            .orWhere('description_tool', name)
            .select('*');

            return res.json(data);
        } 

        const data = await connection('users')
        .offset((page - 1) * 5)
        .select('*');

        return res.json(data);
        

    },

    async delete(req, res){
        
        const { repoId } = req.body;

        const data = await connection('users')
        .where({ id: repoId })
        .select('*')
        .delete();
        
        if(data){
            return res.json({ mensagem: "removido com sucesso" })
        } else {
            return res.json({ mensagem: "Erro ao deletar este repositório" })
        };
    },

}

