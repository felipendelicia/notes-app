export default async function loginService(credentials: { user: string, password: string }) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }

    try {
        const response = await fetch('http://localhost:4000/api/auth', options)
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
    }
}