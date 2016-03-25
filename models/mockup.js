var data = [
    {
        "Date": "03-12-2016",
        "Customer": "Jack Black",
        "Amount": "$ 223",
        "Status": "Complete"
    },
    {
        "Date": "34-12-2016",
        "Customer": "Tom Cruise",
        "Amount": "$ 223",
        "Status": "Complete"
    },
    {
        "Date": "45-12-2016",
        "Customer": "Jenifer Lawrence",
        "Amount": "$ 223",
        "Status": "Complete"
    },
    {
        "Date": "12-12-2016",
        "Customer": "Britney Spears",
        "Amount": "$ 223",
        "Status": "Complete"
    },
    {
        "Date": "10-02-2016",
        "Customer": "Hollywood Inc",
        "Amount": "$ 223",
        "Status": "Incomplete"
    },
    {
        "Date": "02-12-2016",
        "Customer": "Stacy Morgan",
        "Amount": "$ 223",
        "Status": "Complete"
    },
    {
        "Date": "03-15-2016",
        "Customer": "Tracy Morgan",
        "Amount": "$ 223",
        "Status": "Incomplete"
    }   
];

$(function () {
    $('#table').bootstrapTable({
        data: data
    });
});