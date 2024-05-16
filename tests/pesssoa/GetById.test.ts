import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - GetByID", () => {
  it("Selecionar registro", async () => {  
    const res1 = await testServer.get("/pessoa/1")

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Selecionar registro", async () => {
    const res1 = await testServer.get("/pessoa/0")

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
