import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Cidade - Get All", () => {
  it("Listar todos os registros", async () => {
    const res1 = await testServer.get("/cidade/listar");

    expect(Number(res1.header["x-total-count"])).toBeGreaterThan(0);
    expect(res1.statusCode).toEqual(StatusCodes.OK);
    expect(res1.body.length).toBeGreaterThan(0);
    // expect(typeof res1.body).toEqual("number");
  });
});
