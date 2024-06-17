const { CarsController } = require('../../MPA-QA-Advanced/SCR/Controllers/CarsController')

const carsController = new CarsController()

describe('Check Cars API', () => {
    beforeAll(async () => {
        await carsController.login()
    })

    afterAll(async () => {
        const carsResponse = await carsController.getCars()
        const carIds = carsResponse.data.data.map((c) => c.id)
        for (const carId of carIds) {
           const res = await carsController.deleteCarById(carId)
       }
    })

    test('User can get all cars', async () => {
        const carsResponse = await carsController.getCars()
        expect(carsResponse.status).toBe(200)
    })

    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(1, 1, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(1, 2, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(1, 3, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(1, 4, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(1, 5, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(2, 6, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(2, 7, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(2, 8, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(2, 9, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(2, 10, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(3, 11, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(3, 12, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(3, 14, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(3, 15, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(4, 16, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(4, 17, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(4, 18, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(5, 19, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(5, 20, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(5, 21, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(5, 22, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
    test('User can create a new car', async () => {
        let carsResponse = await carsController.getCars()
        const carList = [...carsResponse.data.data]
        const newCarResponse = await carsController.createCar(5, 23, 1020)
        carsResponse = await carsController.getCars()
        const newCarList = carsResponse.data.data
        expect(newCarList.length).toBe(carList.length + 1)
        expect(
            newCarList.find((car) => car.id === newCarResponse.data.data.id)
        ).toBeDefined()
    })
})
