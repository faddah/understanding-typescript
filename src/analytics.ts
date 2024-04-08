console.log('Analytics is running & will send soon...')

let logged: boolean

const sendAnalytics = (data: string) => {
	console.log(data)
	logged = true
	console.log(logged);
}

sendAnalytics('The data is here!')
