import HumorEntity from "../entities/HumorEntity";
import StorageService from "./storageService";

const CHAVE = "@humor";

export default class HumorService {
  static async listar() {
    const dados = await StorageService.carregar(CHAVE);
    return Array.isArray(dados) ? dados.map(HumorEntity.fromDto) : [];
  }

  static async criar(dto) {
    const lista = await this.listar();
    const novo = new HumorEntity(dto);
    lista.push(novo);
    await StorageService.salvar(CHAVE, lista);
    return novo;
  }

  static async remover(id) {
    const lista = await this.listar();
    const nova = lista.filter(x => String(x.id) !== String(id));
    await StorageService.salvar(CHAVE, nova);
  }
}

