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

Mock.mock('/api/shippings', 'get', {
    status: 0,
    data: {
        pageNum: 1,
        pageSize: 10,
        size: 2,
        orderBy: null,
        startRow: 1,
        endRow: 2,
        total: 2,
        pages: 1,
        list: [
            {
                id: 4,
                userId: 13,
                receiverName: 'geely',
                receiverPhone: '010',
                receiverMobile: '18688888888',
                receiverProvince: '北京',
                receiverCity: '北京市',
                receiverDistrict: '海淀区',
                receiverAddress: '中关村',
                receiverZip: '100000',
                createTime: 1485066385000,
                updateTime: 1485066385000,
            },
            {
                id: 5,
                userId: 13,
                receiverName: 'AAA',
                receiverPhone: '010',
                receiverMobile: '18688888888',
                receiverProvince: '北京',
                receiverCity: '北京市',
                receiverDistrict: '海淀区',
                receiverAddress: '中关村',
                receiverZip: '100000',
                createTime: 1485066392000,
                updateTime: 1485075875000,
            },
        ],
        firstPage: 1,
        prePage: 0,
        nextPage: 0,
        lastPage: 1,
        isFirstPage: true,
        isLastPage: true,
        hasPreviousPage: false,
        hasNextPage: false,
        navigatePages: 8,
        navigatepageNums: [1],
    },
});

Mock.mock('/api/orders/1480515829406', 'get', {
    status: 0,
    data: {
        orderNo: 1480515829406,
        payment: 30000.0,
        paymentType: 1,
        paymentTypeDesc: '在线支付',
        postage: 0,
        status: 10,
        statusDesc: '未支付',
        paymentTime: '',
        sendTime: '',
        endTime: '',
        closeTime: '',
        createTime: '2016-11-30 22:23:49',
        orderItemVoList: [
            {
                orderNo: 1480515829406,
                productId: 1,
                productName: 'iphone7',
                productImage: 'mainimage.jpg',
                currentUnitPrice: 10000.0,
                quantity: 1,
                totalPrice: 10000.0,
                createTime: '2016-11-30 22:23:49',
            },
            {
                orderNo: 1480515829406,
                productId: 2,
                productName: 'oppo R8',
                productImage: 'mainimage.jpg',
                currentUnitPrice: 20000.0,
                quantity: 1,
                totalPrice: 20000.0,
                createTime: '2016-11-30 22:23:49',
            },
        ],
        imageHost: 'http://img.happymmall.com/',
        shippingId: 3,
        receiverName: 'geely',
        shippingVo: {
            receiverName: 'geely',
            receiverPhone: '0100',
            receiverMobile: '186',
            receiverProvince: '北京',
            receiverCity: '北京',
            receiverDistrict: '昌平区',
            receiverAddress: '矩阵小区',
            receiverZip: '100000',
        },
    },
});
