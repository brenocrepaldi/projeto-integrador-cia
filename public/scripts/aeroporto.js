import { conn, executaSql } from "./database.js";

export function cadastroAeroporto(req, res) {
  const aeroporto = req.body.aeroporto;
  const cidade = req.body.cidade;
  const sql = `insert into aeroporto (aeroporto, cidade) values ('${aeroporto}', '${cidade}');`;

  executaSql(sql);
}
export function visualizaAeroporto(req, res) {
  const sql =
    "select a.aeroporto, c.cidade from aeroporto a, cidade c where a.idcidade=c.idcidade";

  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    const aeroportos = data;
    res.render("visualizarAeroporto", { aeroportos });
  });
}
