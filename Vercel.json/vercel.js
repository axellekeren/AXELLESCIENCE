const responseObject = {
    statusCode: 200,
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        message: "Hello, world!"
    }
};

// Gunakan JSON.stringify() untuk mengonversi objek JavaScript ke JSON string
const jsonString = JSON.stringify(responseObject);
console.log(jsonString);
