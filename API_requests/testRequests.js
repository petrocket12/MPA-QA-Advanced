const axios = require('axios');

// Налаштування інтерцепторів
axios.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

axios.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response.data, null, 2));
  return response;
});

// Функція для тестування API
async function testAPI() {
  try {
    // GET Request 1
    const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.assert(response1.status === 200 && response1.data.id === 1, 'GET Request 1 failed');

    // GET Request 2
    const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
    console.assert(response2.status === 200 && response2.data.id === 2, 'GET Request 2 failed');

    // GET Request 3
    const response3 = await axios.get('https://jsonplaceholder.typicode.com/posts/3');
    console.assert(response3.status === 200 && response3.data.id === 3, 'GET Request 3 failed');

    // POST Request 4
    const response4 = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    });
    console.assert(response4.status === 201, 'POST Request 4 failed');

    // POST Request 5
    const response5 = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'baz',
      body: 'qux',
      userId: 2
    });
    console.assert(response5.status === 201, 'POST Request 5 failed');

    console.log('All tests passed successfully');
  } catch (error) {
    console.error('Test failed', error);
  }
}

testAPI();