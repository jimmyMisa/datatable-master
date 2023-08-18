class Request{
	static post({url = "", data = {}, then = () =>{}} = params){
		$.ajax({
			method:"POST",
			data,
		})
		.always(then)
	}
}