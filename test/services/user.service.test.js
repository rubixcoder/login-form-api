const { assert, expect } = require('chai');

describe('UserService', () => {
    let sut = require('../../service/user.service');
    describe('auth', () => {
        it('should return error code of User not found', async () => {
            const username = 'Surbhi';
            const password = 'Harsh';
    
            const result = await sut.auth(username, password);

            expect(result).to.haveOwnProperty('status');
            expect(result).to.haveOwnProperty('data');
            expect(result.status).to.equal(404);
            expect(result.data).to.haveOwnProperty('ERR_CODE');
            expect(result.data.ERR_CODE).to.equal('USER_NOT_FOUND')
        })

        it('should return error code of Incorrect credentials', async () => {
            const username = 'MTN_user';
            const password = 'Harsh';
    
            const result = await sut.auth(username, password);

            expect(result).to.haveOwnProperty('status');
            expect(result).to.haveOwnProperty('data');
            expect(result.status).to.equal(403);
            expect(result.data).to.haveOwnProperty('ERR_CODE')
            expect(result.data.ERR_CODE).to.equal('INCORRECT_CREDENTIALS')
        })

        it('should return User Object', async () => {
            const username = 'MTN_user';
            const password = 'MTN281#^@*';
    
            const result = await sut.auth(username, password);

            console.log(result);

            expect(result).to.haveOwnProperty('status');
            expect(result).to.haveOwnProperty('data');
            expect(result.status).to.equal(200);
            expect(result.data).to.haveOwnProperty('firstName');
            expect(result.data).to.haveOwnProperty('lastName');
            expect(result.data.firstName).to.be.equal('MTN');
            expect(result.data.lastName).to.be.equal('User');
        })
    })
})