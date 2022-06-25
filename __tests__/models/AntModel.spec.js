import { Ant } from "../../models/Ant";
import { Vehicle } from "../../models/Vehicle";

const ant = new Ant();

describe('validateVehiclePyP Tests', () => {
    test('Plate PBX-1820', () => {
        let veh = new Vehicle('PBX-1820');
        const date = '2022-06-25';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeFalsy();
    }); 
    test('Plate PXX-9651', () => {
        let veh = new Vehicle('PXX-9651');
        const date = '2022-06-30';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeTruly();

    }); 
    test('Plate ABH-1112', () => {
        let veh = new Vehicle('ABH-1112');
        const date = '2022-06-16';
        const time = '8:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeTruly();

    }); 
    test('Plate PPP-3533', () => {
        let veh = new Vehicle('PPP-3533');
        const date = '2022-06-29';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeTruly();

    }); 
    test('Plate AAX-2424', () => {
        let veh = new Vehicle('AAX-2424');
        const date = '2022-06-14';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeFalsy();

    }); 
    test('Plate ABA-5595', () => {
        let veh = new Vehicle('ABA-5595');
        const date = '2022-06-29';
        const time = '8:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeFalsy();

    }); 
    test('Plate PAB-9856', () => {
        let veh = new Vehicle('PAB-9856');
        const date = '2022-06-16';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeTruly();

    }); 
    test('Plate PBB-7777', () => {
        let veh = new Vehicle('PBB-7777');
        const date = '2022-06-26';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeTruly();

    }); 
    test('Plate PBY-8888', () => {
        let veh = new Vehicle('PBY-8888');
        const date = '2022-06-19';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeTruly();

    }); 
    test('Plate PYZ-9859', () => {
        let veh = new Vehicle('PYZ-9859');
        const date = '2022-06-27';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeFalsy();

    }); 
    test('Plate PBX-2820', () => {
        let veh = new Vehicle('PBX-2820');
        const date = '2022-06-29';
        const time = '18:00';
        expect(ant.validateVehiclePyP(veh, date, time)).toBeTruly();

    }); 
})
