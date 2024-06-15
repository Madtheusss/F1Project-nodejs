"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const server = (0, fastify_1.default)({ logger: true });
server.register(cors_1.default, {
    origin: "*",
});
const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" },
    { id: 5, name: "Alpine", base: "Enstone, United Kingdom" },
    { id: 6, name: "Aston Martin", base: "Silverstone, United Kingdom" },
    { id: 7, name: "Alfa Romeo Racing", base: "Hinwil, Switzerland" },
    { id: 8, name: "AlphaTauri", base: "Faenza, Italy" },
    { id: 9, name: "Williams", base: "Grove, United Kingdom" },
    { id: 10, name: "Haas", base: "Kannapolis, United States" },
    { id: 11, name: "Uralkali Haas F1 Team", base: "Banbury, United Kingdom" },
    { id: 12, name: "Scuderia Toro Rosso", base: "Faenza, Italy" },
];
const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 2, name: "Lando Norris", team: "McLaren" },
];
server.get("/teams", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.type("application/json").code(200);
    return { teams };
}));
server.get("/drivers", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.type("application/json").code(200);
    return { drivers };
}));
server.get("/drivers/:id", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);
    if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver Not Found" };
    }
    else {
        response.type("application/json").code(200);
        return { driver };
    }
}));
server.listen({ port: 3333 }, () => {
    console.log("Server init");
});
