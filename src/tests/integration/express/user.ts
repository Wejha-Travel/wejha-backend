import supertest from "supertest";

export default (app: supertest.SuperAgentTest) => describe("user", () => {
    //@ts-ignore
    let userToken = "";

    test("can't sign up with invalid data", async () => {
        let result = await app.post('/api/v1/user/signup')
        .send({ email: "bob", password: "pass" });

        expect(result.status).toBe(400)
        expect(result.body).toMatchObject({
            status: "error",
            message: "\"first_name\" is required"
        })
    })

    test("can sign up", async () => {
        let result = await app.post('/api/v1/user/signup')
        .send({ email: "bob@email.com", password: "password", first_name: "bob", last_name: "bobson" });

        expect(result.body.status).toBe("success");
        expect(typeof result.body.data).toBe("string");
        userToken = result.body.data;
    })

    test("can sign in", async () => {
        let result = await app.post('/api/v1/user/signin')
        .send({ email: "bob@email.com", password: "password" });

        expect(result.status).toBe(200)
        expect(result.body.status).toBe("success");
        expect(typeof result.body.data).toBe("string");
        userToken = result.body.data;
    })

    test("can fetch survey data", async () => {
        let result = await app.get('/api/v1/user/surveys')
        .set("Authorization", "Bearer " + userToken);

        expect(result.status).toBe(200)
        expect(result.body).toMatchObject({
            status: "success",
            data: []
        });
    })

    test('can add survey result', async () => {
        let result = await app.post('/api/v1/user/surveys')
        .send({ name: "work commute", arrival_time: 600, departure_time: 540, frequency: "1,2,3,4,5", source: { longitude: 1.421, latitude: 0.124 }, destination: { longitude: 1.121, latitude: 0.224 } })
        .set("Authorization", "Bearer " + userToken);

        console.log(result.body);
        expect(result.status).toBe(200)
        expect(result.body).toMatchObject({
            status: "success",
        })
    })


    test("can find added survey data", async () => {
        let result = await app.get('/api/v1/user/surveys')
        .set("Authorization", "Bearer " + userToken);

        expect(result.status).toBe(200)
        expect(result.body).toMatchObject({
            status: "success",
            data: [
                { 
                    name: "work commute", 
                    arrival_time: 600, 
                    departure_time: 540,
                    frequency: "1,2,3,4,5", 
                    source: { 
                        longitude: 1.421, 
                        latitude: 0.124 
                    }, 
                    destination: { 
                        longitude: 1.121, 
                        latitude: 0.224 
                    } 
                }
            ]
        });
    })

    test("can patch survey data", async () => {
        let result = await app.patch('/api/v1/user/surveys/1')
        .send({ arrival_time: 700, departure_time: 640})
        .set("Authorization", "Bearer " + userToken);

        expect(result.status).toBe(200)
        expect(result.body).toMatchObject({
            status: "success",
        });
    })

    test("can find patched survey data", async () => {
        let result = await app.get('/api/v1/user/surveys')
        .set("Authorization", "Bearer " + userToken);

        expect(result.status).toBe(200)
        expect(result.body).toMatchObject({
            status: "success",
            data: [
                { 
                    name: "work commute", 
                    arrival_time: 700, 
                    departure_time: 640,
                    frequency: "1,2,3,4,5", 
                    source: { 
                        longitude: 1.421, 
                        latitude: 0.124 
                    }, 
                    destination: { 
                        longitude: 1.121, 
                        latitude: 0.224 
                    } 
                }
            ]
        });
    })

    test("can delete survey data", async () => {
        let result = await app.delete('/api/v1/user/surveys/1')
        .set("Authorization", "Bearer " + userToken);

        expect(result.status).toBe(200)
        expect(result.body).toMatchObject({
            status: "success",
        });
    })

    test("deleted survey data is gone", async () => {
        let result = await app.get('/api/v1/user/surveys')
        .set("Authorization", "Bearer " + userToken);

        expect(result.status).toBe(200)
        expect(result.body).toMatchObject({
            status: "success",
            data: []
        });
    })

    // test("can sign up", async () => {

    // })

})
