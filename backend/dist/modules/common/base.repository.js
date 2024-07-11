"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseRepository {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return await this.model.create(data);
    }
    async findById(id) {
        return await this.model.findById(id).exec();
    }
    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async delete(id) {
        return await this.model.findByIdAndDelete(id).exec();
    }
    async findAll(filter) {
        return await this.model.find(filter || {}).exec();
    }
}
exports.default = BaseRepository;
