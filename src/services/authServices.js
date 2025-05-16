export async function fetchWithAuth(url, options = {}) {
    const response = await fetch(url, {
        ...options
    });

    if (response.status === 401) {
        console.log("JWT expired. Logging out...");
        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/login"; 
        return null;
    }

    return response;
}

export default fetchWithAuth;


async function signIn(reqEmail, reqPassword) {  
    console.log(reqEmail);
    console.log(reqPassword);

    const reqOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: String(reqEmail), 
            password: String(reqPassword)
        }),
        credentials: "include"

    };
    
    const response = await fetchWithAuth('http://localhost:3000/api/auth/login', reqOptions);
    
    return response;
}

export  {signIn};