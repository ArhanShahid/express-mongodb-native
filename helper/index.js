exports.success_message = (data) => {
    return {
        "status": true,
        "response": data,
        "error": null
    }
}

exports.error_message = (e) => {
    return {
        "status": false,
        "response": null,
        "error": e
    }
}