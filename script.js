const url = 'https://jsonplaceholder.typicode.com/todos/1';

async function fetchData(callback) {
  const response = await fetch(url);
  const data = await response.json();
  callback(data.title);
}

document.getElementById('btn').addEventListener('click', async function() {
  fetchData((result) => {
    document.getElementById('output').textContent = result;
  });
});
