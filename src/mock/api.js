import Mock from 'mockjs';

Mock.mock('/api/user/login', 'post', {
    status: 0,
    data: {
        id: 222,
        username: 'admin',
        email: 'admin@51purse.com',
        phone: null,
        role: 0,
        createTime: 1479048325000,
        updateTime: 1479048325000,
    },
});

Mock.mock('/api/user/login', 'get', {
    status: 0,
    data: {
        id: 222,
        username: 'admin',
        email: 'admin@51purse.com',
        phone: null,
        role: 0,
        createTime: 1479048325000,
        updateTime: 1479048325000,
    },
});

Mock.mock('/api/user', {
    status: 0,
    data: {
        id: 222,
        username: 'admin',
        email: 'admin@51purse.com',
        phone: null,
        role: 0,
        createTime: 1479048325000,
        updateTime: 1479048325000,
    },
});

Mock.mock('/api/carts/products/sum', {
    status: 0,
    data: {
        status: 0,
        data: 2,
    },
});

Mock.mock('/api/products/45', {
    status: 0,
    data: {
        id: 45,
        categoryId: 2,
        name: 'oppo R8',
        subtitle: 'oppo促销进行中',
        mainImage: 'mainimage.jpg',
        subImages:
            '["mmall/aa.jpg","mmall/bb.jpg","mmall/cc.jpg","mmall/dd.jpg","mmall/ee.jpg"]',
        detail: 'richtext',
        price: 2500,
        stock: 71,
        status: 1,
        createTime: '2016-11-20 14:21:53',
        updateTime: '2016-11-20 14:21:53',
    },
});

Mock.mock('/api/carts', 'get', {
    status: 0,
    data: {
        cartProductVoList: [
            {
                id: 1,
                userId: 13,
                productId: 1,
                quantity: 1,
                productName: 'iphone7',
                productSubtitle: '双十一促销',
                productMainImage: 'mainimage.jpg',
                productPrice: 7199,
                productStatus: 1,
                productTotalPrice: 7199,
                productStock: 86,
                productSelected: true,
            },
            {
                id: 2,
                userId: 13,
                productId: 2,
                quantity: 1,
                productName: 'oppo R8',
                productSubtitle: 'oppo促销进行中',
                productMainImage: 'mainimage.jpg',
                productPrice: 2999,
                productStatus: 1,
                productTotalPrice: 2999,
                productStock: 86,
                productSelected: false,
            },
        ],
        selectedAll: false,
        cartTotalPrice: 10198,
        cartTotalQuantity: 2,
    },
});
