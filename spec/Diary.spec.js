import Diary from '../src/Diary.js'

describe('diary test', () => {
    let lock1;
    let diary1;
    beforeEach(() => {
        lock1 = { isLocked: () => true };
        diary1 = new Diary(lock1);
    })
    afterEach(() => {
        lock1 = undefined;
        diary1 = undefined;
    })
    it('original status of diary is locked', () => {
        const result = diary1.diaryIsLocked();
        expect(result).toBeTrue();
    })
    it('diaIsLocked is called', () => {
        const lockSpy = spyOn(lock1, 'isLocked')
        diary1.diaryIsLocked();
        expect(lockSpy).toHaveBeenCalled();

    })

})