function initialization(context, inject) {
  const customSnackbar = function (message, status) {
    const type = {
      200: 'is-success',
      500: 'is-danger'
    }
    this.$buefy.snackbar.open({
      duration: 5000,
      message: message,
      type: type[status],
      position: 'is-bottom-left',
      actionText: 'Close',
      queue: false,
      onAction: () => {
      }
    })
  }

  context.$customSnackbar = customSnackbar
  inject('customSnackbar', customSnackbar)
}

export default initialization
