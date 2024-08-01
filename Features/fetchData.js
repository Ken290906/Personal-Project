//get Data

async function fetchData() {
  try {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

fetchData();



// fetch("https://api.escuelajs.co/api/v1/categories")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(erro

