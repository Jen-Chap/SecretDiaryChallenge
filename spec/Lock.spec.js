import Lock from '../src/Lock.js'
describe('Lock tests', () => {
    describe('Initial status tests', () => {
        it('new instance of `Lock` reports `locked` is `true`', () => {
            //Arrange
            const lock = new Lock();
            //Act
            const result = lock.isLocked()
            //Assert
            expect(result).toBeTrue();
        })
        it('toggleLock')
    })
});
