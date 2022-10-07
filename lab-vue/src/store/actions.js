export default {
    updateProfile(context, name) {
        console.log(context)
        context.commit('setName', name)
    }

}