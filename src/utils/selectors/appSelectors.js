export const getInitialized = (state) => state.app.initialized

export const getMessageInfo = (state) => ({
    status: state.app.messageStatus,
    text: state.app.message,
    visible: state.app.messageVisible
})