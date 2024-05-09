import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Update By ID", () => {
  it("Editar registro", async () => {
    await testServer.post("/cidade").send({
      nome: "Cascavel",
      estado: "Paraná",
    });

    const res1 = await testServer.put("/cidade/1").send({
      nome: "Maringá",
      estado: "Paraná",
    });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
    // expect(typeof res1.body).toEqual("number");
  });

  it("ERRRO - Editar registro", async () => {
    const res1 = await testServer.put("/cidade/0").send({
      nome: "Go",
    });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    // expect(typeof res1.body).toHaveProperty("errors.body.nome");
  });
});
