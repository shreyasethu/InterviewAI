let listener = null

export function showDemoBlocked() {
    listener?.()
}

export function subscribeDemoBlocked(fn) {
    listener = fn
    return () => { listener = null }
}
