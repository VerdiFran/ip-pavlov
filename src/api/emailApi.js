import {instance} from './instances'

const emailApi = {
    sendQuestion({name, email, message}) {
        return instance.post('questions', {owner: name, ownerEmail: email, questionText: message})
    }
}

export default emailApi