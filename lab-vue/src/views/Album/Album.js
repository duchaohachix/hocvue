import AlbumServices from '../../services/AlbumServices.js'
import ImageCard from '../../components/ImageCard/ImageCard.vue'
export default {
    name: "Album",
    components: { ImageCard },
    data() {
        return {

            albums: [],
        }
    },
    created: async function () {
        try {
            let response = await AlbumServices.getAllAlbum();
            console.log(response.data);
            this.albums = response.data;
        } catch (error) {
            console.log(error)
        }
    }
};