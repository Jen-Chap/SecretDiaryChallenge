export default class Diary {
    #lock;

    constructor(lock) {
        this.#lock = lock;
    }
    diaryIsLocked = () => {
        return this.#lock.isLocked();
    }
}