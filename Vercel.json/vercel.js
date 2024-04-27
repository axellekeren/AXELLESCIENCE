exports.handler = async (event) => {
    // Buat objek JavaScript yang ingin Anda kembalikan
    const responseObject = {
        message: "Hello, world!"
    };

    // Konversi objek ke string JSON menggunakan JSON.stringify()
    const responseBody = JSON.stringify(responseObject);

    // Buat respons yang benar
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: responseBody // Pastikan body menggunakan responseBody
    };

    // Kembalikan respons
    return response;
};
