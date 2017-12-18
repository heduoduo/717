export default {
    sumerise(state) {
        let goodPrice = 0;
        state.addCar.forEach((item) => {
            if (item.checked) {
                goodPrice += (item.goodsPrice * item.count * 1);
            }
        });
        return goodPrice;
    }
};