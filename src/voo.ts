import { Request, Response } from "express";
import { cr, executaSql } from "./database";

export async function cadastroVoo(valor: number, req: Request, res: Response) {
  try {
    let objeto = "Voo";
    const sql = `INSERT INTO VOO 
   (ID_VOO, VALOR)
   VALUES
   (SEQ_FABRICANTE.NEXTVAL, :1)`; // alterar tabela no banco

    const dados = [valor];
    executaSql(sql, dados, objeto);
  } catch (e) {
    if (e instanceof Error) {
      cr.message = e.message;
      console.log(e.message);
    } else {
      cr.message = "Erro ao conectar ao oracle. Sem detalhes";
    }
  } finally {
    res.render("cadastroVoo");
  }
}
