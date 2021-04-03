import supertest from "supertest";

export default (app: supertest.SuperAgentTest) => describe("user", () => {
    
    test("user can't sign up with invalid data", async () => {
        let result = await app.post('/api/v1/user/signin')
        .send({ username: "bob", password: "password"});

        expect(result.status).toBe(400)
    })

    test("user can sign up", async () => {
        
    })

    test("user can sign up", async () => {
        
    })

    test("user can sign up", async () => {
        
    })
})
