class Lock {
    #locked = true;

    isLocked() {
        return this.#locked
    }
}

export default Lock