import RegistroAtividadeEntity from "../entities/RegistroAtividadeEntity";
import StorageService from "./storageService";

const CHAVE = "@registroAtividade";

export default class RegistroAtividadeService {
  static async listar() {
    const dados = await StorageService.carregar(CHAVE);
    return Array.isArray(dados) ? dados.map(RegistroAtividadeEntity.fromDto) : [];
  }

  static async criar(dto) {
    const lista = await this.listar();
    const novo = new RegistroAtividadeEntity(dto);
    lista.push(novo);
    await StorageService.salvar(CHAVE, lista);
    return novo;
  }

  static async remover(id) {
    const lista = await this.listar();
    const novaLista = lista.filter(x => String(x.id) !== String(id));
    await StorageService.salvar(CHAVE, novaLista);
  }
}

