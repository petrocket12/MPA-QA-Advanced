// Функції, що роблять запити до серверу
async function fetchTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const todo = await response.json();
        return todo;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Використання Promise.all та Promise.race з async/await
async function getAllResults() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}

async function getFirstResult() {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()]);
        console.log('First finished result:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

// Виклик функцій
getAllResults();
getFirstResult();