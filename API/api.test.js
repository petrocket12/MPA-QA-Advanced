const axios = require('axios');

// Set up Axios instance with JSONPlaceholder base URL
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

describe('JSONPlaceholder API tests', () => {
  test('GET /posts: Verify response status and data length', async () => {
    const response = await api.get('/posts');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBeTruthy();
    expect(response.data).toHaveLength(100);
  });

  test('GET /posts/1: Verify response status and data structure', async () => {
    const response = await api.get('/posts/1');
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });

  test('GET /users: Verify response status and user data', async () => {
    const response = await api.get('/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBeTruthy();
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('name');
  });

  test('POST /posts: Verify response status and data structure', async () => {
    const postData = {
      title: 'Using Jest with Axios',
      body: 'This is a test post',
      userId: 1,
    };
    const response = await api.post('/posts', postData);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(postData.title);
  });

  test('POST /posts: Verify response status and data structure with different data', async () => {
    const postData = {
      title: 'Another Jest Test',
      body: 'This is another test post',
      userId: 1,
    };
    const response = await api.post('/posts', postData);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data.title).toBe(postData.title);
  });
});