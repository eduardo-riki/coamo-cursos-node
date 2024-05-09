import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - GetByID", () => {
  it("Selecionar registro", async () => {
    await testServer.post("/cidade").send({
      nome: "Quarto Centenário",
      estado: "Paraná",
    });
  
    const res1 = await testServer.get("/cidade/1")

    expect(res1.statusCode).toEqual(StatusCodes.OK);
    // expect(typeof res1.body).toEqual("number");
  });

  it("ERRO - Selecionar registro", async () => {
    const res1 = await testServer.get("/cidade/0")

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    // expect(typeof res1.body).toHaveProperty("errors.body.nome");
  });
});
