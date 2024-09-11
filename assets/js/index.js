import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

const alertMessage = document.getElementById('alertMessage')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertMessage.append(wrapper)
};

const alertTrigger = document.getElementById('buttonSend')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Mensaje enviado con exito', 'success')
    })
}


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
