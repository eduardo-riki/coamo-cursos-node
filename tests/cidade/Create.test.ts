import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Create", () => {
  it("Criar registro", async () => {
    const res1 = await testServer.post("/cidade").send({
      nome: "Goioerê",
      estado: "Paraná",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    // expect(typeof res1.body).toEqual("number");
  });

  // it("ERRO - Criar registro", async () => {
  //   const res1 = await testServer.post("/cidade").send({
  //     nome: "Go",
  //   });

  //   expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  //   // expect(typeof res1.body).toHaveProperty("errors.body.nome");
  // });
});
