const strenght = (password) => {
	let i = 0
	if(password.length >= 4) {
		i++
	}

	if(password.length >= 8) {
		i++
	}

	if(password.length >= 10) {
		i++
	}

	if(/[A -Z]/.test(password)) {
		i++
	}

	if(/[1 - 9]/.test(password)) {
		i++
	}

	if(/[A-Za-z0-3]/.test(password)) {
		i++
	}

	return i
}


let container = document.querySelector('.container')

const inputPass = document.querySelector('#password')
inputPass.addEventListener('keyup', (e) => {
	
	let password = inputPass.value
	let stre = strenght(password)

	if(stre === 0) {
		container.classList.remove('weak')
		container.classList.remove('medium')
		container.classList.remove('strong')
	}	else if(stre <= 2) { 
		container.classList.add('weak')
		container.classList.remove('medium')
		container.classList.remove('strong')
	}	else if(stre >= 2 && stre <= 4) {
		container.classList.remove('weak')
		container.classList.add('medium')
		container.classList.remove('strong')
	} else {
		container.classList.remove('weak')
		container.classList.remove('medium')
		container.classList.add('strong')
	}
})


let pass = document.querySelector('#password')
let show = document.querySelector('.show')
show.addEventListener('click', () => {
	if(pass.type === 'password') {
		pass.setAttribute('type', 'text')
		show.classList.add('hide')
	} else {
		pass.setAttribute('type', 'password')
		show.classList.remove('hide')
	}
})