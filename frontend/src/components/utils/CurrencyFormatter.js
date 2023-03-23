const moneyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'KES',
});

export default moneyFormatter;
