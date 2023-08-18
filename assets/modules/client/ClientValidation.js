class ClientValidation{
	validate(event = {}){
		var {currentTarget} = event
		ClientConfig.params.modals.createModal.buttons.handleValidation({...event, currentTarget})
	}
}