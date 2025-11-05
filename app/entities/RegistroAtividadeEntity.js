function normalizeId(raw){ return raw ? String(raw) : null; }
function newId(){ return `r${Date.now()}`; }

export default class RegistroAtividadeEntity {
  constructor({
    id=null,
    data='',
    atividade='',
    duracao='',
    intensidade='',
    observacao='',
  } = {}) {
    this.id = normalizeId(id) ?? newId();
    this.data = data;
    this.atividade = atividade;
    this.duracao = duracao;
    this.intensidade = intensidade;
    this.observacao = observacao;
  }

  static fromDto(d){ return d ? new RegistroAtividadeEntity(d) : null; }
  get key(){ return String(this.id); }
}


