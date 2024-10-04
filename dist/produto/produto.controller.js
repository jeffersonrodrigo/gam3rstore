"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../core");
let ProdutoController = class ProdutoController {
    async obterProdutos() {
        await this.esperarSegundos(2);
        return core_1.produtos.map((produto) => ({
            ...produto,
            especificacoes: { destaque: produto.especificacoes.destaque },
        }));
    }
    esperarSegundos(segundos) {
        return new Promise((resolve) => {
            setTimeout(resolve, segundos * 1000);
        });
    }
};
exports.ProdutoController = ProdutoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "obterProdutos", null);
exports.ProdutoController = ProdutoController = __decorate([
    (0, common_1.Controller)('produtos')
], ProdutoController);
//# sourceMappingURL=produto.controller.js.map