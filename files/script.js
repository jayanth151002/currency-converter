const reqCurrData = async (curr1, curr2) => {
    try {

        const apiReq = await axios.get(` https://v6.exchangerate-api.com/v6/d14f9ebf64bb815b4e339f88/latest/${curr1.value}`);
        const currArr = apiReq.data.conversion_rates
        return Number(currArr[curr2.value]);
    }
    catch (e) {

        window.location.href = 'files/serverdown.html';

    }
}

document.querySelector('#getCurr').addEventListener('click', async () => {
    const curr1 = document.querySelector("#fromlist");
    const curr2 = document.querySelector("#tolist");
    const val1 = document.querySelector("#value1");
    const val2 = document.querySelector("#value2");
    val2.value = await reqCurrData(curr1, curr2) * Number(val1.value);
})

