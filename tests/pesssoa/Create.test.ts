import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - Create", () => {
  it("Criar registro", async () => {
    const res1 = await testServer.post("/pessoa").send({
      nomeCompleto: "Dino da Silva Sauro",
      email: "dino@gmail.com",
      cidadeId: 5
    });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
  });
});
