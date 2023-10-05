import { conn, executaSql } from "./database.js";

export function cadastroAeronave(req, res) {
  const modelo = req.body.modelo;
  const anoFabricacao = req.body.anoFabricacao;
  const numAssento = req.body.numAssento;
  const fabricante = req.body.idFabricante; //pegando o valor do select = nome do fabricante
  const sqlFabricante = `select idfabricante from fabricante where fabricante='${fabricante}'`; //sql para pegar o idfabricante de acordo com o nome retornado do select
  conn.query(sqlFabricante, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const idFabricante = data[0].idfabricante; //pegando o idfabricante do data
      const sql = `insert into aeronave (modelo,numassento,anofabricacao,idfabricante) values('${modelo}','${numAssento}','${anoFabricacao}','${idFabricante}');`;
      executaSql(sql);
    }
  });
}
export function visualizaAeronave(req, res) {
  const sql = `select * from aeronave a, fabricante f where a.idfabricante=f.idfabricante `;
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    const aeronaves = data;
    res.render("visualizarAeronave", { aeronaves });
  });
}
