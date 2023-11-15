// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const API = 'http://45.7.231.169:3000/api/';

export async function getCarriers() {
  const url = `${API}drivers`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not OK');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('There has been a problem with your fetch operation:', err);
    return false;
  }
}

// async function postCarrier(data) {
//   try {
//     const response = await fetch('https://example.com/profile', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log('Success:', result);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
