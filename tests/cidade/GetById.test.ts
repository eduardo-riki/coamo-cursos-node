import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - GetByID", () => {
  it("Selecionar registro", async () => {  
    const res1 = await testServer.get("/cidade/7")

    expect(res1.statusCode).toEqual(StatusCodes.OK);
  });

  it("ERRO - Selecionar registro", async () => {
    const res1 = await testServer.get("/cidade/0")

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });
});
