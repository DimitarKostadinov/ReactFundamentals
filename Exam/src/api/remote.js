const host = 'http://localhost:5000/';

async function register(name, email, password) {
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {
    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}
async function getYearlyBalance(year) {
    const res = await fetch(host + `plan/${year}`, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),            
        }
    });
    return await res.json();
}
async function getMontlyBalance(year,month) {
    const res = await fetch(host + `plan/${year}/${month}`, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'),            
        }
    });
    return await res.json();
}
async function postIncomeBudget(year,month,income,budget) {
    const res = await fetch(host + `plan/${year}/${month}`, {
        method: 'POST',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken'), 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            income,
            budget
        })
    });
    return await res.json();
}


export { register, login,getYearlyBalance,getMontlyBalance,postIncomeBudget };