<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="" />
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="" target="_blank">主页</a><span>|</span>
            <a href="" target="_blank">vue课程</a><span>|</span>
            <a href="" target="_blank">React课程</a><span>|</span>
            <a href="" target="_blank">支付</a>
        </div>
        <div class="copyright">
            Copyright 2020 JC. <span class="domain">www.jiayuchen.com</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer',
};
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
.footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: 16px;
    text-align: center;
    .footer-logo {
        margin-top: 46px;
        margin-bottom: 31px;
        img {
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link {
        a {
            color: $colorD;
            display: inline-block;
        }
        span {
            margin: 10px;
        }
        margin-bottom: 13px;
    }
    .copyright {
        .domain {
            color: $colorA;
        }
    }
}
</style>
