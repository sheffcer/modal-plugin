function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="modal-header">
            <span class="modal-title">${options.title || 'Дефолтное окно'}</span>
            <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>${options.content}</p>
                <p>Lorem ipsum dolor sit.</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

/*
  * title: string
  * closable: boolean
  * content: string
  * width: string ('400px')
  * destroy(): void
  * Окно должно закрываться
  * --------------
  * setContent(html: string): void | PUBLIC
  * onClose(): void
  * onOpen(): void
  * beforeClose(): boolean
  * --------------
  * animate.css
  * */
$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const DEFAULT_WIDTH = '600px'
    const $modal = _createModal(options)
    let closing = false

    return {
    open() {
        !closing && $modal.classList.add('open')
    },
    close() {
        closing = true
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        setTimeout(() => {
            $modal.classList.remove('hide')
            closing = false
        }, ANIMATION_SPEED)
    },
    destroy() {
        $modal.remove()
    }
    }
}