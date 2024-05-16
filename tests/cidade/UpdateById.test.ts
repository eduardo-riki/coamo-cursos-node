import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Update By ID", () => {
  it("Editar registro", async () => {
    const res1 = await testServer.put("/cidade/9").send({
      nome: "Ubiratã",
      estado: "Paraná",
    });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Editar registro", async () => {
    const res1 = await testServer.put("/cidade/0").send({
      nome: "Go",
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
