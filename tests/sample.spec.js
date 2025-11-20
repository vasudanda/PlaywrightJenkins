import { test, expect } from '@playwright/test';

// Configure the test
test.describe('Sample App API Tests', () => {
  
  test('Test Case 1: Verify greeting endpoint returns correct response', async ({ request }) => {
    // Make a GET request to the greeting endpoint
    const response = await request.get('http://localhost:3000/api/greeting?name=John');
    
    // Assert the response status
    expect(response.status()).toBe(200);
    
    // Parse the response body
    const responseBody = await response.json();
    
    // Assert the greeting message
    expect(responseBody.greeting).toBe('Hello, John!');
    
    // Assert that timestamp exists
    expect(responseBody.timestamp).toBeDefined();
    
    console.log('✓ Test Case 1 passed: Greeting endpoint works correctly');
  });

  test('Test Case 2: Verify calculate endpoint processes POST request correctly', async ({ request }) => {
    // Make a POST request to the calculate endpoint
    const response = await request.post('http://localhost:3000/api/calculate', {
      data: {
        a: 10,
        b: 5
      }
    });
    
    // Assert the response status
    expect(response.status()).toBe(200);
    
    // Parse the response body
    const responseBody = await response.json();
    
    // Assert the calculation results
    expect(responseBody.a).toBe(10);
    expect(responseBody.b).toBe(5);
    expect(responseBody.sum).toBe(15);
    expect(responseBody.product).toBe(50);
    
    console.log('✓ Test Case 2 passed: Calculate endpoint works correctly');
  });

  test('Test Case 3: Verify root endpoint returns welcome message', async ({ request }) => {
    // Make a GET request to the root endpoint
    const response = await request.get('http://localhost:3000/');

    // Assert response status
    expect(response.status()).toBe(200);

    // Parse the response body
    const body = await response.json();

    // Assert expected properties
    expect(body.message).toBe('Welcome to Playwright Sample App');
    expect(body.status).toBe('running');

    console.log('✓ Test Case 3 passed: Root endpoint returns welcome message');
  });

});
//Test 4
//Test 5 Verify calculate endpoint handles invalid input
//Test 6 Test

///Test 7 test

//Test 8
