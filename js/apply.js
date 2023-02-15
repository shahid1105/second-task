document.getElementById('btn-apply').addEventListener('click', function(){
    const priceMoney = document.getElementById('price');
    const priceMoneyString = priceMoney.innerText;
    const price = parseInt(priceMoneyString);
    // console.log(price);

    const couponField = document.getElementById('coupon-field');
    const couponFieldText = couponField.value;
    const pleasePayMoney = document.getElementById('please-pay');
    const pleasePayMoneyString = pleasePayMoney.innerText;
    const payMoney = parseInt(pleasePayMoneyString);


    if(couponFieldText === 'DISC30'){
        const discountPrice = (price * 70) / 100;
        const totalPay = payMoney + discountPrice
        pleasePayMoney.innerText = totalPay;
    }
    else{
        alert('You are not eligible for this discount');
        const withoutDiscount = payMoney + price;
        pleasePayMoney.innerText = withoutDiscount;
    }
})