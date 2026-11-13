// MODEL: único lugar que conversa com o banco. Usa consultas parametrizadas (?)
// para evitar SQL Injection.
const pool = require('../config/database');

const COLUNAS = `id, nome, sinopse, duracao, data_lancamento, data_relancamento, foto_capa, valor_unitario`;

// Retorna todos os filmes
async function selectAll() {
  const [rows] = await pool.query(`SELECT ${COLUNAS} FROM tb_filme ORDER BY id`);
  return rows;
}

// Retorna um filme pelo id (ou undefined, se não existir)
async function selectById(id) {
  const [rows] = await pool.query(`SELECT ${COLUNAS} FROM tb_filme WHERE id = ?`, [id]);
  return rows[0];
}

// Filtra por parte do nome OU da sinopse
async function selectByTexto(texto) {
  const termo = `%${texto}%`;
  const [rows] = await pool.query(
    `SELECT ${COLUNAS} FROM tb_filme WHERE nome LIKE ? OR sinopse LIKE ? ORDER BY id`,
    [termo, termo]
  );
  return rows;
}

module.exports = { selectAll, selectById, selectByTexto };
