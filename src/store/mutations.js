let mutations = {
    update_login (state, data) {
        state.loading = data;
    },
    user_name (state, data) {
        state.userName = data;
    },
    update_addCar (state, data) {
        var flag = true; // 表示该商品在历史记录中没有
        state.addCar = state.addCar.map(item => {
            if (item.id === data.id) {
                flag = false;
                ++item.count;
            }
            return item;
        });
        if (flag) {
            state.addCar.push(data);
        }
    },
    update_checked (state, data) {
        var flag = true;
        state.addCar.forEach((item, index) => {
            if (item.id === data.id) {
                item.checked = data.checked;
            }
            if (!item.checked) {
                flag = false;
            }
        });
        if (!flag) {
            state.checkedAll = false;
        } else {
            state.checkedAll = true;
        };
    },
    update_chose_all (state, data) {
        this.checkedAll = data;
        state.addCar.forEach((item, index) => {
            item.checked = this.checkedAll;
        });
    },
    delete_list (state, data) {
        state.addCar.forEach((item, index) => {
            if (item.checked) {
                state.addCar.splice(index, data.len);
            }
        });
    }
};

export default mutations;