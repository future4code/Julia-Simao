export const goToLoginPage = (history) => {
    history.push('/login')
}

export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}

export const goToFeedPage = (history) => {
    history.push('/')
}

export const goToDetailsPage = (history, id) => {
    history.push(`/detalhes/${id}`)
}