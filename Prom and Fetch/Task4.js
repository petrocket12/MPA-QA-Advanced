// Додаткове завдання 
class TodoFetcher {
    async fetch() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const todo = await response.json();
            return todo;
        } catch (error) {
            console.error('Error fetching todo:', error);
            throw error; // прокидаємо помилку нагору
        }
    }
}

class UserFetcher {
    async fetch() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const user = await response.json();
            return user;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error; // прокидаємо помилку нагору
        }
    }
}

async function getAllResults() {
    try {
        const todoFetcher = new TodoFetcher();
        const userFetcher = new UserFetcher();
        const [todo, user] = await Promise.all([todoFetcher.fetch(), userFetcher.fetch()]);
        console.log('Todo:', todo);
        console.log('User:', user);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}

async function getFirstResult() {
    try {
        const todoFetcher = new TodoFetcher();
        const userFetcher = new UserFetcher();
        const result = await Promise.race([todoFetcher.fetch(), userFetcher.fetch()]);
        console.log('First finished result:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

// Виклик функцій
getAllResults();
getFirstResult();