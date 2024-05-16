import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Create", () => {
  it("Criar registro", async () => {
    const res1 = await testServer.post("/cidade").send({
      nome: "Umuarama",
      estado: "Paraná",
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
  });
});
