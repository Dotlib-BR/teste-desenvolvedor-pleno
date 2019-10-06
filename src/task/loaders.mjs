import DataLoader from "dataloader";

export default class TaskLoader {
  constructor(datasource) {
    this.datasource = datasource;

    this.getById = new DataLoader(this.byId.bind(this), { cache: false });
    this.getAll = new DataLoader(this.getAll.bind(this), { cache: false });
  }

  byId([{ id }]) {
    return this.datasource.getById(id).then(rows => [rows]);
  }

  getAll([{ offset, limit }]) {
    return this.datasource.getAll({ offset, limit }).then(rows => [rows]);
  }
}
