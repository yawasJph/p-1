export const auth = (user, password) => {
    if (user !== 'brisa' && password !== '123') {
        alert('usuario no encontrado')
        return
    }
    window.location.href = 'cita.html'
}