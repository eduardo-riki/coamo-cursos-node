import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe("Pessoa - Get All", () => {
  let accessToken = "";
  beforeAll(async () => {
    const email = "eduardo@gmail.com";
    await testServer
      .post("/usuario/signUp")
      .send({ nome: "Eduardo", email, senha: "123456" });
    const res = await testServer
      .post("/usuario/signIn")
      .send({ email, senha: "123456" });

    accessToken = res.body.accessToken;
  });

  it("Listar todos os registros", async () => {
    const res1 = await testServer
      .get("/pessoa/listar")
      .set({ Authorization: `bearer ${accessToken}` });

    expect(res1.statusCode).toEqual(StatusCodes.OK);
    expect(res1.body.length).toBeGreaterThan(0);

    const res2 = await testServer
      .get("/pessoa/listar?filter=a")
      .set({ Authorization: `bearer ${accessToken}` });

    expect(Number(res2.header["x-total-count"])).toBeGreaterThan(0);
    expect(res2.statusCode).toEqual(StatusCodes.OK);
    expect(res2.body.length).toBeGreaterThan(0);
    // expect(typeof res1.body).toEqual("number");
  });
});
