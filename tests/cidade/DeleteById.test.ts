import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Delete By ID", () => {
  it("Deletar registro", async () => {
    await testServer.post("/cidade").send({
      nome: "Goioerê",
      estado: "Paraná",
    });
  
    const res1 = await testServer.delete("/cidade/1")

    expect(res1.statusCode).toEqual(StatusCodes.OK);
    // expect(typeof res1.body).toEqual("number");
  });

  it("ERRO - Deletar registro", async () => {
    const res1 = await testServer.delete("/cidade/0")

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    // expect(typeof res1.body).toHaveProperty("errors.body.nome");
  });


});
