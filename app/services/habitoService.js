import HabitoEntity from "../entities/HabitoEntity";
import StorageService from "./storageService";

const CHAVE = "@habitos";

export default class HabitoService {
  static async listar() {
    const dados = await StorageService.carregar(CHAVE);
    return Array.isArray(dados) ? dados.map(HabitoEntity.fromDto) : [];
  }

  static async criar(dto) {
    const lista = await this.listar();
    const novo = new HabitoEntity(dto);
    lista.push(novo);
    await StorageService.salvar(CHAVE, lista);
    return novo;
  }

  static async remover(id) {
    const lista = await this.listar();
    const novaLista = lista.filter(x => String(x.id) !== String(id));
    await StorageService.salvar(CHAVE, novaLista);
  }

  static async atualizar(dto) {
    const lista = await this.listar();
    const idx = lista.findIndex(x => String(x.id) === String(dto.id));
    if (idx !== -1) {
      lista[idx] = dto;
      await StorageService.salvar(CHAVE, lista);
    }
    return dto;
  }

  static async limparTudo() {
    await StorageService.remover(CHAVE);
  }
}
