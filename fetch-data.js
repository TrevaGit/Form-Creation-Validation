// URL of the API
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Select the div where data will be displayed
const apiDataDiv = document.getElementById('api-data');

// Fetch data from the API
fetch(apiURL)
    .then(response => response.json())
    .then(users => {
        // Create a list element
        const ul = document.createElement('ul');

        // Loop through users and create list items
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name; // Display user name
            ul.appendChild(li);
        });

        // Clear loading text and append the list
        apiDataDiv.textContent = '';
        apiDataDiv.appendChild(ul);
    })
    .catch(error => {
        apiDataDiv.textContent = 'Error fetching user data.';
        console.error('Error:', error);
    });
