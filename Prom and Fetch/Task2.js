function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(todo => todo)
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(user => user)
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Promise.all використовується для отримання результатів обох промісів
Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
        const todo = results[0];
        const user = results[1];
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });

// Promise.race використовується для отримання результату найшвидшого проміса
Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
        console.log('First finished result:', result);
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    }); 
