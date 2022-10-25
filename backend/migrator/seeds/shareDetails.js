// Facades.
const shareDetailModel = require('#models/shareDetails');


module.exports = {
    run: _run
}

async function _run() {

    const exampleData = [
        {
            imgUrl: "/images/upperhewakhola.jpg",
            category: "HydroPower",
            company: "Upper Hewa Khola Hydropower Limited",
            description: "Upper Hewa Khola Small Hydropower project is a run-of-river type of project located in Sankhuwasava district at Siddhapokhai and Jaljala VDCs between longitudes 87o20’45” to 87o22’30” and latitudes 27o19’34” to 27o20’55”, just upstream of existing & operationnal Hewa Khola Small Hydropower Project, 4.5MW which is completed by Barun Hydropower Company Ltd. The same developers are going to construct this project with an installed capacity of 8.5 MW with 236.2 m net head and 4.2 m3/sec design discharge at Q40%. The catchment area is 66km2 including two collection streams Jhutre and Khakuwa Khola.",
            eps: 0,
            ltd: 0,
            peRation: 0,
            paidUpCapital: "0",
            bookValue: 0,
            marketCap: "0",
            dividendHistory: "No dividend history"
        },
        {
            imgUrl: "/images/barun.png",
            category: "HydroPower",
            company: "Barun Hydropower Company Limited ",
            description: "bhdhdsbjs",
            eps: 1,
            ltd: 33,
            peRation: 349.7,
            paidUpCapital: "535815000.00",
            bookValue: 103.07,
            marketCap: "1243090800.00",
            dividendHistory: "2019-2020",
        },
        {
            imgUrl: "/images/api.jfif",
            category: "HydroPower",
            company: "Api Power Company Limited",
            description: "bfndgbmfgf",
            eps: 3,
            ltd: 67,
            peRation: 59.5,
            paidUpCapital: "3844874307.50",
            bookValue: 107.72,
            marketCap: "8389515738.97",
            dividendHistory: "No dividend history"
        },
        {
            imgUrl: "/images/nicasia.jpg",
            category: "Bank",
            company: "NIC ASIA BANK LIMITED",
            description: "gnfsngfb",
            eps: 40,
            ltd: 84,
            peRation: 15.8,
            paidUpCapital: "11564005.37",
            bookValue: 189.90,
            marketCap: "71361477113.09",
            dividendHistory: "No dividend history"
        },
        {
            imgUrl: "/images/nabil.jpg",
            category: "Bank",
            company: "Nabil Bank Limited",
            description: "jfngfdng",
            eps: 21,
            ltd: .78,
            peRation: 35.1,
            paidUpCapital: "22832909000",
            bookValue: 230.30,
            marketCap: "174443424760.00",
            dividendHistory: "No dividend history"
        },
        {
            imgUrl: "/images/prabhu.jpg",
            category: "Bank",
            company: "Prabhu BANK LIMITED",
            description: "gnfsngfb",
            eps: 20,
            ltd: .46,
            peRation: 9.7,
            paidUpCapital: "12708704624.00",
            bookValue: 156.16,
            marketCap: "25188652564.77",
            dividendHistory: "No Dividend History",
        },
    ]

    try {
        await shareDetailModel.bulkCreate(exampleData);
    }
    catch (error) {
        return Promise.reject(error);
    }
}
